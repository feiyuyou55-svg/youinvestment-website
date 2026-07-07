import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer__brand">
            <Link to="/" className="logo">
              <span className="logo__name">{t.company.shortName}</span>
              <span className="logo__tag">LLC</span>
            </Link>
            <p>{t.footer.desc}</p>
          </div>
          <div>
            <h4 className="footer__heading">{t.footer.services}</h4>
            <ul className="footer__links">
              <li><Link to="/accounts">{t.nav.accounts}</Link></li>
              <li><Link to="/strategies">{t.nav.strategies}</Link></li>
              <li><Link to="/risk-assessment">{t.nav.riskAssessment}</Link></li>
              <li><Link to="/wealth-diagnosis">{t.footer.wealthDiagnosis}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer__heading">{t.footer.company}</h4>
            <ul className="footer__links">
              <li><Link to="/about">{t.nav.about}</Link></li>
              <li><Link to="/founder">{t.nav.founder}</Link></li>
              <li><Link to="/team">{t.footer.team}</Link></li>
              <li><Link to="/contact">{t.nav.contact}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer__heading">{t.footer.legal}</h4>
            <ul className="footer__links">
              <li><a href="/contact#disclaimer">{t.footer.formAdv}</a></li>
              <li><a href="/contact#privacy">{t.footer.privacy}</a></li>
              <li><a href="/contact#disclaimer">{t.footer.disclosures}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} {t.company.name}</span>
        </div>
      </div>
    </footer>
  )
}
