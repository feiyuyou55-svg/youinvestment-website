/**
 * Strategies — CMS-ready unified data layer
 * Future: load via Admin CMS / API (Supabase, Sanity, Strapi, etc.)
 */

export const STRATEGY_ORDER = [
  'gcta-defensive', 'gcta-core', 'gcta-growth',
  'enhanced-nasdaq', 'enhanced-sp500', 'flexible-alpha', 'cai-index',
]

export const STRATEGY_PREVIEW_ORDER = [
  'gcta-core', 'gcta-growth', 'enhanced-sp500', 'flexible-alpha', 'cai-index',
]

export const STRATEGIES = {
  'gcta-defensive': {
    id: 'gcta-defensive',
    slug: 'gcta-defensive-allocation',
    nameEn: 'GCTA Defensive Allocation',
    nameZh: 'GCTA 防御配置',
    displayName: 'GCTA Defensive Allocation（GCTA 防御配置）',
    category: 'defensive',
    riskLevel: '1-2',
    benchmark: 'AGG',
    cumulativeReturn: '+18.5%',
    maxDrawdown: '-4.2%',
    sharpeRatio: '1.35',
    sortinoRatio: '1.42',
    updateDate: '2026-05-01',
    status: 'published',
    visibility: 'public',
    positioningZh: '以资本保全和低波动为目标，适合风险偏好较低的投资者。',
    positioningEn: 'Capital preservation and low volatility for conservative investors.',
    suitableAccounts: { zh: ['IRA 退休账户', '个人投资账户', '信托账户'], en: ['IRA', 'Individual', 'Trust'] },
    suitableClients: { zh: ['退休规划客户', '保守型投资者'], en: ['Retirement planners', 'Conservative investors'] },
    riskDescription: { zh: '低风险，注重本金安全。', en: 'Low risk with capital preservation focus.' },
    strategyDescription: { zh: '防御型资产配置策略。', en: 'Defensive asset allocation strategy.' },
    performanceNote: { zh: '历史业绩仅供参考。', en: 'Past performance for reference only.' },
    disclaimer: { zh: '不构成未来收益承诺。', en: 'Not a guarantee of future results.' },
    documents: [],
    relatedIndices: [],
  },
  'gcta-core': {
    id: 'gcta-core',
    slug: 'gcta-core-allocation',
    nameEn: 'GCTA Core Allocation',
    nameZh: 'GCTA 核心配置',
    displayName: 'GCTA Core Allocation（GCTA 核心配置）',
    category: 'core',
    riskLevel: '3-4',
    benchmark: 'AOR',
    cumulativeReturn: '+36.2%',
    maxDrawdown: '-9.1%',
    sharpeRatio: '1.24',
    sortinoRatio: '1.31',
    updateDate: '2026-05-01',
    status: 'published',
    visibility: 'public',
    positioningZh: '长期财富积累与退休规划。',
    positioningEn: 'Long-term wealth accumulation and retirement planning.',
    suitableAccounts: { zh: ['个人投资账户', 'IRA 退休账户', '联名账户', '信托账户'], en: ['Individual', 'IRA', 'Joint', 'Trust'] },
    suitableClients: { zh: ['家庭财富管理者', '长期投资者'], en: ['Family wealth managers', 'Long-term investors'] },
    riskDescription: { zh: '中低风险，股债均衡。', en: 'Moderate-low risk, balanced allocation.' },
    strategyDescription: { zh: '核心均衡配置策略。', en: 'Core balanced allocation strategy.' },
    performanceNote: { zh: '历史业绩仅供参考。', en: 'Past performance for reference only.' },
    disclaimer: { zh: '不构成未来收益承诺。', en: 'Not a guarantee of future results.' },
    documents: [],
    relatedIndices: ['cai-index'],
  },
  'gcta-growth': {
    id: 'gcta-growth',
    slug: 'gcta-growth-allocation',
    nameEn: 'GCTA Growth Allocation',
    nameZh: 'GCTA 成长配置',
    displayName: 'GCTA Growth Allocation（GCTA 成长配置）',
    category: 'growth',
    riskLevel: '4-5',
    benchmark: 'QQQ',
    cumulativeReturn: '+62.3%',
    maxDrawdown: '-18.7%',
    sharpeRatio: '1.05',
    sortinoRatio: '1.12',
    updateDate: '2026-05-01',
    status: 'published',
    visibility: 'public',
    positioningZh: '追求长期资本增值。',
    positioningEn: 'Long-term capital appreciation.',
    suitableAccounts: { zh: ['个人投资账户', 'IRA 退休账户', '教育账户', '信托账户'], en: ['Individual', 'IRA', 'Education', 'Trust'] },
    suitableClients: { zh: ['成长型投资者', '长期增值需求客户'], en: ['Growth-oriented investors'] },
    riskDescription: { zh: '中高风险，注重长期成长。', en: 'Moderate-high risk, growth focus.' },
    strategyDescription: { zh: '成长导向资产配置。', en: 'Growth-oriented asset allocation.' },
    performanceNote: { zh: '历史业绩仅供参考。', en: 'Past performance for reference only.' },
    disclaimer: { zh: '不构成未来收益承诺。', en: 'Not a guarantee of future results.' },
    documents: [],
    relatedIndices: ['cai-index'],
  },
  'enhanced-nasdaq': {
    id: 'enhanced-nasdaq',
    slug: 'enhanced-nasdaq-strategy',
    nameEn: 'Enhanced Nasdaq Strategy',
    nameZh: '纳斯达克增强策略',
    displayName: 'Enhanced Nasdaq Strategy（纳斯达克增强策略）',
    category: 'enhanced',
    riskLevel: '4-5',
    benchmark: 'QQQ',
    cumulativeReturn: '+58.4%',
    maxDrawdown: '-17.2%',
    sharpeRatio: '1.08',
    sortinoRatio: '1.15',
    updateDate: '2026-05-01',
    status: 'published',
    visibility: 'public',
    positioningZh: '以纳斯达克指数为核心，追求科技成长增强收益。',
    positioningEn: 'Nasdaq-centric strategy seeking enhanced tech growth returns.',
    suitableAccounts: { zh: ['个人投资账户', 'IRA 退休账户', '信托账户'], en: ['Individual', 'IRA', 'Trust'] },
    suitableClients: { zh: ['科技成长偏好投资者'], en: ['Tech-growth oriented investors'] },
    riskDescription: { zh: '中高风险，科技板块集中。', en: 'Moderate-high risk with tech concentration.' },
    strategyDescription: { zh: '纳斯达克指数增强策略。', en: 'Nasdaq index enhancement strategy.' },
    performanceNote: { zh: '历史业绩仅供参考。', en: 'Past performance for reference only.' },
    disclaimer: { zh: '不构成未来收益承诺。', en: 'Not a guarantee of future results.' },
    documents: [],
    relatedIndices: ['cai-index'],
  },
  'enhanced-sp500': {
    id: 'enhanced-sp500',
    slug: 'enhanced-sp500-strategy',
    nameEn: 'Enhanced S&P 500 Strategy',
    nameZh: '标普500增强策略',
    displayName: 'Enhanced S&P 500 Strategy（标普500增强策略）',
    category: 'enhanced',
    riskLevel: '4-5',
    benchmark: 'SPY',
    cumulativeReturn: '+48.6%',
    maxDrawdown: '-12.4%',
    sharpeRatio: '1.18',
    sortinoRatio: '1.25',
    updateDate: '2026-05-01',
    status: 'published',
    visibility: 'public',
    positioningZh: '根据市场周期动态调整标普500风险暴露。',
    positioningEn: 'Cycle-aware dynamic S&P 500 risk exposure adjustment.',
    suitableAccounts: { zh: ['个人投资账户', 'IRA 退休账户', '公司账户', '信托账户'], en: ['Individual', 'IRA', 'Corporate', 'Trust'] },
    suitableClients: { zh: ['机构投资者', '长期配置客户'], en: ['Institutional investors', 'Long-term allocators'] },
    riskDescription: { zh: '中高风险，大盘增强。', en: 'Moderate-high risk, broad market enhancement.' },
    strategyDescription: { zh: '标普500指数增强策略。', en: 'S&P 500 index enhancement strategy.' },
    performanceNote: { zh: '历史业绩仅供参考。', en: 'Past performance for reference only.' },
    disclaimer: { zh: '不构成未来收益承诺。', en: 'Not a guarantee of future results.' },
    documents: [],
    relatedIndices: ['cai-index'],
  },
  'flexible-alpha': {
    id: 'flexible-alpha',
    slug: 'flexible-alpha-strategy',
    nameEn: 'Flexible Alpha Strategy',
    nameZh: '灵活阿尔法策略',
    displayName: 'Flexible Alpha Strategy（灵活阿尔法策略）',
    category: 'alpha',
    riskLevel: '5',
    benchmark: 'QQQ',
    cumulativeReturn: '+55.8%',
    maxDrawdown: '-16.2%',
    sharpeRatio: '1.09',
    sortinoRatio: '1.16',
    updateDate: '2026-05-01',
    status: 'published',
    visibility: 'public',
    positioningZh: '通过行业与主题配置追求超额收益。',
    positioningEn: 'Sector and thematic allocation for excess return.',
    suitableAccounts: { zh: ['个人投资账户', '公司账户', '信托账户'], en: ['Individual', 'Corporate', 'Trust'] },
    suitableClients: { zh: ['高风险承受能力投资者'], en: ['High risk tolerance investors'] },
    riskDescription: { zh: '高风险，主动增强。', en: 'High risk, active enhancement.' },
    strategyDescription: { zh: '灵活阿尔法增强策略。', en: 'Flexible alpha enhancement strategy.' },
    performanceNote: { zh: '历史业绩仅供参考。', en: 'Past performance for reference only.' },
    disclaimer: { zh: '不构成未来收益承诺。', en: 'Not a guarantee of future results.' },
    documents: [],
    relatedIndices: [],
  },
  'cai-index': {
    id: 'cai-index',
    slug: 'cai-index-strategy',
    nameEn: 'CAI Index Strategy',
    nameZh: '周期配置指数策略',
    displayName: 'CAI Index Strategy（周期配置指数策略）',
    category: 'index',
    riskLevel: '3-5',
    benchmark: 'SPY',
    cumulativeReturn: '+41.5%',
    maxDrawdown: '-11.3%',
    sharpeRatio: '1.21',
    sortinoRatio: '1.28',
    updateDate: '2026-05-01',
    status: 'published',
    visibility: 'public',
    positioningZh: '基于周期框架的指数增强体系。',
    positioningEn: 'Cycle-framework index enhancement system.',
    suitableAccounts: { zh: ['个人投资账户', 'IRA 退休账户', '联名账户', '信托账户', '公司账户'], en: ['Individual', 'IRA', 'Joint', 'Trust', 'Corporate'] },
    suitableClients: { zh: ['周期框架偏好客户', '指数增强需求客户'], en: ['Cycle-framework investors', 'Index enhancement clients'] },
    riskDescription: { zh: '中风险，周期配置。', en: 'Moderate risk, cycle-based allocation.' },
    strategyDescription: { zh: 'CAI 周期配置指数策略。', en: 'CAI cycle allocation index strategy.' },
    performanceNote: { zh: '历史业绩仅供参考。', en: 'Past performance for reference only.' },
    disclaimer: { zh: '不构成未来收益承诺。', en: 'Not a guarantee of future results.' },
    documents: [],
    relatedIndices: ['cai-index'],
  },
}

/** Normalize strategy for view components */
export function normalizeStrategy(s) {
  if (!s) return null
  return {
    ...s,
    riskDisplay: s.riskLevel,
    cumulativeReturn: s.cumulativeReturn,
    maxDrawdown: s.maxDrawdown,
    sharpe: s.sharpeRatio,
    lastUpdated: s.updateDate,
    positioningZh: s.positioningZh,
    positioningEn: s.positioningEn,
    suitableAccountsZh: s.suitableAccounts?.zh || [],
    suitableAccountsEn: s.suitableAccounts?.en || [],
  }
}

export function strategyLabel(id, locale = 'zh') {
  const s = STRATEGIES[id]
  if (!s) return id
  return locale === 'zh' ? `${s.nameEn}（${s.nameZh}）` : `${s.nameEn} (${s.nameZh})`
}

export function getStrategyById(id) {
  return STRATEGIES[id] ? normalizeStrategy(STRATEGIES[id]) : null
}

export function getPublishedStrategies() {
  return STRATEGY_ORDER
    .map((id) => STRATEGIES[id])
    .filter((s) => s.status === 'published' && s.visibility === 'public')
    .map(normalizeStrategy)
}

export function getPreviewStrategies() {
  return STRATEGY_PREVIEW_ORDER
    .map((id) => STRATEGIES[id])
    .filter((s) => s && s.status === 'published' && s.visibility === 'public')
    .map(normalizeStrategy)
}

export function getFullStrategies() {
  return getPublishedStrategies()
}

export function getMatchedStrategies(ids) {
  return ids.map((id) => getStrategyById(id)).filter(Boolean)
}

export const STRATEGY_LIST = getFullStrategies()
export const STRATEGY_PREVIEW_LIST = getPreviewStrategies()

export const RISK_MATCH_GUIDE = [
  { tierZh: '风险等级 1-2', tierEn: 'Risk Level 1-2', strategies: ['gcta-defensive', 'gcta-core'] },
  { tierZh: '风险等级 3-4', tierEn: 'Risk Level 3-4', strategies: ['gcta-core', 'cai-index'] },
  { tierZh: '风险等级 4-5', tierEn: 'Risk Level 4-5', strategies: ['gcta-growth', 'enhanced-sp500', 'cai-index'] },
  { tierZh: '高风险投资者', tierEn: 'High Risk Investors', strategies: ['flexible-alpha', 'enhanced-nasdaq', 'gcta-growth'] },
]
