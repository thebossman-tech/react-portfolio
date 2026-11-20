import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <Link className="footer-brand" to="/">
            Let’s make something
            <br />
            <span>worth using.</span>
          </Link>
          <p>Frontend development, with thought behind every detail.</p>
        </div>
        <Link
          className="footer-cta"
          to="/contact"
          aria-label="Start a conversation"
        >
          <ArrowUpRight size={36} />
        </Link>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Ogundijo Olatunbosun</p>
        <span>Built with React. Made with care.</span>
        <div>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github size={16} />
            GitHub<span className="sr-only"> (opens in new tab)</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={16} />
            LinkedIn<span className="sr-only"> (opens in new tab)</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
