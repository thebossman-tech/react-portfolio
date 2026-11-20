// One heading pattern keeps spacing and hierarchy consistent across pages.
export default function SectionHeading({ label, title, children }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      {children && <p className="section-description">{children}</p>}
    </div>
  );
}
