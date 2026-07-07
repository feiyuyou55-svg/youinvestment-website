/**
 * Team — CMS-ready member directory
 * Roles: adviser | manager | channel | state_lead | researcher | associate | partner | cio
 */

export const TEAM_ROLES = [
  { id: 'adviser', labelZh: '投资顾问', labelEn: 'Investment Adviser' },
  { id: 'manager', labelZh: '投资经理', labelEn: 'Portfolio Manager' },
  { id: 'channel', labelZh: '渠道顾问', labelEn: 'Channel Adviser' },
  { id: 'state_lead', labelZh: '州负责人', labelEn: 'State Lead' },
  { id: 'researcher', labelZh: '研究员', labelEn: 'Researcher' },
  { id: 'associate', labelZh: '合作顾问', labelEn: 'Associate Adviser' },
  { id: 'partner', labelZh: '事业伙伴', labelEn: 'Business Partner' },
  { id: 'cio', labelZh: '首席投资官', labelEn: 'Chief Investment Officer' },
]

export const TEAM_PAGE = {
  titleZh: '团队成员',
  titleEn: 'Our Team',
  introZh: '专业投资顾问、投资经理与研究团队，为客户提供长期资产配置与账户管理服务。',
  introEn: 'Investment advisers, portfolio managers, and research professionals serving clients with long-term allocation and account management.',
  viewDetailZh: '查看详情',
  viewDetailEn: 'View Profile',
  backZh: '返回团队',
  backEn: 'Back to Team',
  qualificationsZh: '专业资格',
  qualificationsEn: 'Qualifications',
  expertiseZh: '专业领域',
  expertiseEn: 'Areas of Expertise',
  locationZh: '所在地区',
  locationEn: 'Location',
  bioZh: '个人简介',
  bioEn: 'Biography',
  contactZh: '联系方式',
  contactEn: 'Contact',
}

export const TEAM_MEMBERS = [
  {
    id: 'feiyu-you',
    slug: 'feiyu-you',
    nameZh: '游飞宇',
    nameEn: 'Feiyu You',
    titleZh: 'Founder & CIO',
    titleEn: 'Founder & CIO',
    summaryZh: '周期框架投资体系提出者，24 年跨周期投资管理经验。',
    summaryEn: 'Proponent of the cycle-framework investment system; 24 years cross-cycle experience.',
    photoUrl: null,
    locationZh: '美国',
    locationEn: 'United States',
    qualificationsZh: ['美国注册投资顾问（RIA）', 'Founder & Chief Investment Officer'],
    qualificationsEn: ['U.S. Registered Investment Adviser (RIA)', 'Founder & Chief Investment Officer'],
    expertiseZh: ['资产配置', '周期框架', '账户管理', '模型组合', '长期财富管理'],
    expertiseEn: ['Asset allocation', 'Cycle framework', 'Account management', 'Model portfolios', 'Long-term wealth management'],
    bioZh: '游飞宇先生创立 You Investment Management LLC，提出周期框架投资体系。拥有 24 年跨周期投资管理经验。',
    bioEn: 'Feiyu You founded You Investment Management LLC and established the cycle-framework investment system.',
    email: null,
    phone: null,
    role: 'cio',
    isFounder: true,
    sortOrder: 1,
    visible: true,
  },
]

export function getVisibleTeamMembers() {
  return TEAM_MEMBERS.filter((m) => m.visible).sort((a, b) => a.sortOrder - b.sortOrder)
}

export function getTeamMemberBySlug(slug) {
  const member = TEAM_MEMBERS.find((m) => m.slug === slug)
  return member?.visible ? member : null
}

export function getFounderTeamMember() {
  return TEAM_MEMBERS.find((m) => m.isFounder && m.visible) || null
}
