import { Octokit } from '@octokit/rest'
import * as fs from 'fs'
import * as path from 'path'

const REPO_OWNER = 'chenxin3170'
const REPO_NAME = 'TrendRadar'

async function fetchIssues() {
  const octokit = new Octokit()

  try {
    // 获取所有未关闭的 Issues
    const issues = await octokit.rest.issues.listForRepo({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      state: 'open',
      per_page: 100
    })

    // 过滤出站点收录申请的 Issues
    return issues.data.filter(issue =>
      issue.title && issue.title.includes('[站点收录申请]')
    )
  } catch (error) {
    console.error('获取 Issues 失败:', error)
    return []
  }
}

function parseIssueBody(body) {
  if (!body) return null

  const siteData = {}

  const nameMatch = body.match(/\*\*站点名称:\*\*\s*(.+)/)
  if (nameMatch) {
    siteData.name = nameMatch[1].trim().replace(/[【】\[\]]/g, '')
  }

  const urlMatch = body.match(/\*\*URL:\*\*\s*(.+)/)
  if (urlMatch) {
    let url = urlMatch[1].trim()
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url
    }
    siteData.url = url
  }

  const descriptionMatch = body.match(/\*\*描述:\*\*\s*(.+)/)
  if (descriptionMatch) {
    siteData.description = descriptionMatch[1].trim()
  }

  const categoryMatch = body.match(/\*\*分类:\*\*\s*(.+)/)
  if (categoryMatch) {
    siteData.category = categoryMatch[1].trim()
  }

  const tagsMatch = body.match(/\*\*标签:\*\*\s*(.+)/)
  if (tagsMatch && tagsMatch[1].trim() !== '无') {
    siteData.tags = tagsMatch[1].trim().split(/[,，]/).map(t => t.trim()).filter(Boolean)
  } else {
    siteData.tags = []
  }

  if (!siteData.name || !siteData.url || !siteData.description) {
    return null
  }

  return siteData
}

function generateId(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

async function main() {
  console.log('🔍 正在从 GitHub Issues 获取站点收录申请...\n')

  const issues = await fetchIssues()

  if (issues.length === 0) {
    console.log('📭 没有找到未关闭的"[站点收录申请]" Issues')
    console.log('💡 提示：用户提交站点后会创建新的 Issue，稍后再运行此命令收录\n')
    return
  }

  console.log(`📋 找到 ${issues.length} 个未关闭的站点收录申请\n`)

  // 读取现有 sites.ts
  const sitesPath = path.join(process.cwd(), 'data/sites.ts')
  let sitesContent = fs.readFileSync(sitesPath, 'utf-8')

  // 解析现有站点
  const existingIds = new Set()
  const existingUrls = new Set()

  // 提取现有站点 ID 和 URL
  const idMatches = sitesContent.matchAll(/id: '([^']+)'/g)
  for (const match of idMatches) {
    existingIds.add(match[1])
  }

  const urlMatches = sitesContent.matchAll(/url: '([^']+)'/g)
  for (const match of urlMatches) {
    existingUrls.add(match[1])
  }

  console.log(`📦 当前已有 ${existingIds.size} 个站点\n`)

  // 分类映射
  const categoryMapping = {
    'reddit': 'reddit', 'trend': 'trend', 'tech': 'tech', 'content': 'content',
    'data': 'data', 'social': 'social', 'cn': 'cn', 'ai': 'ai', 'seo': 'seo',
    'tools': 'tools', 'ecommerce': 'ecommerce', 'design': 'design',
    'learning': 'learning', 'community': 'community', 'media': 'media',
    'Reddit生态': 'reddit', '趋势监控': 'trend', '产品与技术': 'tech', '深度内容': 'content',
    '数据分析': 'data', '社媒聚合': 'social', '中文聚合': 'cn', 'AI工具': 'ai',
    'SEO优化': 'seo', '效率工具': 'tools', '电商运营': 'ecommerce', '设计灵感': 'design',
    '学习资源': 'learning', '技术社区': 'community', '视频媒体': 'media',
    '技术': 'tech', '产品': 'tech', '内容': 'content', '数据': 'data',
    '社交': 'social', '中文': 'cn', 'AI': 'ai', 'SEO': 'seo', '工具': 'tools',
    '电商': 'ecommerce', '设计': 'design', '学习': 'learning', '社区': 'community',
    '媒体': 'media', '趋势': 'trend'
  }

  const newSites = []
  let skipped = 0
  let added = 0

  for (const issue of issues) {
    const parsed = parseIssueBody(issue.body)

    if (!parsed) {
      console.log(`⚠️  无法解析 Issue #${issue.number}: "${issue.title}"`)
      continue
    }

    const id = generateId(parsed.name)
    const normalizedUrl = parsed.url.toLowerCase()

    // 检查是否已存在
    if (existingIds.has(id)) {
      console.log(`⏭️  跳过 "${parsed.name}" - ID 已存在`)
      skipped++
      continue
    }

    if (existingUrls.has(normalizedUrl)) {
      console.log(`⏭️  跳过 "${parsed.name}" - URL 已存在`)
      skipped++
      continue
    }

    // 映射分类
    let category = 'tech'
    if (parsed.category) {
      const mapped = categoryMapping[parsed.category.toLowerCase()]
      if (mapped) {
        category = mapped
      } else {
        console.log(`⚠️  分类 "${parsed.category}" 不在现有分类中，使用默认分类: tech`)
      }
    }

    newSites.push({
      id,
      name: parsed.name,
      url: parsed.url,
      description: parsed.description,
      category,
      tags: parsed.tags || []
    })

    existingIds.add(id)
    existingUrls.add(normalizedUrl)

    console.log(`✅ 添加站点: "${parsed.name}" (分类: ${category})`)
    added++
  }

  console.log(`\n📊 统计: 新增 ${added} 个, 跳过 ${skipped} 个`)

  if (newSites.length === 0) {
    console.log('\n✨ 没有新站点需要添加')
    return
  }

  // 生成新站点代码
  const newSitesCode = newSites.map(site =>
    `  {\n    id: '${site.id}',\n    name: '${site.name}',\n    url: '${site.url}',\n    description: '${site.description}',\n    category: '${site.category}',\n    tags: ${JSON.stringify(site.tags)}\n  }`
  ).join(',\n')

  // 找到 sites 数组的结束位置
  const sitesArrayEnd = sitesContent.lastIndexOf(']')
  const beforeArray = sitesContent.substring(0, sitesArrayEnd)
  const afterArray = sitesContent.substring(sitesArrayEnd)

  // 构建新内容
  const newContent = beforeArray + ',\n' + newSitesCode + '\n' + afterArray

  // 写入文件
  fs.writeFileSync(sitesPath, newContent, 'utf-8')

  console.log('\n✅ 已自动添加到 data/sites.ts\n')
}

main().catch(console.error)
