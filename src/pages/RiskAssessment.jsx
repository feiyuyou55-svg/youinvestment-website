import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import PageHeader from '../components/PageHeader'
import RiskResultCard from '../components/RiskResultCard'
import { getQuestions, calculateResult, ASSESSMENT_VERSION } from '../data/riskAssessment'

export default function RiskAssessment() {
  const { locale, t } = useLanguage()
  const r = t.risk
  const questions = getQuestions(locale)

  const [started, setStarted] = useState(false)
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)

  const current = questions[step]
  const progress = started && !result ? Math.round(((step + 1) / questions.length) * 100) : 0

  function handleRetake() {
    setResult(null)
    setStarted(false)
    setStep(0)
    setAnswers({})
  }

  if (result) {
    return (
      <>
        <PageHeader label={`${r.label} ${ASSESSMENT_VERSION}`} title={r.reportTitle} />
        <section className="section section--compact">
          <div className="container container--narrow">
            <RiskResultCard
              result={result}
              locale={locale}
              labels={r}
              onRetake={handleRetake}
            />
          </div>
        </section>
      </>
    )
  }

  if (!started) {
    return (
      <>
        <PageHeader label={`${r.label} ${ASSESSMENT_VERSION}`} title={r.title} desc={r.subtitle} />
        <section className="section section--compact">
          <div className="container container--narrow">
            <div className="card-box">
              <p>{r.intro}</p>
              <button type="button" className="btn btn--primary" onClick={() => setStarted(true)}>{r.start}</button>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageHeader label={`${r.progress} ${progress}%`} title={current.text} />
      <section className="section section--compact">
        <div className="container container--narrow">
          <div className="card-box">
            <div className="assessment-progress"><div style={{ width: `${progress}%` }} /></div>
            <div className="assessment-options">
              {current.options.map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  className={`assessment-option ${answers[current.id] === opt.score ? 'selected' : ''}`}
                  onClick={() => setAnswers({ ...answers, [current.id]: opt.score })}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <div className="assessment-nav">
              {step > 0 && <button type="button" className="btn btn--outline-navy" onClick={() => setStep(step - 1)}>{r.prev}</button>}
              <button
                type="button"
                className="btn btn--primary"
                disabled={answers[current.id] == null}
                onClick={() => (step < questions.length - 1 ? setStep(step + 1) : setResult(calculateResult(answers, locale)))}
              >
                {step < questions.length - 1 ? r.next : r.submit}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
