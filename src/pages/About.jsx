import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import PageHeader from '../components/PageHeader'
import WhyYimCards from '../components/WhyYimCards'
import EcoModule from '../components/EcoModule'
import ActivityCard from '../components/ActivityCard'
import { ABOUT_PAGE, WHY_YIM, ECOSYSTEM_MODULES } from '../data/ecosystem'
import { ACTIVITIES } from '../data/activities'

export default function About() {
  const { locale, t } = useLanguage()
  const a = t.about
  const isZh = locale === 'zh'
  const about = ABOUT_PAGE

  return (
    <>
      <PageHeader
        label={a.label}
        title={isZh ? about.titleZh : about.titleEn}
        desc={isZh ? about.introZh : about.introEn}
      />

      <section className="section section--compact section--gray">
        <div className="container">
          <h2 className="section-subtitle">{isZh ? about.whyTitleZh : about.whyTitleEn}</h2>
          <WhyYimCards items={WHY_YIM} locale={locale} />
        </div>
      </section>

      <section className="section section--compact">
        <div className="container">
          <div className="eco-grid-2">
            {ECOSYSTEM_MODULES.map((mod) => (
              <EcoModule
                key={mod.id}
                id={mod.id}
                title={isZh ? mod.titleZh : mod.titleEn}
                items={isZh ? mod.itemsZh : mod.itemsEn}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--compact section--gray" id="events">
        <div className="container">
          <h2 className="section-subtitle">{a.eventsTitle}</h2>
          <p className="section-desc">{a.eventsDesc}</p>
          <div className="events-list">
            {ACTIVITIES.map((ev) => (
              <ActivityCard
                key={ev.id}
                activity={ev}
                locale={locale}
                labels={{
                  time: a.eventTime,
                  location: a.eventLocation,
                  topic: a.eventTopic,
                  register: a.eventRegister,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container cta-strip__inner">
          <Link to="/accounts" className="btn btn--primary">{t.nav.accounts}</Link>
          <Link to="/risk-assessment" className="btn btn--outline-navy">{t.nav.riskAssessment}</Link>
          <Link to="/wealth-diagnosis" className="btn btn--outline-navy">{a.ctaDiagnosis}</Link>
        </div>
      </section>
    </>
  )
}
