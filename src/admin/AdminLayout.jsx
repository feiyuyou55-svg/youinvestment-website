import { Link, Outlet, useLocation } from 'react-router-dom'
import { ADMIN_MENU, ADMIN_META } from '../data/admin'
import './admin.css'

export default function AdminLayout() {
  const { pathname } = useLocation()

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-sidebar__brand">
          <strong>{ADMIN_META.title}</strong>
          <span>{ADMIN_META.subtitle}</span>
        </div>
        <nav className="admin-nav">
          {ADMIN_MENU.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`admin-nav__link ${pathname === item.path ? 'active' : ''}`}
            >
              {item.labelZh}
            </Link>
          ))}
        </nav>
        <Link to="/" className="admin-sidebar__back">← 返回官网</Link>
      </aside>
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  )
}
