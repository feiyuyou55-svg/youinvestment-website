import { useLanguage } from '../i18n/LanguageContext'
import PageHeader from '../components/PageHeader'
import DiagnosisModule from '../components/DiagnosisModule'
import ContactForm from '../components/ContactForm'
import { IconMail, IconPhone, IconLocation, IconClock } from '../components/Icons'
import { COMPANY } from '../data/site'

export default function Contact() {
  const { locale, t } = useLanguage()
  const c = t.contact
  const isZh = locale === 'zh'

  const contactItems = [
    { icon: IconMail, label: 'Email', value: COMPANY.email },
    { icon: IconPhone, label: 'Phone', value: COMPANY.phone },
    { icon: IconLocation, label: 'Office', value: COMPANY.location },
    { icon: IconClock, label: 'Hours', value: isZh ? COMPANY.hoursZh : COMPANY.hoursEn },
  ]

  return (
    <>
      <PageHeader label={c.label} title={c.title} desc={c.subtitle} />

      <section className="section section--compact section--gray">
        <div className="container container--narrow">
          <DiagnosisModule locale={locale} variant="contact" />
        </div>
      </section>

      <section className="section section--compact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              {contactItems.map(({ icon: Icon, label, value }) => (
                <div key={label} className="contact-info__item">
                  <div className="contact-info__icon"><Icon /></div>
                  <div>
                    <p className="contact-info__label">{label}</p>
                    <p className="contact-info__value">{value}</p>
                  </div>
                </div>
              ))}
            </div>
            <ContactForm locale={locale} labels={c} />
          </div>
        </div>
      </section>

      <section className="section section--compact section--gray" id="disclaimer">
        <div className="container container--narrow legal-section">
          <h2>{c.disclaimerTitle}</h2>
          <p>{c.disclaimer}</p>
        </div>
      </section>
      <section className="section section--compact" id="privacy">
        <div className="container container--narrow legal-section">
          <h2>{c.privacyTitle}</h2>
          <p>{c.privacy}</p>
        </div>
      </section>
    </>
  )
}
