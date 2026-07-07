import { IconCheck } from './Icons'

export default function BookCard({ book, locale, imagePlaceholder }) {
  const isZh = locale === 'zh'
  return (
    <div className="book-card">
      <p className="book-card__series">{isZh ? book.seriesZh : book.seriesEn}</p>
      <h2>{isZh ? book.titleZh : book.titleEn}</h2>
      <p>{isZh ? book.descZh : book.descEn}</p>
      <div className="img-placeholder">
        {book.imageUrl ? <img src={book.imageUrl} alt={isZh ? book.titleZh : book.titleEn} /> : imagePlaceholder}
      </div>
    </div>
  )
}
