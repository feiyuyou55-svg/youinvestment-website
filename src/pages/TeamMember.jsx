import { Link, Navigate, useParams } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import PageHeader from '../components/PageHeader'
import { TEAM_PAGE, getTeamMemberBySlug } from '../data/team'

export default function TeamMember() {
  const { slug } = useParams()
  const { locale } = useLanguage()
  const isZh = locale === 'zh'
  const page = TEAM_PAGE
  const member = getTeamMemberBySlug(slug)

  if (!member) return <Navigate to="/team" replace />

  const initial = (isZh ? member.nameZh : member.nameEn).charAt(0)

  return (
    <>
      <PageHeader
        label="Team"
        title={isZh ? member.nameZh : member.nameEn}
        desc={isZh ? member.titleZh : member.titleEn}
      />

      <section className="section section--compact">
        <div className="container container--narrow">
          <Link to="/team" className="team-back-link">
            ← {isZh ? page.backZh : page.backEn}
          </Link>

          <div className="team-detail">
            <div className="team-detail__photo">
              {member.photoUrl ? (
                <img src={member.photoUrl} alt={isZh ? member.nameZh : member.nameEn} />
              ) : (
                <span>{initial}</span>
              )}
            </div>
            <div className="team-detail__body">
              <h2>{isZh ? member.nameZh : member.nameEn}</h2>
              <p className="team-detail__title">{isZh ? member.titleZh : member.titleEn}</p>

              {member.locationZh && (
                <>
                  <h3>{isZh ? page.locationZh : page.locationEn}</h3>
                  <p>{isZh ? member.locationZh : member.locationEn}</p>
                </>
              )}

              <h3>{isZh ? page.qualificationsZh : page.qualificationsEn}</h3>
              <ul>
                {(isZh ? member.qualificationsZh : member.qualificationsEn).map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>

              <h3>{isZh ? page.expertiseZh : page.expertiseEn}</h3>
              <ul className="team-detail__tags">
                {(isZh ? member.expertiseZh : member.expertiseEn).map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>

              <h3>{isZh ? page.bioZh : page.bioEn}</h3>
              <p>{isZh ? member.bioZh : member.bioEn}</p>

              {(member.email || member.phone) && (
                <>
                  <h3>{isZh ? page.contactZh : page.contactEn}</h3>
                  {member.email && <p>{member.email}</p>}
                  {member.phone && <p>{member.phone}</p>}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
