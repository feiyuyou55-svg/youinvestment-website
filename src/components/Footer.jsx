import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { FOOTER_CONTENT } from '../data/siteContent'

export default function Footer() {
  const { locale, t } = useLanguage()
  const isZh = locale === 'zh'
  const footer = FOOTER_CONTENT

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer__brand">
            <Link to="/" className="logo">
              <span className="logo__name">{t.company.shortName}</span>
              <span className="logo__tag">LLC</span>
            </Link>
            <p>{isZh ? footer.descZh : footer.descEn}</p>
          </div>
          <div>
            <h4 className="footer__heading">{t.footer.services}</h4>
            <ul className="footer__links">
              <li><Link to="/accounts">{t.nav.accounts}</Link></li>
              <li><Link to="/strategies">{t.nav.strategies}</Link></li>
              <li><Link to="/risk-assessment">{t.nav.riskAssessment}</Link></li>
              <li><Link to="/indices">{isZh ? footer.indicesZh : footer.indicesEn}</Link></li>
              <li><Link to="/documents">{isZh ? footer.documentsZh : footer.documentsEn}</Link></li>
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
