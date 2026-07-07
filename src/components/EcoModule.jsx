export default function EcoModule({ id, title, items }) {
  return (
    <article className="eco-module" id={id}>
      <h2>{title}</h2>
      <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </article>
  )
}
