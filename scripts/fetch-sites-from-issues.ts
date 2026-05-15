import { Octokit } from '@octokit/rest'
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

interface Site {
  id: string
  name: string
  url: string
  description: string
  category: string
  tags: string[]
  icon?: string
}

interface Category {
  id: string
  name: string
  nameEn: string
  icon: string
}

const REPO_OWNER = 'chenxin3170'
const REPO_NAME = 'TrendRadar'
const ISSUE_LABEL = '站点收录申请'

async function fetchIssues() {
  const octokit = new Octokit()

  try {
    const issues = await octokit.rest.issues.listForRepo({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      state: 'all',
      per_page: 100
    })

    return issues.data
  } catch (error) {
    console.error('获取Issues失败:', error)
    return []
  }
}

function parseIssueBody(body: string | null): Partial<Site> | null {
  if (!body) return null

  const siteData: Partial<Site> = {}
  
  const nameMatch = body.match(/\*\*站点名称:\*\*\s*(.+)/) || body.match(/^#\s*(.+)/)
  if (nameMatch) {
    let name = nameMatch[1].trim()
    name = name.replace(/[【】\[\]]/g, '').trim()
    siteData.name = name
  }

  const urlMatch = body.match(/\*\*URL:\*\*\s*(.+)/) || body.match(/官网地址.*：\s*(.+)/) || body.match(/官网.*：\s*(.+)/)
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
  } else {
    const lines = body.split('\n')
    let descLine = ''
    for (const line of lines) {
      if (line.trim() && !line.startsWith('#') && !line.startsWith('**') && !line.startsWith('![') && !line.startsWith('http')) {
        descLine = line.trim()
        break
      }
    }
    if (descLine) {
      siteData.description = descLine
    }
  }

  const categoryMatch = body.match(/\*\*分类:\*\*\s*(.+)/)
  if (categoryMatch) {
    siteData.category = categoryMatch[1].trim()
  }

  const tagsMatch = body.match(/\*\*标签:\*\*\s*(.+)/)
  if (tagsMatch) {
    const tagsStr = tagsMatch[1].trim()
    if (tagsStr !== '无') {
      siteData.tags = tagsStr.split(/[,，]/).map(t => t.trim()).filter(Boolean)
    } else {
      siteData.tags = []
    }
  }

  if (!siteData.name || !siteData.url || !siteData.description) {
    return null
  }

  return siteData
}

function generateId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

function loadExistingSites(): { sites: Site[], categories: Category[] } {
  const sitesPath = path.join(__dirname, '../data/sites.ts')
  const content = fs.readFileSync(sitesPath, 'utf-8')
  
  const sitesMatch = content.match(/export const sites: Site\[\] = (\[.+\])/s)
  const categoriesMatch = content.match(/export const categories: Category\[\] = (\[.+\])/s)
  
  let sites: Site[] = []
  let categories: Category[] = []
  
  if (sitesMatch) {
    try {
      sites = JSON.parse(sitesMatch[1])
    } catch {
      sites = []
    }
  }
  
  if (categoriesMatch) {
    try {
      categories = JSON.parse(categoriesMatch[1])
    } catch {
      categories = []
    }
  }

  return { sites, categories }
}

function saveSites(sites: Site[], categories: Category[]) {
  const sitesPath = path.join(__dirname, '../data/sites.ts')
  
  const sitesString = JSON.stringify(sites, null, 2)
    .replace(/"([^"]+)":/g, ' $1:')
    .replace(/"/g, "'")
    .replace(/': \[/g, "': [")
  
  const categoriesString = JSON.stringify(categories, null, 2)
    .replace(/"([^"]+)":/g, ' $1:')
    .replace(/"/g, "'")
  
  const content = `export interface Site {
  id: string
  name: string
  url: string
  description: string
  category: CategoryId
  tags: string[]
  icon?: string
}

export type CategoryId = 'reddit' | 'trend' | 'tech' | 'content' | 'data' | 'social' | 'cn' | 'ecommerce'

export interface Category {
  id: CategoryId
  name: string
  nameEn: string
  icon: string
}

export const categories: Category[] = ${categoriesString}

export const sites: Site[] = ${sitesString}`

  fs.writeFileSync(sitesPath, content)
  console.log('sites.ts 更新成功')
}

async function main() {
  console.log('正在从GitHub Issues获取站点收录申请...')
  
  const issues = await fetchIssues()
  console.log(`找到 ${issues.length} 个相关Issues`)

  const existingSites = loadExistingSites()
  const existingIds = new Set(existingSites.sites.map(s => s.id))

  const newSites: Site[] = []
  
  for (let i = 0; i < issues.length; i++) {
    const issue = issues[i]
    console.log(`\n处理 Issue #${i + 1}: "${issue.title}" (状态: ${issue.state})`)
    
    if (issue.state !== 'closed') {
      const parsed = parseIssueBody(issue.body)
      
      if (!parsed) {
        console.log('  → 无法解析 Issue body')
        console.log(`  → Issue body 内容: "${issue.body ? issue.body.substring(0, 200) + (issue.body.length > 200 ? '...' : '') : '空'}"`)
        continue
      }
      
      if (!parsed.name) {
        console.log('  → 缺少站点名称')
        continue
      }
      
      if (!parsed.url) {
        console.log('  → 缺少站点 URL')
        continue
      }
      
      if (!parsed.description) {
        console.log('  → 缺少站点描述')
        continue
      }
      
      const id = generateId(parsed.name)
      console.log(`  → 站点名称: ${parsed.name}`)
      console.log(`  → 生成的 ID: ${id}`)
      
      if (existingIds.has(id)) {
        console.log('  → 站点已存在，跳过')
        continue
      }
      
      let category = parsed.category || 'ecommerce'
      const validCategories = ['reddit', 'trend', 'tech', 'content', 'data', 'social', 'cn', 'ecommerce']
      if (!validCategories.includes(category)) {
        console.log(`  → 分类 "${category}" 无效，使用默认分类: ecommerce`)
        category = 'ecommerce'
      }
      
      newSites.push({
        id,
        name: parsed.name,
        url: parsed.url,
        description: parsed.description,
        category,
        tags: parsed.tags || []
      })
      console.log(`  → ✓ 添加成功 (分类: ${category})`)
    } else {
      console.log('  → Issue 已关闭，跳过')
    }
  }

  if (newSites.length > 0) {
    const updatedSites = [...existingSites.sites, ...newSites]
    saveSites(updatedSites, existingSites.categories || [
      { id: 'reddit', name: 'Reddit生态', nameEn: 'Reddit Ecosystem', icon: 'reddit' },
      { id: 'trend', name: '趋势监控', nameEn: 'Trend Monitoring', icon: 'trending' },
      { id: 'tech', name: '产品与技术', nameEn: 'Products & Tech', icon: 'tech' },
      { id: 'content', name: '深度内容', nameEn: 'Deep Content', icon: 'content' },
      { id: 'data', name: '数据分析', nameEn: 'Data Analytics', icon: 'data' },
      { id: 'social', name: '社媒聚合', nameEn: 'Social Media', icon: 'social' },
      { id: 'cn', name: '中文聚合', nameEn: 'Chinese Aggregation', icon: 'cn' },
      { id: 'ecommerce', name: '电商工具', nameEn: 'E-commerce Tools', icon: 'ecommerce' }
    ])
    console.log(`已添加 ${newSites.length} 个新站点`)
  } else {
    console.log('没有发现新站点')
  }
}

main().catch(console.error)