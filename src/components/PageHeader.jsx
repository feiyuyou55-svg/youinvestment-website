/** Light page header — more white area, less navy */
export default function PageHeader({ label, title, desc, meta, children }) {
  return (
    <section className="page-header-light">
      <div className="container">
        {label && <p className="page-header-light__label">{label}</p>}
        <h1 className="page-header-light__title">{title}</h1>
        {desc && <p className="page-header-light__desc">{desc}</p>}
        {meta && <p className="page-header-light__meta">{meta}</p>}
        {children}
      </div>
    </section>
  )
}
