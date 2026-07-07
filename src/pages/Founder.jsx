import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import PageHeader from '../components/PageHeader'
import BookCard from '../components/BookCard'
import FounderTimeline from '../components/FounderTimeline'
import { FOUNDER_PROFILE, FOUNDER_BOOKS, FOUNDER_TIMELINE, CYCLE_EVOLUTION } from '../data/founder'

export default function Founder() {
  const { locale, t } = useLanguage()
  const f = t.founder
  const isZh = locale === 'zh'
  const profile = FOUNDER_PROFILE
  const book = FOUNDER_BOOKS[0]
  const cycle = CYCLE_EVOLUTION

  return (
    <>
      <PageHeader
        label={isZh ? profile.pageLabelCombinedZh : profile.pageLabelCombinedEn}
        title={isZh ? profile.displayNameZh : profile.displayNameEn}
        desc={`${profile.titleZh} · ${isZh ? profile.taglineZh : profile.taglineEn}`}
      />

      <section className="section section--compact">
        <div className="container">
          <div className="founder-hero-grid">
            <div className="founder-hero-grid__photo">
              <span>游</span>
              <p className="founder-hero-grid__caption">
                {isZh ? profile.experienceZh : profile.experienceEn}
              </p>
            </div>
            <div>
              <BookCard
                book={book}
                locale={locale}
                imagePlaceholder={isZh ? '封面图片预留' : 'Cover image placeholder'}
              />
              {profile.teamSlug && (
                <p className="founder-team-link">
                  <Link to={`/team/${profile.teamSlug}`} className="link-gold">
                    {f.viewTeamProfile} →
                  </Link>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--compact section--gray">
        <div className="container container--narrow">
          <h2 className="section-subtitle">{isZh ? cycle.titleZh : cycle.titleEn}</h2>
          <div className="cycle-evolution">
            <div className="cycle-evolution__from">
              <span>{isZh ? cycle.fromLabelZh : cycle.fromLabelEn}</span>
              <strong>{isZh ? cycle.fromTextZh : cycle.fromTextEn}</strong>
            </div>
            <div className="cycle-evolution__arrow">→</div>
            <div className="cycle-evolution__to">
              <span>{isZh ? cycle.toLabelZh : cycle.toLabelEn}</span>
              <strong>{isZh ? cycle.toTextZh : cycle.toTextEn}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--compact">
        <div className="container">
          <h2 className="section-subtitle">
            {isZh ? profile.timelineTitleZh : profile.timelineTitleEn}
          </h2>
          <p className="section-desc">
            {isZh ? profile.timelineSubtitleZh : profile.timelineSubtitleEn}
          </p>
          <FounderTimeline
            timeline={FOUNDER_TIMELINE}
            locale={locale}
            labels={{
              experience: f.experienceLabel,
              capabilities: f.capabilitiesLabel,
              clientValue: f.clientValueLabel,
            }}
          />
        </div>
      </section>

      <section className="cta-strip">
        <div className="container cta-strip__inner">
          <Link to="/wealth-diagnosis" className="btn btn--primary">{f.ctaDiagnosis}</Link>
          <Link to="/contact?intent=advisory" className="btn btn--outline-navy">{f.ctaAdvisory}</Link>
          <Link to="/team" className="btn btn--outline-navy">{f.viewTeam}</Link>
        </div>
      </section>
    </>
  )
}
