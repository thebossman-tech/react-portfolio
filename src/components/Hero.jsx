import { ArrowDownRight, ArrowUpRight, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" /> FRONTEND DEVELOPER · IBADAN, NIGERIA
        </p>
        <h1 id="hero-heading">
          Thoughtful interfaces.
          <br />
          <span>Built to work.</span>
        </h1>
        <p className="hero-intro">
          Hi, I’m <strong>Olatunbosun.</strong> I turn ideas into responsive,
          accessible websites—with care for the details people actually use.
        </p>
        <div className="button-row">
          <Link className="button button-primary" to="/projects">
            Explore my work <ArrowDownRight size={19} />
          </Link>
          <Link className="button button-text" to="/contact">
            Have a project in mind? <ArrowUpRight size={17} />
          </Link>
        </div>
        <p className="availability">
          <span className="status-dot" /> Open to freelance projects & frontend
          opportunities
        </p>
      </div>
      <div className="hero-visual">
        <div className="portrait-frame">
          <img
            src="/images/portrait.jpeg"
            alt="Olatunbosun Ogundijo"
            width="640"
            height="760"
            fetchPriority="high"
          />
          <div className="portrait-caption">
            <span>OGUNDIJO OLATUNBOSUN</span>
            <span>Frontend Developer</span>
          </div>
        </div>
        <div className="craft-note">
          <Code2 size={22} />
          <span>
            Good design.
            <br />
            <strong>Considered code.</strong>
          </span>
          <span className="note-arrow" aria-hidden="true">
            ↗
          </span>
        </div>
        <span className="visual-index">DESIGN MINDED. DETAIL DRIVEN.</span>
      </div>
    </section>
  );
}
