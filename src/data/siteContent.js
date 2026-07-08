/**
 * Site Content — CMS-ready unified page content
 * All editable copy lives here; pages/components only render.
 */

export const HOME_HERO = {
  tagZh: '美国注册投资顾问（RIA）',
  tagEn: 'U.S. Registered Investment Adviser (RIA)',
  titleZh: '帮助个人、家庭与机构管理美国证券账户',
  titleEn: 'U.S. Securities Account Management for Individuals, Families & Institutions',
  subtitleIntroZh: '如果您已经拥有，或准备开立美国证券投资账户，包括',
  subtitleIntroEn: 'If you already have, or plan to open, a U.S. securities account including',
  accountTypesZh: ['IRA 退休账户', '个人投资账户', '联名账户', '教育账户', '信托账户', '公司账户'],
  accountTypesEn: ['IRA', 'Individual', 'Joint', 'Education', 'Trust', 'Corporate'],
  subtitleEndZh: '，都可以咨询我们是否适合委托管理。',
  subtitleEndEn: ', you may inquire whether discretionary management is suitable for you.',
  whyAccountZh: '为什么选择账户管理？',
  whyAccountEn: 'Why Account Management?',
  whyAccountItemsZh: [
    '账户资产始终托管于客户本人名下',
    '资产由美国正规证券托管机构保管',
    '账户信息实时透明可查',
    '客户可随时终止委托关系',
  ],
  whyAccountItemsEn: [
    'Assets always held in your own name',
    'Custodied by U.S. regulated securities institutions',
    'Real-time transparent account access',
    'Discretionary relationship terminable anytime',
  ],
  ourDutyZh: '我们的职责',
  ourDutyEn: 'What We Do',
  dutiesZh: ['长期资产配置', '投资管理', '股票与 ETF 配置', '现金管理', '周期跟踪与动态调整'],
  dutiesEn: ['Long-term asset allocation', 'Investment management', 'Equity & ETF allocation', 'Cash management', 'Cycle tracking & dynamic adjustment'],
  vsLabel: 'VS',
  ctaAccountZh: '咨询账户管理',
  ctaAccountEn: 'Inquire About Accounts',
  ctaStrategiesZh: '查看策略与业绩',
  ctaStrategiesEn: 'View Strategies & Performance',
  ctaRiskZh: '免费风险评估',
  ctaRiskEn: 'Free Risk Assessment',
}

export const HOME_WHY_YIM = [
  { id: 'cycle', titleZh: '周期框架', titleEn: 'Cycle Framework', linesZh: ['从"持有什么"', '走向', '"何时参与"'], linesEn: ['From "what to hold"', 'to', '"when to participate"'] },
  { id: 'quality', titleZh: '收益质量', titleEn: 'Return Quality', descZh: '不仅关注收益，更关注风险、回撤与长期复利质量。', descEn: 'Focus on risk, drawdown, and long-term compounding quality — not returns alone.' },
  { id: 'independent', titleZh: '独立账户管理', titleEn: 'Independent Account Management', descZh: '客户拥有账户，我们负责配置、风险控制与长期跟踪。', descEn: 'You own the account — we manage allocation, risk control, and long-term tracking.' },
]

export const CLIENT_SEGMENTS = [
  { id: 'individual', titleZh: '个人投资者', titleEn: 'Individual Investors', descZh: '帮助管理个人证券账户，建立长期投资体系。', descEn: 'Manage individual securities accounts and build long-term investment discipline.' },
  { id: 'family', titleZh: '家庭财富管理者', titleEn: 'Family Wealth Managers', descZh: '帮助家庭进行资产配置、退休规划与财富管理。', descEn: 'Asset allocation, retirement planning, and family wealth management.' },
  { id: 'institutional', titleZh: '机构投资者', titleEn: 'Institutional Investors', descZh: '提供模型组合、策略研究及资产配置支持。', descEn: 'Model portfolios, strategy research, and allocation support.' },
  { id: 'ria', titleZh: '专业投资顾问 / RIA', titleEn: 'Advisers & RIAs', descZh: '提供策略模型、组合研究及未来 TAMP 合作。', descEn: 'Strategy models, portfolio research, and future TAMP collaboration.' },
  { id: 'professional', titleZh: '保险、银行、税务、律师等专业机构', titleEn: 'Insurance, Banking, Tax & Legal Professionals', descZh: '作为独立投资顾问，与您共同服务客户。', descEn: 'Independent investment adviser partnering to serve your clients.' },
]

export const HOME_SECTIONS = {
  clients: { titleZh: '我们可以帮助哪些客户？', titleEn: 'Who We Serve', footnoteZh: '我们不是销售金融产品，而是作为独立投资顾问，根据不同客户目标提供长期资产配置与账户管理服务。', footnoteEn: 'We are an independent investment adviser — not a product sales platform — providing long-term allocation and account management tailored to each client\'s goals.' },
  whyYim: { titleZh: '为什么选择 YIM？', titleEn: 'Why YIM?' },
  strategies: { titleZh: '核心策略与长期业绩', titleEn: 'Core Strategies & Long-Term Performance', previewZh: 'Preview', previewEn: 'Preview', ctaZh: '查看完整策略与业绩', ctaEn: 'View Full Strategies & Performance' },
  risk: { titleZh: '免费风险评估', titleEn: 'Free Risk Assessment', descZh: '3 分钟完成风险评估，了解您的风险等级，并获得适合的策略参考。', descEn: 'Complete in 3 minutes — understand your risk level and get strategy references.', ctaZh: '开始免费风险评估', ctaEn: 'Start Free Risk Assessment' },
  activities: { titleZh: '最新活动 / 判断训练场', titleEn: 'Upcoming Events & Training Arena', descZh: '判断训练读书会、市场观察与策略会等活动，统一通过联系表单报名。', descEn: 'Book clubs, strategy sessions, and training events — register via the contact form.', arenaCtaZh: '了解判断训练场', arenaCtaEn: 'About Training Arena', arenaLink: '/about#judgment-arena', registerCtaZh: '预约参加活动', registerCtaEn: 'Register for Event', allEventsLink: '/about#events' },
}

export const ACCOUNTS_PAGE = {
  labelZh: '账户管理', labelEn: 'Accounts',
  titleZh: '账户管理与投资顾问服务', titleEn: 'Account Management & Investment Advisory',
  subtitleZh: '理论上，任何能够开立美国证券投资账户的个人、家庭、信托或机构，都可能成为我们的客户。',
  subtitleEn: 'In principle, any individual, family, trust, or institution eligible to open a U.S. securities account may become our client.',
  weHelpTitleZh: '我们帮助客户', weHelpTitleEn: 'We help clients with',
  ctaTitleZh: '不确定自己的账户是否适合？欢迎联系我们进行初步沟通。',
  ctaTitleEn: 'Not sure if your account qualifies? Contact us for an initial conversation.',
}

export const STRATEGIES_PAGE = {
  labelZh: '策略与业绩', labelEn: 'Strategies',
  titleZh: '投资策略与长期业绩', titleEn: 'Investment Strategies & Performance',
  subtitleZh: '七大策略业绩与风险指标一览，每月更新。',
  subtitleEn: 'Seven strategies at a glance. Updated monthly.',
  footnoteZh: '以上业绩为历史表现，仅供参考，不构成未来收益承诺。投资涉及风险，包括可能损失本金。',
  footnoteEn: 'Past performance is for reference only and does not guarantee future results. Investing involves risk, including loss of principal.',
}

export const RISK_PAGE = {
  labelZh: '风险评估', labelEn: 'Risk Assessment',
  titleZh: '免费风险评估', titleEn: 'Free Risk Assessment',
  subtitleZh: '《You Investment Management 风险评估与策略匹配体系 V1.0》',
  subtitleEn: 'YIM Risk Assessment & Strategy Matching System V1.0',
  introZh: '约 3 分钟完成问卷，自动生成 YIM 风险评估报告。',
  introEn: '~3 minutes to generate your YIM Risk Assessment Report.',
  disclaimerZh: '本评估结果仅供参考，不构成投资建议。',
  disclaimerEn: 'For reference only — not investment advice.',
}

export const CONTACT_PAGE = {
  labelZh: '联系我们', labelEn: 'Contact',
  titleZh: '联系与咨询', titleEn: 'Contact & Inquiries',
  subtitleZh: '账户管理、策略咨询、财富管理诊断、活动报名与事业伙伴合作，统一使用下方表单。',
  subtitleEn: 'Accounts, strategies, wealth diagnosis, events, and partnerships — one unified form.',
}

export const FOOTER_CONTENT = {
  descZh: '美国注册投资顾问（RIA），以账户管理与投资顾问为核心，服务可开立美国证券账户的个人、家庭与机构。',
  descEn: 'U.S. RIA focused on account management and investment advisory for individuals, families, and institutions with U.S. securities accounts.',
  indicesZh: '指数中心', indicesEn: 'Index Center',
  documentsZh: '资料中心', documentsEn: 'Document Center',
}

export const SITE_DISCLAIMER = {
  zh: '投资顾问服务由 You Investment Management LLC（美国注册投资顾问）提供。注册不代表特定技能或培训水平。投资涉及风险，包括可能损失本金。过往业绩不代表未来表现。本网站仅供参考，不构成出售或购买证券的要约。',
  en: 'Advisory services through You Investment Management LLC, a registered investment adviser. Registration does not imply a certain level of skill. Investing involves risk. Past performance is not indicative of future results. This site is for informational purposes only.',
}

export const ABOUT_TEAM_SECTION = {
  titleZh: '团队成员',
  titleEn: 'Our Team',
  descZh: '专业投资顾问与策略团队，为客户提供长期资产配置与账户管理服务。',
  descEn: 'Advisory and strategy professionals serving clients with long-term allocation and account management.',
  ctaZh: '查看完整团队',
  ctaEn: 'View Full Team',
}
