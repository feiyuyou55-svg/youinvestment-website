/**
 * Indices — CMS-ready index center data
 */

export const INDEX_ORDER = [
  'cai-index', 'china-cai', 'japan-cai', 'global-multi-asset', 'sector-rotation', 'ai-infra-cycle',
]

export const INDICES = {
  'cai-index': {
    id: 'cai-index',
    slug: 'cai-index',
    nameEn: 'CAI Index',
    nameZh: '周期配置指数',
    shortName: 'CAI',
    indexType: 'cycle_allocation',
    region: 'US',
    baseDate: '2020-01-01',
    baseValue: 1000,
    currentValue: 1415,
    ytdReturn: '+8.2%',
    sinceInceptionReturn: '+41.5%',
    maxDrawdown: '-11.3%',
    benchmark: 'SPY',
    methodologySummary: {
      zh: '基于周期框架的指数增强体系，结合宏观周期阶段动态调整资产配置。',
      en: 'Cycle-framework index enhancement with dynamic allocation by macro cycle phase.',
    },
    riskLevel: '3-5',
    constituents: [],
    rebalanceFrequency: 'Monthly',
    updateDate: '2026-05-01',
    status: 'published',
    visibility: 'public',
    relatedStrategies: ['cai-index', 'gcta-core'],
    documents: [],
    disclaimer: {
      zh: '指数表现仅供参考，不构成投资建议。',
      en: 'Index performance for reference only — not investment advice.',
    },
  },
  'china-cai': {
    id: 'china-cai',
    slug: 'china-cai-index',
    nameEn: 'China CAI Index',
    nameZh: '中国周期配置指数',
    shortName: 'China CAI',
    indexType: 'cycle_allocation',
    region: 'China',
    status: 'draft',
    visibility: 'hidden',
    relatedStrategies: [],
    documents: [],
  },
  'japan-cai': {
    id: 'japan-cai',
    slug: 'japan-cai-index',
    nameEn: 'Japan CAI Index',
    nameZh: '日本周期配置指数',
    shortName: 'Japan CAI',
    indexType: 'cycle_allocation',
    region: 'Japan',
    status: 'draft',
    visibility: 'hidden',
    relatedStrategies: [],
    documents: [],
  },
  'global-multi-asset': {
    id: 'global-multi-asset',
    slug: 'global-multi-asset-cycle-index',
    nameEn: 'Global Multi-Asset Cycle Index',
    nameZh: '全球多资产周期指数',
    shortName: 'GMA Cycle',
    indexType: 'multi_asset',
    region: 'Global',
    status: 'draft',
    visibility: 'hidden',
    relatedStrategies: [],
    documents: [],
  },
  'sector-rotation': {
    id: 'sector-rotation',
    slug: 'sector-rotation-index',
    nameEn: 'Sector Rotation Index',
    nameZh: '行业轮动指数',
    shortName: 'Sector Rotation',
    indexType: 'sector',
    region: 'US',
    status: 'draft',
    visibility: 'hidden',
    relatedStrategies: [],
    documents: [],
  },
  'ai-infra-cycle': {
    id: 'ai-infra-cycle',
    slug: 'ai-infrastructure-cycle-index',
    nameEn: 'AI Infrastructure Cycle Index',
    nameZh: 'AI基础设施周期指数',
    shortName: 'AI Infra Cycle',
    indexType: 'thematic',
    region: 'Global',
    status: 'draft',
    visibility: 'hidden',
    relatedStrategies: [],
    documents: [],
  },
}

export const INDEX_PAGE = {
  titleZh: '指数中心',
  titleEn: 'Index Center',
  introZh: 'YIM 周期框架指数体系，以 CAI Index 为核心。',
  introEn: 'YIM cycle-framework index system, anchored by the CAI Index.',
}

export function getVisibleIndices() {
  return INDEX_ORDER
    .map((id) => INDICES[id])
    .filter((i) => i && i.visibility === 'public' && i.status === 'published')
}

export function getIndexBySlug(slug) {
  return Object.values(INDICES).find((i) => i.slug === slug && i.visibility === 'public') || null
}
