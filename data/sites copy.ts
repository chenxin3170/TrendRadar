export interface Site {
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

export const categories: Category[] = [
  { id: 'reddit', name: 'Reddit生态', nameEn: 'Reddit Ecosystem', icon: 'reddit' },
  { id: 'trend', name: '趋势监控', nameEn: 'Trend Monitoring', icon: 'trending' },
  { id: 'tech', name: '产品与技术', nameEn: 'Products & Tech', icon: 'tech' },
  { id: 'content', name: '深度内容', nameEn: 'Deep Content', icon: 'content' },
  { id: 'data', name: '数据分析', nameEn: 'Data Analytics', icon: 'data' },
  { id: 'social', name: '社媒聚合', nameEn: 'Social Media', icon: 'social' },
  { id: 'cn', name: '中文聚合', nameEn: 'Chinese Aggregation', icon: 'cn' },
  { id: 'ecommerce', name: '电商工具', nameEn: 'E-commerce Tools', icon: 'ecommerce' }
]

export const sites: Site[] = [
  {
    id: 'reddit-home',
    name: 'Reddit 首页',
    url: 'https://www.reddit.com',
    description: '痛点探测器，发现热门话题和用户需求',
    category: 'reddit',
    tags: ['社区', '话题', '需求挖掘']
  },
  {
    id: 'r-remotework',
    name: 'r/remotework',
    url: 'https://www.reddit.com/r/remotework',
    description: '远程工作机会和经验分享',
    category: 'reddit',
    tags: ['远程工作', '求职']
  },
  {
    id: 'r-workonline',
    name: 'r/WorkOnline',
    url: 'https://www.reddit.com/r/WorkOnline',
    description: '在线赚钱方法和技巧讨论',
    category: 'reddit',
    tags: ['赚钱', '副业', '在线工作']
  },
  {
    id: 'r-freelance',
    name: 'r/freelance',
    url: 'https://www.reddit.com/r/freelance',
    description: '自由职业者交流社区',
    category: 'reddit',
    tags: ['自由职业', '接单']
  },
  {
    id: 'r-forhire',
    name: 'r/forhire',
    url: 'https://www.reddit.com/r/forhire',
    description: '求职招聘接活平台',
    category: 'reddit',
    tags: ['招聘', '求职', '外包']
  },
  {
    id: 'r-digitalnomad',
    name: 'r/digitalnomad',
    url: 'https://www.reddit.com/r/digitalnomad',
    description: '数字游民生活方式分享',
    category: 'reddit',
    tags: ['数字游民', '远程生活']
  },
  {
    id: 'r-copywriting',
    name: 'r/copywriting',
    url: 'https://www.reddit.com/r/copywriting',
    description: '文案写作技巧和案例分享',
    category: 'reddit',
    tags: ['文案', '写作', '营销']
  },
  {
    id: 'r-webdev',
    name: 'r/webdev',
    url: 'https://www.reddit.com/r/webdev',
    description: '前端开发技术讨论',
    category: 'reddit',
    tags: ['前端', '开发', '技术']
  },
  {
    id: 'r-datascience',
    name: 'r/datascience',
    url: 'https://www.reddit.com/r/datascience',
    description: '数据科学和机器学习讨论',
    category: 'reddit',
    tags: ['数据科学', 'AI', '机器学习']
  },
  {
    id: 'google-trends',
    name: 'Google Trends',
    url: 'https://trends.google.com',
    description: '搜索即需求，发现热门搜索趋势',
    category: 'trend',
    tags: ['趋势', '搜索', '需求']
  },
  {
    id: 'tiktok-creative',
    name: 'TikTok Creative Center',
    url: 'https://ads.tiktok.com/business/creativecenter',
    description: '内容趋势和热门话题分析',
    category: 'trend',
    tags: ['TikTok', '内容趋势', '短视频']
  },
  {
    id: 'exploding-topics',
    name: 'Exploding Topics',
    url: 'https://explodingtopics.com',
    description: '早期信号追踪，发现爆发式增长话题',
    category: 'trend',
    tags: ['早期趋势', '信号追踪']
  },
  {
    id: 'pinterest-predicts',
    name: 'Pinterest Predicts',
    url: 'https://business.pinterest.com/pinterest-predicts',
    description: '审美趋势预言，提前把握潮流',
    category: 'trend',
    tags: ['审美', '趋势预测', '设计']
  },
  {
    id: 'product-hunt',
    name: 'Product Hunt',
    url: 'https://producthunt.com',
    description: '新产品首发平台，发现创新产品',
    category: 'tech',
    tags: ['产品', '创新', '新锐']
  },
  {
    id: 'github-trending',
    name: 'GitHub Trending',
    url: 'https://github.com/trending',
    description: '技术底座信号，发现热门开源项目',
    category: 'tech',
    tags: ['GitHub', '开源', '技术']
  },
  {
    id: 'hacker-news',
    name: 'Hacker News',
    url: 'https://news.ycombinator.com',
    description: '硅谷技术风向，了解科技前沿',
    category: 'tech',
    tags: ['科技', '创业', '技术新闻']
  },
  {
    id: 'gartner-hype',
    name: 'Gartner Hype Cycle',
    url: 'https://www.gartner.com/en/newsroom/press-releases',
    description: '技术成熟度评估，了解技术发展阶段',
    category: 'tech',
    tags: ['技术评估', '成熟度', 'Gartner']
  },
  {
    id: 'substack',
    name: 'Substack',
    url: 'https://substack.com',
    description: '深度长文订阅，发现优质 newsletter',
    category: 'content',
    tags: [' newsletter', '深度内容', '订阅']
  },
  {
    id: 'answer-public',
    name: 'AnswerThePublic',
    url: 'https://answerthepublic.com',
    description: '用户搜索问题挖掘，了解用户真实需求',
    category: 'content',
    tags: ['用户问题', '搜索需求', '内容灵感']
  },
  {
    id: 'buzzsumo',
    name: 'BuzzSumo',
    url: 'https://buzzsumo.com',
    description: '内容传播热力图，分析内容影响力',
    category: 'content',
    tags: ['内容分析', '传播力', '影响力']
  },
  {
    id: 'crunchbase',
    name: 'Crunchbase',
    url: 'https://crunchbase.com',
    description: '融资信号，发现获得投资的公司',
    category: 'data',
    tags: ['融资', '创业', '投资']
  },
  {
    id: 'data-ai',
    name: 'data.ai',
    url: 'https://data.ai',
    description: '应用排名，掌握 App 市场动态',
    category: 'data',
    tags: ['App排名', '移动应用', '市场数据']
  },
  {
    id: 'similarweb',
    name: 'SimilarWeb',
    url: 'https://similarweb.com',
    description: '流量分析，了解网站流量来源',
    category: 'data',
    tags: ['流量分析', '网站数据', '用户来源']
  },
  {
    id: 'meta-ad-library',
    name: 'Meta Ad Library',
    url: 'https://www.facebook.com/ads/library',
    description: '竞品广告，洞察竞争对手广告策略',
    category: 'data',
    tags: ['广告', '竞品分析', 'Meta']
  },
  {
    id: 'feedly',
    name: 'Feedly',
    url: 'https://feedly.com',
    description: 'RSS聚合，聚合管理你的信息源',
    category: 'social',
    tags: ['RSS', '信息聚合', '阅读']
  },
  {
    id: 'twitter-x',
    name: 'Twitter/X',
    url: 'https://x.com',
    description: '舆论第一现场，把握热点舆论',
    category: 'social',
    tags: ['社交媒体', '热点', '舆论']
  },
  {
    id: 'youtube-trending',
    name: 'YouTube Trending',
    url: 'https://www.youtube.com/feed/trending',
    description: '视频趋势，了解热门视频内容',
    category: 'social',
    tags: ['YouTube', '视频', '趋势']
  },
  {
    id: 'newsnow',
    name: 'NewsNow',
    url: 'https://newsnow.busiyi.world',
    description: '中文全平台热榜，聚合中文互联网热点',
    category: 'cn',
    tags: ['中文', '热榜', '聚合']
  },
  {
    id: 'sopilot',
    name: 'SoPilot',
    url: 'https://sopilot.net/zh/hot-tweets',
    description: 'AI/Web3起爆帖，发现 AI 和区块链热点',
    category: 'cn',
    tags: ['AI', 'Web3', '热点']
  },
  {
    id: 'aihot',
    name: 'AIHOT',
    url: 'https://aihot.virxact.com',
    description: 'AI精选资讯，筛选优质 AI 相关信息',
    category: 'cn',
    tags: ['AI', '资讯', '中文']
  },
  {
    id: 'buzzing',
    name: 'Buzzing',
    url: 'https://buzzing.cc',
    description: '全球热门讨论，实时跟踪海外热点',
    category: 'cn',
    tags: ['热门', '全球', '中文']
  },
  {
    id: 'chao-neng-wen-xian',
    name: '超能文献（Suppr）',
    url: 'http://suppr.wilddata.cn/',
    description: '让医学文献检索回归"说人话"',
    category: 'content',
    tags: ['医学', '文献', '检索']
  },
  {
    id: 'chu-hai-jiang',
    name: '出海匠',
    url: 'https://www.chuhaijiang.com',
    description: 'AI 智能体全面管理社交电商工作流',
    category: 'ecommerce',
    tags: ['创业', 'AI', '社交电商']
  }
]