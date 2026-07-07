export default function SectionHeader({ label, title, desc, light = false }) {
  return (
    <header className={`section__header ${light ? 'section__header--light' : ''}`}>
      {label && <p className="section__label">{label}</p>}
      {title && <h2 className="section__title">{title}</h2>}
      {desc && <p className="section__desc">{desc}</p>}
    </header>
  )
}
