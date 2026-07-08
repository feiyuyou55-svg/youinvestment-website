import { useLanguage } from '../i18n/LanguageContext'
import PageHeader from '../components/PageHeader'
import { DOCUMENT_PAGE, getVisibleDocuments } from '../data/documents'

const TYPE_LABELS = {
  form_adv: { zh: 'Form ADV', en: 'Form ADV' },
  risk_questionnaire: { zh: '风险问卷', en: 'Risk Questionnaire' },
  account_opening: { zh: '开户指南', en: 'Account Opening Guide' },
  investor_letter: { zh: '投资者信', en: 'Investor Letter' },
  strategy_factsheet: { zh: '策略说明书', en: 'Strategy Factsheet' },
}

export default function Documents() {
  const { locale } = useLanguage()
  const isZh = locale === 'zh'
  const page = DOCUMENT_PAGE
  const docs = getVisibleDocuments()

  return (
    <>
      <PageHeader
        label={isZh ? page.titleZh : page.titleEn}
        title={isZh ? page.titleZh : page.titleEn}
        desc={isZh ? page.introZh : page.introEn}
      />
      <section className="section section--compact">
        <div className="container">
          <div className="doc-list">
            {docs.map((doc) => (
              <article key={doc.id} className="doc-card">
                <span className="doc-card__type">
                  {TYPE_LABELS[doc.documentType]?.[isZh ? 'zh' : 'en'] || doc.documentType}
                </span>
                <h3>{isZh ? doc.titleZh : doc.titleEn}</h3>
                <p>{isZh ? doc.descriptionZh : doc.descriptionEn}</p>
                <dl className="doc-card__meta">
                  <div><dt>{isZh ? '版本' : 'Version'}</dt><dd>{doc.version}</dd></div>
                  <div><dt>{isZh ? '发布日期' : 'Published'}</dt><dd>{doc.publishDate}</dd></div>
                </dl>
                {doc.fileUrl ? (
                  <a href={doc.fileUrl} className="btn btn--primary btn--sm" target="_blank" rel="noopener noreferrer">
                    {isZh ? '下载' : 'Download'}
                  </a>
                ) : (
                  <span className="doc-card__pending">{isZh ? '文件即将上线' : 'File coming soon'}</span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
