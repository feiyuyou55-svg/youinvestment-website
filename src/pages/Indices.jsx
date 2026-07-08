import { useLanguage } from '../i18n/LanguageContext'
import PageHeader from '../components/PageHeader'
import { INDEX_PAGE, getVisibleIndices } from '../data/indices'
import { Link } from 'react-router-dom'

export default function Indices() {
  const { locale } = useLanguage()
  const isZh = locale === 'zh'
  const page = INDEX_PAGE
  const indices = getVisibleIndices()

  return (
    <>
      <PageHeader
        label={isZh ? page.titleZh : page.titleEn}
        title={isZh ? page.titleZh : page.titleEn}
        desc={isZh ? page.introZh : page.introEn}
      />
      <section className="section section--compact">
        <div className="container">
          {indices.map((idx) => (
            <article key={idx.id} className="index-card">
              <h2>{isZh ? idx.nameZh : idx.nameEn} <span className="index-card__short">({idx.shortName})</span></h2>
              <p className="index-card__method">
                {isZh ? idx.methodologySummary?.zh : idx.methodologySummary?.en}
              </p>
              <dl className="index-card__metrics">
                <div><dt>{isZh ? '基准' : 'Benchmark'}</dt><dd>{idx.benchmark}</dd></div>
                <div><dt>{isZh ? '年初至今' : 'YTD'}</dt><dd className="up">{idx.ytdReturn}</dd></div>
                <div><dt>{isZh ? '成立以来' : 'Since Inception'}</dt><dd className="up">{idx.sinceInceptionReturn}</dd></div>
                <div><dt>{isZh ? '最大回撤' : 'Max Drawdown'}</dt><dd className="down">{idx.maxDrawdown}</dd></div>
                <div><dt>{isZh ? '风险等级' : 'Risk Level'}</dt><dd>{idx.riskLevel}</dd></div>
                <div><dt>{isZh ? '更新日期' : 'Updated'}</dt><dd>{idx.updateDate}</dd></div>
              </dl>
              <p className="index-card__disclaimer">
                {isZh ? idx.disclaimer?.zh : idx.disclaimer?.en}
              </p>
            </article>
          ))}
          <div className="section-cta">
            <Link to="/strategies" className="btn btn--primary">{isZh ? '查看相关策略' : 'View Related Strategies'}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
