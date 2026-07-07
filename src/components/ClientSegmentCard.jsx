export default function ClientSegmentCard({ title, desc }) {
  return (
    <article className="client-segment-card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </article>
  )
}
