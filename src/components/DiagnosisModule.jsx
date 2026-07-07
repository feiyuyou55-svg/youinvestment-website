import { Link } from 'react-router-dom'
import { WEALTH_DIAGNOSIS } from '../data/services'
import { IconCheck } from './Icons'

export default function DiagnosisModule({ locale, variant = 'home' }) {
  const isZh = locale === 'zh'
  const d = WEALTH_DIAGNOSIS

  if (variant === 'wealth-page') {
    const h = d.home
    const combines = isZh ? h.combinesZh : h.combinesEn
    const items = isZh ? h.itemsZh : h.itemsEn
    return (
      <section className="diagnosis-module">
        <p className="section-desc">{isZh ? h.introZh : h.introEn}</p>
        <p className="diagnosis-module__combines">{isZh ? h.combinesLabelZh : h.combinesLabelEn}</p>
        <ul className="diagnosis-module__list diagnosis-module__list--inline">
          {combines.map((item) => (<li key={item}><IconCheck />{item}</li>))}
        </ul>
        <p className="diagnosis-module__combines-outcome">{isZh ? h.combinesOutcomeZh : h.combinesOutcomeEn}</p>
        <p className="diagnosis-module__items-label">{isZh ? h.itemsLabelZh : h.itemsLabelEn}</p>
        <ul className="diagnosis-module__list diagnosis-module__list--grid">
          {items.map((item) => (<li key={item}><IconCheck />{item}</li>))}
        </ul>
        <p className="diagnosis-module__outcome">{isZh ? h.outcomeZh : h.outcomeEn}</p>
        <Link to={`/contact?intent=${d.formIntent}`} className="btn btn--primary">
          {isZh ? h.ctaZh : h.ctaEn}
        </Link>
      </section>
    )
  }

  if (variant === 'contact') {
    const c = d.contact
    return (
      <section className="diagnosis-module">
        <h2 className="section-subtitle">{isZh ? d.titleZh : d.titleEn}</h2>
        <p className="section-desc">{isZh ? c.introZh : c.introEn}</p>
        <p className="section-desc">{isZh ? c.followUpZh : c.followUpEn}</p>
        <div className="diagnosis-module__actions">
          <Link to={d.route} className="btn btn--primary">
            {isZh ? c.ctaDiagnosisZh : c.ctaDiagnosisEn}
          </Link>
          <Link to={`/contact?intent=${d.advisoryIntent}`} className="btn btn--outline-navy">
            {isZh ? c.ctaAdvisoryZh : c.ctaAdvisoryEn}
          </Link>
        </div>
      </section>
    )
  }

  const h = d.home
  const combines = isZh ? h.combinesZh : h.combinesEn
  const items = isZh ? h.itemsZh : h.itemsEn

  return (
    <section className="diagnosis-module">
      <h2 className="section-subtitle">{isZh ? d.titleZh : d.titleEn}</h2>
      <p className="section-desc">{isZh ? h.introZh : h.introEn}</p>
      <p className="diagnosis-module__combines">
        {isZh ? h.combinesLabelZh : h.combinesLabelEn}
      </p>
      <ul className="diagnosis-module__list diagnosis-module__list--inline">
        {combines.map((item) => (
          <li key={item}><IconCheck />{item}</li>
        ))}
      </ul>
      <p className="diagnosis-module__combines-outcome">
        {isZh ? h.combinesOutcomeZh : h.combinesOutcomeEn}
      </p>
      <p className="diagnosis-module__items-label">{isZh ? h.itemsLabelZh : h.itemsLabelEn}</p>
      <ul className="diagnosis-module__list diagnosis-module__list--grid">
        {items.map((item) => (
          <li key={item}><IconCheck />{item}</li>
        ))}
      </ul>
      <p className="diagnosis-module__outcome">{isZh ? h.outcomeZh : h.outcomeEn}</p>
      <Link to={d.route} className="btn btn--primary">
        {isZh ? h.ctaZh : h.ctaEn}
      </Link>
    </section>
  )
}
