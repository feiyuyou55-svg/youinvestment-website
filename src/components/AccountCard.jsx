import { Link } from 'react-router-dom'
import StrategyName from './StrategyName'

export default function AccountCard({ account, locale, labels, featuredLabel }) {
  const isZh = locale === 'zh'
  const title = isZh ? account.titleZh : account.titleEn
  const descs = isZh ? account.descZh : account.descEn

  return (
    <div className="account-row account-row--featured">
      <div className="account-row__name">
        {account.featured && <span className="account-row__badge">{featuredLabel}</span>}
        <h2>{title}</h2>
      </div>
      <div className="account-row__desc">
        {descs.map((p) => <p key={p}>{p}</p>)}
        <p className="account-row__strategies-label">{labels.suitableStrategies}</p>
        <div className="strategy-tags">
          {account.strategyIds.map((id) => (
            <Link key={id} to="/strategies" className="strategy-tag">
              <StrategyName id={id} locale={locale} />
            </Link>
          ))}
        </div>
        {account.riskCta && (
          <Link to="/risk-assessment" className="link-gold">{labels.personalCta} →</Link>
        )}
      </div>
    </div>
  )
}
