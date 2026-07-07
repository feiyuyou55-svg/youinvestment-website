import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { NAV_PATHS } from '../data/site'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { locale, setLocale, t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="logo">
          <span className="logo__name">{t.company.shortName}</span>
          <span className="logo__tag">{t.company.tagline}</span>
        </Link>

        <div className="header-right">
          <div className="lang-toggle" role="group" aria-label="Language">
            <button
              type="button"
              className={`lang-toggle__btn ${locale === 'zh' ? 'active' : ''}`}
              onClick={() => setLocale('zh')}
            >
              中文
            </button>
            <span className="lang-toggle__sep">|</span>
            <button
              type="button"
              className={`lang-toggle__btn ${locale === 'en' ? 'active' : ''}`}
              onClick={() => setLocale('en')}
            >
              EN
            </button>
          </div>

          <nav className="nav" aria-label="Main navigation">
            <button
              className="nav-toggle"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span /><span /><span />
            </button>

            <ul className={`nav__list ${menuOpen ? 'open' : ''}`}>
              {NAV_PATHS.map(({ path, key, highlight }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    end={path === '/'}
                    className={({ isActive }) =>
                      `nav__link ${isActive ? 'active' : ''} ${highlight ? 'nav__link--highlight' : ''}`
                    }
                  >
                    {t.nav[key]}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
