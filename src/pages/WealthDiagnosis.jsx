import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import PageHeader from '../components/PageHeader'
import DiagnosisModule from '../components/DiagnosisModule'
import { WEALTH_DIAGNOSIS } from '../data/services'

export default function WealthDiagnosis() {
  const { locale } = useLanguage()
  const isZh = locale === 'zh'
  const d = WEALTH_DIAGNOSIS

  return (
    <>
      <PageHeader
        label={isZh ? d.titleZh : d.titleEn}
        title={isZh ? d.titleZh : d.titleEn}
        desc={isZh ? d.home.introZh : d.home.introEn}
      />

      <section className="section section--compact">
        <div className="container container--narrow">
          <DiagnosisModule locale={locale} variant="wealth-page" />
          <div className="wealth-diagnosis__links">
            <Link to="/risk-assessment" className="btn btn--outline-navy">
              {isZh ? '免费风险评估' : 'Free Risk Assessment'}
            </Link>
            <Link to={`/contact?intent=${d.advisoryIntent}`} className="btn btn--outline-navy">
              {isZh ? d.contact.ctaAdvisoryZh : d.contact.ctaAdvisoryEn}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
