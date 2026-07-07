import { Link } from 'react-router-dom'
import ActivityCard from './ActivityCard'
import { ACTIVITIES } from '../data/activities'

export default function HomeActivities({ locale, section }) {
  const isZh = locale === 'zh'
  const labels = {
    time: isZh ? '时间' : 'Date',
    location: isZh ? '地点' : 'Location',
    topic: isZh ? '主题' : 'Topic',
    register: isZh ? section.registerCtaZh : section.registerCtaEn,
  }

  return (
    <section className="section section--compact section--gray">
      <div className="container">
        <h2 className="section-subtitle">{isZh ? section.titleZh : section.titleEn}</h2>
        <p className="section-desc">{isZh ? section.descZh : section.descEn}</p>
        <div className="events-list">
          {ACTIVITIES.map((ev) => (
            <ActivityCard key={ev.id} activity={ev} locale={locale} labels={labels} />
          ))}
        </div>
        <div className="section-cta section-cta--row">
          <Link to={section.arenaLink} className="btn btn--outline-navy">
            {isZh ? section.arenaCtaZh : section.arenaCtaEn}
          </Link>
          <Link to={section.allEventsLink} className="btn btn--primary">
            {isZh ? section.registerCtaZh : section.registerCtaEn}
          </Link>
        </div>
      </div>
    </section>
  )
}
