export default function WhyYimCards({ items, locale }) {
  const isZh = locale === 'zh'
  return (
    <div className="why-yim-grid">
      {items.map((item) => (
        <article key={item.id} className="why-yim-card">
          <h3>{isZh ? item.titleZh : item.titleEn}</h3>
          {item.linesZh ? (
            <div className="why-yim-card__lines">
              {(isZh ? item.linesZh : item.linesEn).map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>
          ) : (
            <p>{isZh ? item.descZh : item.descEn}</p>
          )}
        </article>
      ))}
    </div>
  )
}
