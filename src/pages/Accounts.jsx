import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import PageHeader from '../components/PageHeader'
import AccountCard from '../components/AccountCard'
import { IconCheck } from '../components/Icons'
import { ACCOUNT_HELP, FEATURED_ACCOUNTS, OTHER_ACCOUNTS } from '../data/accounts'

export default function Accounts() {
  const { locale, t } = useLanguage()
  const a = t.accounts
  const isZh = locale === 'zh'
  const helpItems = isZh ? ACCOUNT_HELP.itemsZh : ACCOUNT_HELP.itemsEn

  return (
    <>
      <PageHeader label={a.label} title={a.title} desc={a.subtitle} />

      <section className="section section--compact">
        <div className="container">
          <div className="accounts-top">
            <div className="accounts-top__help">
              <h2>{a.weHelpTitle}</h2>
              <ul className="inline-checks">
                {helpItems.map((item) => (
                  <li key={item}><IconCheck /><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="accounts-top__cta">
              <Link to="/risk-assessment" className="btn btn--primary btn--block">{a.ctaRisk}</Link>
              <Link to="/strategies" className="btn btn--outline-navy btn--block">{a.ctaStrategies}</Link>
              <Link to="/contact?intent=account" className="btn btn--outline-navy btn--block">{a.ctaConsult}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--compact section--gray">
        <div className="container">
          {FEATURED_ACCOUNTS.map((account) => (
            <AccountCard
              key={account.id}
              account={account}
              locale={locale}
              labels={a}
              featuredLabel={a.featured}
            />
          ))}
        </div>
      </section>

      <section className="section section--compact">
        <div className="container">
          <h2 className="section-subtitle">{a.otherTitle}</h2>
          {OTHER_ACCOUNTS.map((item) => (
            <div key={item.id} className="account-row account-row--compact">
              <div className="account-row__name">
                <h3>{isZh ? item.nameZh : item.nameEn}</h3>
              </div>
              <div className="account-row__desc">
                <p>{isZh ? item.descZh : item.descEn}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-strip">
        <div className="container cta-strip__inner">
          <p>{a.ctaTitle}</p>
          <Link to="/contact?intent=account" className="btn btn--primary">{a.ctaConsult}</Link>
        </div>
      </section>
    </>
  )
}
