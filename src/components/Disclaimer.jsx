import { useLanguage } from '../i18n/LanguageContext'

export default function Disclaimer() {
  const { t } = useLanguage()
  return (
    <section className="disclaimer">
      <div className="container">
        <p>{t.disclaimer}</p>
      </div>
    </section>
  )
}
