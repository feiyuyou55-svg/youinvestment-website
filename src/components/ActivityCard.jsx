import { Link } from 'react-router-dom'

export default function ActivityCard({ activity, locale, labels }) {
  const isZh = locale === 'zh'
  return (
    <article className="event-card">
      <h3>{isZh ? activity.nameZh : activity.nameEn}</h3>
      <dl className="event-card__meta">
        <div><dt>{labels.time}</dt><dd>{activity.date}</dd></div>
        <div><dt>{labels.location}</dt><dd>{isZh ? activity.locationZh : activity.locationEn}</dd></div>
        <div><dt>{labels.topic}</dt><dd>{isZh ? activity.topicZh : activity.topicEn}</dd></div>
      </dl>
      <Link to={`/contact?intent=${activity.formIntent}`} className="btn btn--primary btn--sm">
        {labels.register}
      </Link>
    </article>
  )
}
