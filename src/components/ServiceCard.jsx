import { Link } from 'react-router-dom'

export default function ServiceCard({ icon, title, text, linkTo, linkText = 'Learn More →' }) {
  return (
    <article className="service-card">
      {icon && <div className="service-card__icon">{icon}</div>}
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__text">{text}</p>
      {linkTo && (
        <Link to={linkTo} className="service-card__link">{linkText}</Link>
      )}
    </article>
  )
}
