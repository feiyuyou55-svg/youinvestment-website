import { Link } from 'react-router-dom'

export default function CTABanner({ title, text, buttonText = 'Contact Us', buttonTo = '/contact' }) {
  return (
    <section className="cta-banner">
      <div className="container">
        <h2 className="cta-banner__title">{title}</h2>
        {text && <p className="cta-banner__text">{text}</p>}
        <Link to={buttonTo} className="btn btn--primary">{buttonText}</Link>
      </div>
    </section>
  )
}
