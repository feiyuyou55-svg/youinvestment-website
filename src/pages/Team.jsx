import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import PageHeader from '../components/PageHeader'
import TeamCard from '../components/TeamCard'
import { TEAM_PAGE, getVisibleTeamMembers } from '../data/team'

export default function Team() {
  const { locale } = useLanguage()
  const isZh = locale === 'zh'
  const page = TEAM_PAGE
  const members = getVisibleTeamMembers()

  return (
    <>
      <PageHeader
        label="Team"
        title={isZh ? page.titleZh : page.titleEn}
        desc={isZh ? page.introZh : page.introEn}
      />

      <section className="section section--compact">
        <div className="container">
          <div className="team-grid">
            {members.map((member) => (
              <TeamCard
                key={member.id}
                member={member}
                locale={locale}
                viewDetailLabel={isZh ? page.viewDetailZh : page.viewDetailEn}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container cta-strip__inner">
          <Link to="/contact?intent=advisory" className="btn btn--primary">
            {isZh ? '预约顾问交流' : 'Schedule Adviser Consultation'}
          </Link>
          <Link to="/contact" className="btn btn--outline-navy">
            {isZh ? '联系我们' : 'Contact Us'}
          </Link>
        </div>
      </section>
    </>
  )
}
