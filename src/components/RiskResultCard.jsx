import { Link } from 'react-router-dom'
import StrategyName from './StrategyName'

export default function RiskResultCard({ result, locale, labels, onRetake }) {
  const isZh = locale === 'zh'
  const riskLabel = isZh ? result.riskLevelZh : result.riskLevelEn
  const accounts = isZh ? result.accountsZh : result.accountsEn

  return (
    <div className="risk-report">
      <div className="risk-report__score-block">
        <span className="risk-report__brand">YIM Risk Score</span>
        <div className="risk-report__score-row">
          <div>
            <span className="risk-report__label">{labels.scoreLabel}</span>
            <span className="risk-report__value-lg">{result.score} / {result.maxScore}</span>
          </div>
          <div>
            <span className="risk-report__label">{labels.riskLevel}</span>
            <span className="risk-report__value-lg risk-report__level">{riskLabel}</span>
          </div>
        </div>
      </div>

      <div className="risk-report__profile">
        <h3>{labels.profileTitle}</h3>
        <dl className="profile-dl">
          <div><dt>{labels.profileHorizon}</dt><dd>{result.profile.horizon}</dd></div>
          <div><dt>{labels.profileReturn}</dt><dd>{result.profile.returnGoal}</dd></div>
          <div><dt>{labels.profileVolatility}</dt><dd>{result.profile.volatility}</dd></div>
          <div><dt>{labels.profileCapacity}</dt><dd>{result.profile.capacity}</dd></div>
        </dl>
      </div>

      <div className="risk-report__section">
        <h3>{labels.whyRecommendTitle}</h3>
        <p className="risk-report__why">{labels.whyRecommend}</p>
        <div className="strategy-tags strategy-tags--lg">
          {result.strategies.map((id) => (
            <Link key={id} to="/strategies" className="strategy-tag">
              <StrategyName id={id} locale={locale} />
            </Link>
          ))}
        </div>
      </div>

      <div className="risk-report__section">
        <h3>{labels.matchReference}</h3>
        {result.matchGuide.map((tier) => (
          <div key={tier.tierZh} className="match-tier">
            <strong>{isZh ? tier.tierZh : tier.tierEn}</strong>
            <span>{labels.recommend} </span>
            {tier.strategies.map((id) => (
              <Link key={id} to="/strategies" className="link-gold" style={{ marginRight: 8 }}>
                <StrategyName id={id} locale={locale} />
              </Link>
            ))}
          </div>
        ))}
        <p className="risk-report__hint">{labels.matchNote}</p>
      </div>

      <div className="risk-report__section">
        <h3>{labels.recommendedAccounts}</h3>
        <ul className="simple-list">{accounts.map((a) => <li key={a}>{a}</li>)}</ul>
      </div>

      <p className="risk-report__disclaimer">{labels.disclaimer}</p>
      <div className="risk-report__actions">
        <Link to="/strategies" className="btn btn--primary">{labels.ctaStrategies}</Link>
        <Link to="/wealth-diagnosis" className="btn btn--outline-navy">{labels.ctaDiagnosis}</Link>
        <Link to="/contact?intent=advisory" className="btn btn--outline-navy">{labels.ctaAdvisory}</Link>
        <Link to="/contact" className="btn btn--outline-navy">{labels.ctaContact}</Link>
        <button type="button" className="btn btn--text" onClick={onRetake}>{labels.retake}</button>
      </div>
    </div>
  )
}
