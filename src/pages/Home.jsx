import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { IconCheck } from '../components/Icons'
import StrategyTable from '../components/StrategyTable'
import ClientSegmentCard from '../components/ClientSegmentCard'
import WhyYimCards from '../components/WhyYimCards'
import DiagnosisModule from '../components/DiagnosisModule'
import HomeActivities from '../components/HomeActivities'
import { HOME_HERO, CLIENT_SEGMENTS, HOME_SECTIONS, HOME_WHY_YIM } from '../data/home'
import { STRATEGY_PREVIEW_LIST } from '../data/strategies'

export default function Home() {
  const { locale, t } = useLanguage()
  const isZh = locale === 'zh'
  const h = HOME_HERO
  const sections = HOME_SECTIONS

  const accountTypes = isZh ? h.accountTypesZh : h.accountTypesEn
  const whyAccountItems = isZh ? h.whyAccountItemsZh : h.whyAccountItemsEn
  const duties = isZh ? h.dutiesZh : h.dutiesEn

  return (
    <>
      {/* 1. Hero */}
      <section className="hero hero--compact">
        <div className="hero__bg" />
        <div className="hero__line" />
        <div className="container">
          <div className="hero-conversion">
            <p className="hero-conversion__tag">{isZh ? h.tagZh : h.tagEn}</p>
            <h1 className="hero-conversion__title">{isZh ? h.titleZh : h.titleEn}</h1>
            <p className="hero-conversion__subtitle">
              {isZh ? h.subtitleIntroZh : h.subtitleIntroEn}
              <span className="hero-account-types">
                {accountTypes.map((type, i) => (
                  <span key={type}>{i > 0 && '、'}<strong>{type}</strong></span>
                ))}
              </span>
              {isZh ? h.subtitleEndZh : h.subtitleEndEn}
            </p>

            <div className="hero-core hero-core--dense">
              <div className="hero-core__col">
                <span className="hero-core__label">{isZh ? h.whyAccountZh : h.whyAccountEn}</span>
                <ul>
                  {whyAccountItems.map((item) => (
                    <li key={item}><IconCheck />{item}</li>
                  ))}
                </ul>
              </div>
              <div className="hero-core__divider" aria-hidden="true">
                <span className="hero-core__vs">{h.vsLabel}</span>
              </div>
              <div className="hero-core__col">
                <span className="hero-core__label">{isZh ? h.ourDutyZh : h.ourDutyEn}</span>
                <ul>
                  {duties.map((item) => (
                    <li key={item}><IconCheck />{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="hero-cta">
              <Link to="/contact?intent=account" className="hero-cta__btn hero-cta__btn--primary">
                <span className="hero-cta__btn-label">{t.home.ctaAccount}</span>
              </Link>
              <Link to="/strategies" className="hero-cta__btn hero-cta__btn--secondary">
                <span className="hero-cta__btn-label">{t.home.ctaStrategies}</span>
              </Link>
              <Link to="/risk-assessment" className="hero-cta__btn hero-cta__btn--outline">
                <span className="hero-cta__btn-label">{t.home.ctaRisk}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Strategy Preview */}
      <section className="section section--compact section--gray">
        <div className="container">
          <h2 className="section-subtitle">
            {isZh ? sections.strategies.titleZh : sections.strategies.titleEn}
            <span className="section-preview-tag">{isZh ? sections.strategies.previewZh : sections.strategies.previewEn}</span>
          </h2>
          <StrategyTable
            strategies={STRATEGY_PREVIEW_LIST}
            locale={locale}
            labels={t.strategies}
            compact
            hideSharpe
          />
          <div className="section-cta">
            <Link to="/strategies" className="btn btn--primary">
              {isZh ? sections.strategies.ctaZh : sections.strategies.ctaEn}
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Client Segments */}
      <section className="section section--compact">
        <div className="container">
          <h2 className="section-subtitle">{isZh ? sections.clients.titleZh : sections.clients.titleEn}</h2>
          <div className="client-segments-grid">
            {CLIENT_SEGMENTS.map((seg) => (
              <ClientSegmentCard
                key={seg.id}
                title={isZh ? seg.titleZh : seg.titleEn}
                desc={isZh ? seg.descZh : seg.descEn}
              />
            ))}
          </div>
          <p className="client-segments-footnote">
            {isZh ? sections.clients.footnoteZh : sections.clients.footnoteEn}
          </p>
        </div>
      </section>

      {/* 4. Why YIM */}
      <section className="section section--compact section--gray">
        <div className="container">
          <h2 className="section-subtitle">{isZh ? sections.whyYim.titleZh : sections.whyYim.titleEn}</h2>
          <WhyYimCards items={HOME_WHY_YIM} locale={locale} />
        </div>
      </section>

      {/* 5. Risk Assessment */}
      <section className="section section--compact">
        <div className="container container--narrow home-cta-block">
          <h2 className="section-subtitle">{isZh ? sections.risk.titleZh : sections.risk.titleEn}</h2>
          <p className="section-desc">{isZh ? sections.risk.descZh : sections.risk.descEn}</p>
          <Link to="/risk-assessment" className="btn btn--primary">
            {isZh ? sections.risk.ctaZh : sections.risk.ctaEn}
          </Link>
        </div>
      </section>

      {/* 6. Wealth Diagnosis */}
      <section className="section section--compact section--gray">
        <div className="container container--narrow">
          <DiagnosisModule locale={locale} variant="home" />
        </div>
      </section>

      {/* 7. Activities */}
      <HomeActivities locale={locale} section={sections.activities} />
    </>
  )
}
