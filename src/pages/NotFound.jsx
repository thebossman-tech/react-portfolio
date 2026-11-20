import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className="container page-section empty-state">
      <p className="eyebrow">404 / A SMALL DETOUR</p>
      <h1>
        Nothing here.
        <br />
        <span className="muted-heading">Plenty to explore.</span>
      </h1>
      <p>This page or project doesn’t exist. Let’s get you back to the work.</p>
      <Link className="button button-primary" to="/projects">
        Explore projects
      </Link>
    </section>
  );
}
