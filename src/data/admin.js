/**
 * Admin — CMS-ready admin module configuration
 * Routes: /admin/*
 */

export const ADMIN_META = {
  title: 'YIM Admin',
  subtitle: 'Content & Strategy Management',
  notice: 'This admin structure is prepared for future CMS and database integration.',
}

export const ADMIN_MENU = [
  { path: '/admin', label: 'Dashboard', labelZh: '仪表盘', icon: 'dashboard' },
  { path: '/admin/site-content', label: 'Site Content CMS', labelZh: '页面内容 CMS', module: 'siteContent' },
  { path: '/admin/strategies', label: 'Strategies', labelZh: '策略管理', module: 'strategies' },
  { path: '/admin/indices', label: 'Index Center', labelZh: '指数中心', module: 'indices' },
  { path: '/admin/documents', label: 'Document Center', labelZh: '资料中心', module: 'documents' },
  { path: '/admin/investor-letters', label: 'Investor Letters', labelZh: '投资者信', module: 'investorLetters' },
  { path: '/admin/activities', label: 'Activities', labelZh: '活动管理', module: 'activities' },
  { path: '/admin/team', label: 'Team', labelZh: '团队成员', module: 'team' },
  { path: '/admin/risk-assessment', label: 'Risk Assessment', labelZh: '风险评估', module: 'riskAssessment' },
  { path: '/admin/contact-forms', label: 'Contact Forms', labelZh: '联系表单', module: 'contactForms' },
  { path: '/admin/seo', label: 'SEO Settings', labelZh: 'SEO 设置', module: 'seo' },
  { path: '/admin/settings', label: 'System Settings', labelZh: '系统设置', module: 'settings' },
]

export const ADMIN_ACTIONS = ['Add', 'Edit', 'Delete', 'Publish', 'Hide']

export const ADMIN_MODULES = {
  strategies: {
    title: 'Strategy Management',
    titleZh: '策略管理',
    dataSource: 'strategies.js',
    columns: ['id', 'nameEn', 'nameZh', 'riskLevel', 'status', 'visibility', 'updateDate'],
  },
  indices: {
    title: 'Index Center',
    titleZh: '指数中心',
    dataSource: 'indices.js',
    columns: ['id', 'nameEn', 'nameZh', 'indexType', 'status', 'visibility', 'updateDate'],
  },
  documents: {
    title: 'Document Center',
    titleZh: '资料中心',
    dataSource: 'documents.js',
    columns: ['id', 'titleEn', 'titleZh', 'documentType', 'version', 'status', 'visibility'],
    extraActions: ['Upload Document', 'Version History', 'Replace File'],
  },
  siteContent: {
    title: 'Site Content CMS',
    titleZh: '页面内容 CMS',
    dataSource: 'siteContent.js',
    columns: ['section', 'key', 'zh', 'en'],
  },
  riskAssessment: {
    title: 'Risk Assessment',
    titleZh: '风险评估',
    dataSource: 'riskAssessment.js',
    columns: ['id', 'question', 'riskLevel', 'status'],
  },
  team: {
    title: 'Team Members',
    titleZh: '团队成员',
    dataSource: 'team.js',
    columns: ['id', 'name', 'title', 'role', 'state', 'visibility', 'sortOrder'],
  },
  activities: {
    title: 'Activities',
    titleZh: '活动管理',
    dataSource: 'activities.js',
    columns: ['id', 'nameEn', 'date', 'type', 'status'],
  },
  investorLetters: {
    title: 'Investor Letters',
    titleZh: '投资者信',
    dataSource: 'documents.js (investor_letter)',
    columns: ['id', 'titleEn', 'publishDate', 'version', 'status'],
  },
  contactForms: {
    title: 'Contact Forms',
    titleZh: '联系表单',
    dataSource: 'API (future)',
    columns: ['id', 'type', 'name', 'email', 'date', 'status'],
  },
  seo: {
    title: 'SEO Settings',
    titleZh: 'SEO 设置',
    dataSource: 'siteContent.js (seo)',
    columns: ['page', 'title', 'description', 'keywords'],
  },
  settings: {
    title: 'System Settings',
    titleZh: '系统设置',
    dataSource: 'site.js',
    columns: ['key', 'value', 'updated'],
  },
}
