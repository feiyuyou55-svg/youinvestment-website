import { IconCheck } from './Icons'

export default function FounderTimeline({ timeline, locale, labels }) {
  const isZh = locale === 'zh'

  return (
    <>
      {timeline.map((step, i) => (
        <div key={step.id} className={`timeline-card ${step.isCurrent ? 'timeline-card--current' : ''}`}>
          <div className="timeline-card__head">
            <h3>{isZh ? step.orgZh : step.orgEn}</h3>
            {step.roleZh && (
              <p className="timeline-card__role">{isZh ? step.roleZh : step.roleEn}</p>
            )}
          </div>
          <div className="timeline-card__body">
            <p className="timeline-card__label">{labels.experience}</p>
            <ul className="timeline-card__tags">
              {(isZh ? step.experienceZh : step.experienceEn).map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
            <p className="timeline-card__label">{labels.capabilities}</p>
            <ul className="timeline-card__tags timeline-card__tags--gold">
              {(isZh ? step.capabilitiesZh : step.capabilitiesEn).map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p className="timeline-card__label">{labels.clientValue}</p>
            <ul className="timeline-card__values">
              {(isZh ? step.valuePointsZh : step.valuePointsEn).map((v) => (
                <li key={v}><IconCheck />{v}</li>
              ))}
            </ul>
          </div>
          {i < timeline.length - 1 && <div className="timeline-card__arrow">↓</div>}
        </div>
      ))}
    </>
  )
}
