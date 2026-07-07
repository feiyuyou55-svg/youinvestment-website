/**
 * Strategies — CMS-ready performance data
 * Future: replace static export with API/CMS fetch via data/index.js
 */

export const STRATEGY_ORDER = [
  'conservative', 'bond', 'balanced', 'growth', 'dynamic', 'alpha', 'cai',
]

export function strategyLabel(id, locale = 'zh') {
  const s = STRATEGIES[id]
  if (!s) return id
  return locale === 'zh' ? `${s.nameEn}（${s.nameZh}）` : `${s.nameEn} (${s.nameZh})`
}

export const STRATEGIES = {
  conservative: {
    id: 'conservative',
    nameEn: 'Conservative Strategy',
    nameZh: '保守策略',
    riskDisplay: '1-2',
    riskZh: '低风险',
    riskEn: 'Low Risk',
    benchmark: 'AGG',
    cumulativeReturn: '+18.5%',
    maxDrawdown: '-4.2%',
    sharpe: '1.35',
    lastUpdated: '2026-05-01',
    positioningZh: '以资本保全和低波动为目标，适合风险偏好较低的投资者。',
    positioningEn: 'Capital preservation and low volatility for conservative investors.',
    suitableAccountsZh: ['IRA 退休账户', '个人投资账户', '信托账户'],
    suitableAccountsEn: ['IRA', 'Individual', 'Trust'],
  },
  bond: {
    id: 'bond',
    nameEn: 'Bond Enhanced Strategy',
    nameZh: '债券增强策略',
    riskDisplay: '1-2',
    riskZh: '低风险',
    riskEn: 'Low Risk',
    benchmark: 'AGG / TLT',
    cumulativeReturn: '+22.1%',
    maxDrawdown: '-5.8%',
    sharpe: '1.28',
    lastUpdated: '2026-05-01',
    positioningZh: '以债券为核心，追求稳健收益增强，适合退休规划和现金管理需求。',
    positioningEn: 'Bond-centric with steady enhancement for retirement and cash management.',
    suitableAccountsZh: ['IRA 退休账户', '个人投资账户', '信托账户', '公司账户'],
    suitableAccountsEn: ['IRA', 'Individual', 'Trust', 'Corporate'],
  },
  balanced: {
    id: 'balanced',
    nameEn: 'Balanced Strategy',
    nameZh: '平衡配置策略',
    riskDisplay: '3-4',
    riskZh: '中低风险',
    riskEn: 'Moderate-Low',
    benchmark: 'AOR',
    cumulativeReturn: '+36.2%',
    maxDrawdown: '-9.1%',
    sharpe: '1.24',
    lastUpdated: '2026-05-01',
    positioningZh: '长期财富积累与退休规划。',
    positioningEn: 'Long-term wealth accumulation and retirement planning.',
    suitableAccountsZh: ['个人投资账户', 'IRA 退休账户', '联名账户', '信托账户'],
    suitableAccountsEn: ['Individual', 'IRA', 'Joint', 'Trust'],
  },
  growth: {
    id: 'growth',
    nameEn: 'Growth Strategy',
    nameZh: '成长策略',
    riskDisplay: '4-5',
    riskZh: '中高风险',
    riskEn: 'Moderate-High',
    benchmark: 'QQQ',
    cumulativeReturn: '+62.3%',
    maxDrawdown: '-18.7%',
    sharpe: '1.05',
    lastUpdated: '2026-05-01',
    positioningZh: '追求长期资本增值。',
    positioningEn: 'Long-term capital appreciation.',
    suitableAccountsZh: ['个人投资账户', 'IRA 退休账户', '教育账户', '信托账户'],
    suitableAccountsEn: ['Individual', 'IRA', 'Education', 'Trust'],
  },
  dynamic: {
    id: 'dynamic',
    nameEn: 'Dynamic Strategy',
    nameZh: '动态配置策略',
    riskDisplay: '4-5',
    riskZh: '中高风险',
    riskEn: 'Moderate-High',
    benchmark: 'SPY',
    cumulativeReturn: '+48.6%',
    maxDrawdown: '-12.4%',
    sharpe: '1.18',
    lastUpdated: '2026-05-01',
    positioningZh: '根据市场周期动态调整风险暴露。',
    positioningEn: 'Cycle-aware dynamic risk exposure adjustment.',
    suitableAccountsZh: ['个人投资账户', 'IRA 退休账户', '公司账户', '信托账户'],
    suitableAccountsEn: ['Individual', 'IRA', 'Corporate', 'Trust'],
  },
  alpha: {
    id: 'alpha',
    nameEn: 'Alpha Strategy',
    nameZh: '主动增强策略',
    riskDisplay: '5',
    riskZh: '高风险',
    riskEn: 'High Risk',
    benchmark: 'QQQ',
    cumulativeReturn: '+55.8%',
    maxDrawdown: '-16.2%',
    sharpe: '1.09',
    lastUpdated: '2026-05-01',
    positioningZh: '通过行业与主题配置追求超额收益。',
    positioningEn: 'Sector and thematic allocation for excess return.',
    suitableAccountsZh: ['个人投资账户', '公司账户', '信托账户'],
    suitableAccountsEn: ['Individual', 'Corporate', 'Trust'],
  },
  cai: {
    id: 'cai',
    nameEn: 'CAI Index Strategy',
    nameZh: '周期配置指数策略',
    riskDisplay: '3-5',
    riskZh: '中风险',
    riskEn: 'Moderate',
    benchmark: 'SPY',
    cumulativeReturn: '+41.5%',
    maxDrawdown: '-11.3%',
    sharpe: '1.21',
    lastUpdated: '2026-05-01',
    positioningZh: '基于周期框架的指数增强体系。',
    positioningEn: 'Cycle-framework index enhancement system.',
    suitableAccountsZh: ['个人投资账户', 'IRA 退休账户', '联名账户', '信托账户', '公司账户'],
    suitableAccountsEn: ['Individual', 'IRA', 'Joint', 'Trust', 'Corporate'],
  },
}

export const STRATEGY_LIST = STRATEGY_ORDER.map((id) => STRATEGIES[id])

/** Home page preview — top 5 core strategies */
export const STRATEGY_PREVIEW_ORDER = ['balanced', 'growth', 'dynamic', 'alpha', 'cai']
export const STRATEGY_PREVIEW_LIST = STRATEGY_PREVIEW_ORDER.map((id) => STRATEGIES[id])

export const RISK_MATCH_GUIDE = [
  { tierZh: '风险等级 1-2', tierEn: 'Risk Level 1-2', strategies: ['conservative', 'bond'] },
  { tierZh: '风险等级 3-4', tierEn: 'Risk Level 3-4', strategies: ['balanced', 'cai'] },
  { tierZh: '风险等级 4-5', tierEn: 'Risk Level 4-5', strategies: ['growth', 'dynamic', 'cai'] },
  { tierZh: '高风险投资者', tierEn: 'High Risk Investors', strategies: ['alpha', 'dynamic', 'growth'] },
]
