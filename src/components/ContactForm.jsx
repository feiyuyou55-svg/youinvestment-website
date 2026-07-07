import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { COMPANY, INTENT_MAP } from '../data/site'
import { CONTACT_FORM_INTENTS } from '../data/contact'

export default function ContactForm({ locale, labels }) {
  const [searchParams] = useSearchParams()
  const [submitted, setSubmitted] = useState(false)
  const [interest, setInterest] = useState('')

  useEffect(() => {
    const intent = searchParams.get('intent')
    if (intent && INTENT_MAP[intent]) setInterest(INTENT_MAP[intent])
  }, [searchParams])

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    setSubmitted(true)
    setTimeout(() => { form.reset(); setSubmitted(false); setInterest('') }, 3000)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3 className="contact-form__title">{labels.formTitle}</h3>
      <p className="contact-form__note">{labels.formNote}</p>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="first-name">{labels.firstName} *</label>
          <input type="text" id="first-name" name="firstName" required />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">{labels.lastName} *</label>
          <input type="text" id="last-name" name="lastName" required />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email">{labels.email} *</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">{labels.phone}</label>
        <input type="tel" id="phone" name="phone" />
      </div>
      <div className="form-group">
        <label htmlFor="interest">{labels.interest}</label>
        <select id="interest" name="interest" value={interest} onChange={(e) => setInterest(e.target.value)}>
          <option value="">{labels.selectInterest}</option>
          {CONTACT_FORM_INTENTS.map(({ intent }) => (
            <option key={intent} value={intent}>{labels.interests[intent]}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">{labels.message} *</label>
        <textarea id="message" name="message" required />
      </div>
      <button type="submit" className="btn btn--primary btn--full" disabled={submitted}>
        {submitted ? labels.sent : labels.submit}
      </button>
    </form>
  )
}

export function ContactInfo({ locale, labels }) {
  const isZh = locale === 'zh'
  const items = [
    { label: 'Email', value: COMPANY.email },
    { label: 'Phone', value: COMPANY.phone },
    { label: 'Office', value: COMPANY.location },
    { label: 'Hours', value: isZh ? COMPANY.hoursZh : COMPANY.hoursEn },
  ]

  return (
    <div className="contact-info">
      {items.map(({ label, value }) => (
        <div key={label} className="contact-info__item">
          <div>
            <p className="contact-info__label">{label}</p>
            <p className="contact-info__value">{value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
