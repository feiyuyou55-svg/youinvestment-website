/** Account types — CMS-ready */

export const ACCOUNT_HELP = {
  itemsZh: ['资产配置', '股票与 ETF 组合管理', '现金管理', '风险管理', '长期财富规划', '周期跟踪与动态调整'],
  itemsEn: ['Asset allocation', 'Equity & ETF portfolios', 'Cash management', 'Risk management', 'Long-term wealth planning', 'Cycle tracking & dynamic adjustment'],
}

export const FEATURED_ACCOUNTS = [
  {
    id: 'personal',
    featured: true,
    titleZh: '个人投资账户',
    titleEn: 'Individual Investment Account',
    descZh: [
      '最常见的证券投资账户。',
      '适用于股票、ETF 与长期财富管理。',
      '可根据风险等级匹配不同策略。',
    ],
    descEn: [
      'The most common U.S. securities account.',
      'For equities, ETFs, and long-term wealth management.',
      'Strategies matched to your risk level.',
    ],
    strategyIds: ['gcta-growth', 'gcta-core', 'cai-index', 'enhanced-sp500'],
    riskCta: true,
  },
  {
    id: 'ira',
    featured: true,
    titleZh: 'IRA 退休账户',
    titleEn: 'IRA Retirement Account',
    descZh: [
      '适用于退休规划与长期财富积累。',
      '税务优惠与长期复利积累的重要工具。',
    ],
    descEn: [
      'For retirement planning and long-term wealth accumulation.',
      'Tax advantages and long-term compounding.',
    ],
    strategyIds: ['gcta-core', 'cai-index', 'gcta-growth', 'gcta-defensive'],
    riskCta: false,
  },
]

export const OTHER_ACCOUNTS = [
  {
    id: 'joint',
    nameZh: '联名账户',
    nameEn: 'Joint Account',
    descZh: '两人或多人共同持有，适合家庭或伙伴协同管理。',
    descEn: 'Co-held for family or partner collaborative management.',
  },
  {
    id: 'education',
    nameZh: '教育账户',
    nameEn: 'Education Account',
    descZh: '529 等计划，面向子女或家庭教育资金。',
    descEn: '529 and similar plans for education funding.',
  },
  {
    id: 'trust',
    nameZh: '家庭信托账户',
    nameEn: 'Family Trust Account',
    descZh: '按信托契约管理，兼顾受益人长期利益。',
    descEn: 'Managed per trust agreement for beneficiary long-term interests.',
  },
  {
    id: 'corporate',
    nameZh: '公司账户',
    nameEn: 'Corporate Account',
    descZh: '企业自有资金的投资管理。',
    descEn: 'Corporate treasury and investment management.',
  },
  {
    id: 'other',
    nameZh: '其他合法投资主体',
    nameEn: 'Other Eligible Entities',
    descZh: '符合美国证券开户条件的其他主体。',
    descEn: 'Other entities eligible to open U.S. securities accounts.',
  },
]
