import Contact from "../components/Contact";
export default function ContactPage() {
  return (
    <section className="container page-section contact-page">
      <p className="eyebrow">GET IN TOUCH</p>
      <h1>
        A conversation,
        <br />
        <span className="muted-heading">then a good beginning.</span>
      </h1>
      <Contact />
    </section>
  );
}
