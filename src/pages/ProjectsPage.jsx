import Projects from "../components/Projects";
export default function ProjectsPage() {
  return (
    <section className="container page-section">
      <p className="eyebrow">THE WORK / SELECTED PROJECTS</p>
      <h1>
        Ideas, turned
        <br />
        <span className="muted-heading">into interfaces.</span>
      </h1>
      <p className="page-intro">
        A growing collection of concept websites and personal projects. Explore
        the details, or save a few to revisit in this browser.
      </p>
      <Projects />
    </section>
  );
}
