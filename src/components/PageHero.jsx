export default function PageHero({ label, title, desc, children }) {
  return (
    <section className="page-hero">
      <div className="container">
        {label && <p className="page-hero__label">{label}</p>}
        <h1 className="page-hero__title">{title}</h1>
        {desc && <p className="page-hero__desc">{desc}</p>}
        {children}
      </div>
    </section>
  )
}
