import { Link } from 'react-router-dom'

export default function TeamCard({ member, locale, viewDetailLabel }) {
  const isZh = locale === 'zh'
  const initial = (isZh ? member.nameZh : member.nameEn).charAt(0)

  return (
    <article className="team-card">
      <div className="team-card__photo">
        {member.photoUrl ? (
          <img src={member.photoUrl} alt={isZh ? member.nameZh : member.nameEn} />
        ) : (
          <span>{initial}</span>
        )}
      </div>
      <h3 className="team-card__name">{isZh ? member.nameZh : member.nameEn}</h3>
      <p className="team-card__title">{isZh ? member.titleZh : member.titleEn}</p>
      <p className="team-card__summary">{isZh ? member.summaryZh : member.summaryEn}</p>
      <Link to={`/team/${member.slug}`} className="team-card__link">
        {viewDetailLabel} →
      </Link>
    </article>
  )
}
