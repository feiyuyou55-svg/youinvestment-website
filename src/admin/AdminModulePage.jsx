import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ADMIN_ACTIONS, ADMIN_META, ADMIN_MODULES } from '../data/admin'
import { STRATEGIES } from '../data/strategies'
import { INDICES } from '../data/indices'
import { DOCUMENTS } from '../data/documents'
import { TEAM_MEMBERS } from '../data/team'
import { ACTIVITIES } from '../data/activities'
import { ASSESSMENT_VERSION } from '../data/riskAssessment'

function getModuleRows(moduleKey) {
  switch (moduleKey) {
    case 'strategies':
      return Object.values(STRATEGIES).map((s) => ({
        id: s.id, nameEn: s.nameEn, nameZh: s.nameZh, riskLevel: s.riskLevel,
        status: s.status, visibility: s.visibility, updateDate: s.updateDate,
      }))
    case 'indices':
      return Object.values(INDICES).map((i) => ({
        id: i.id, nameEn: i.nameEn, nameZh: i.nameZh, indexType: i.indexType || '—',
        status: i.status, visibility: i.visibility, updateDate: i.updateDate || '—',
      }))
    case 'documents':
      return DOCUMENTS.map((d) => ({
        id: d.id, titleEn: d.titleEn, titleZh: d.titleZh, documentType: d.documentType,
        version: d.version, status: d.status, visibility: d.visibility,
      }))
    case 'team':
      return TEAM_MEMBERS.map((m) => ({
        id: m.id, name: m.name, title: m.title, role: m.role,
        state: m.state || '—', visibility: m.visibility, sortOrder: m.sortOrder,
      }))
    case 'activities':
      return ACTIVITIES.map((a) => ({
        id: a.id, nameEn: a.nameEn, date: a.date, type: a.type, status: 'published',
      }))
    case 'investorLetters':
      return DOCUMENTS.filter((d) => d.documentType === 'investor_letter').map((d) => ({
        id: d.id, titleEn: d.titleEn, publishDate: d.publishDate, version: d.version, status: d.status,
      }))
    case 'riskAssessment':
      return [{ id: 'assessment', question: `Risk Assessment ${ASSESSMENT_VERSION}`, riskLevel: '6 tiers', status: 'published' }]
    case 'siteContent':
      return [
        { section: 'home', key: 'hero.title', zh: '帮助个人、家庭与机构管理美国证券账户', en: 'U.S. Securities Account Management...' },
        { section: 'accounts', key: 'page.title', zh: '账户管理与投资顾问服务', en: 'Account Management & Investment Advisory' },
        { section: 'strategies', key: 'page.title', zh: '投资策略与长期业绩', en: 'Investment Strategies & Performance' },
      ]
    case 'contactForms':
      return [{ id: '—', type: '—', name: '—', email: '—', date: '—', status: 'Awaiting API' }]
    case 'seo':
      return [
        { page: '/', title: 'You Investment Management', description: 'RIA account management', keywords: 'RIA, wealth management' },
        { page: '/strategies', title: 'Strategies', description: 'Investment strategies', keywords: 'strategies, performance' },
      ]
    case 'settings':
      return [
        { key: 'company.email', value: 'info@youinvestment.com', updated: '2026-05-01' },
        { key: 'cms.mode', value: 'static', updated: '2026-07-08' },
      ]
    default:
      return []
  }
}

export default function AdminModulePage({ moduleKey }) {
  const config = ADMIN_MODULES[moduleKey]
  const rows = useMemo(() => getModuleRows(moduleKey), [moduleKey])
  const columns = config?.columns || []

  if (!config) return <p>Module not found.</p>

  return (
    <div className="admin-page">
      <header className="admin-page__header">
        <h1>{config.title}</h1>
        <p className="admin-page__subtitle">{config.titleZh} · {ADMIN_META.notice}</p>
        <p className="admin-page__source">Data source: <code>{config.dataSource}</code></p>
      </header>

      <div className="admin-actions">
        {ADMIN_ACTIONS.map((action) => (
          <button key={action} type="button" className="admin-actions__btn" disabled>
            {action}
          </button>
        ))}
        {config.extraActions?.map((action) => (
          <button key={action} type="button" className="admin-actions__btn admin-actions__btn--outline" disabled>
            {action}
          </button>
        ))}
      </div>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>{columns.map((col) => <th key={col}>{col}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.id || i}>
                {columns.map((col) => <td key={col}>{row[col] ?? '—'}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="admin-page__footer">Future CMS/database integration ready. No writes in static mode.</p>
    </div>
  )
}

export function AdminDashboard() {
  return (
    <div className="admin-page">
      <header className="admin-page__header">
        <h1>Dashboard</h1>
        <p className="admin-page__subtitle">{ADMIN_META.title} — {ADMIN_META.subtitle}</p>
        <p className="admin-page__notice">{ADMIN_META.notice}</p>
      </header>
      <div className="admin-dashboard-grid">
        {[
          ['strategies', 'strategies'], ['indices', 'indices'], ['documents', 'documents'],
          ['siteContent', 'site-content'], ['riskAssessment', 'risk-assessment'], ['team', 'team'],
          ['activities', 'activities'], ['investorLetters', 'investor-letters'],
          ['contactForms', 'contact-forms'], ['seo', 'seo'], ['settings', 'settings'],
        ].map(([key, path]) => {
          const mod = ADMIN_MODULES[key]
          return (
            <Link key={key} to={`/admin/${path}`} className="admin-dash-card">
              <h3>{mod.titleZh}</h3>
              <p>{mod.title}</p>
              <span>{mod.dataSource}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
