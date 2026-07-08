import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import PageHeader from '../components/PageHeader'
import StrategyTable from '../components/StrategyTable'
import { STRATEGIES_PAGE } from '../data/siteContent'
import { STRATEGY_LIST } from '../data/strategies'
import { WEALTH_DIAGNOSIS } from '../data/services'

export default function Strategies() {
  const { locale, t } = useLanguage()
  const s = t.strategies
  const page = STRATEGIES_PAGE
  const isZh = locale === 'zh'
  const d = WEALTH_DIAGNOSIS

  return (
    <>
      <PageHeader
        label={isZh ? page.labelZh : page.labelEn}
        title={isZh ? page.titleZh : page.titleEn}
        desc={isZh ? page.subtitleZh : page.subtitleEn}
      />

      <section className="section section--compact">
        <div className="container">
          <StrategyTable
            strategies={STRATEGY_LIST}
            locale={locale}
            labels={s}
            compact
            showPositioning
            showAccounts
          />
          <p className="strategies-footnote">{isZh ? page.footnoteZh : page.footnoteEn}</p>
        </div>
      </section>

      <section className="cta-strip cta-strip--navy">
        <div className="container cta-strip__inner">
          <div className="cta-strip__btns">
            <Link to="/risk-assessment" className="btn btn--primary">{s.ctaRisk}</Link>
            <Link to={d.route} className="btn btn--outline-dark">
              {isZh ? d.home.ctaZh : d.home.ctaEn}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
