import { ArrowUpRight, Bookmark, Check, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useProjects } from "../context/ProjectsContext";

export default function ProjectCard({ project, headingLevel = "h3" }) {
  const Heading = headingLevel;
  const { toggleSaved } = useProjects();
  return (
    <article className="project-card">
      <Link
        to={`/projects/${project.id}`}
        className={`project-image project-image-${project.id}`}
        aria-label={`Read about ${project.name}`}
      >
        <div className="browser-bar" aria-hidden="true">
          <span />
          <span />
          <span />
          <small>
            {project.name.toLowerCase().replaceAll(" ", "")}.preview
          </small>
        </div>
        <img
          src={project.image}
          alt={project.alt}
          width="900"
          height="600"
          loading="lazy"
        />
        <span className="image-link" aria-hidden="true">
          <ArrowUpRight size={23} />
        </span>
      </Link>
      <div className="project-meta">
        <p className="eyebrow">{project.type}</p>
        <button
          className={`icon-button save-button ${project.saved ? "is-saved" : ""}`}
          aria-label={`${project.saved ? "Unsave" : "Save"} ${project.name}`}
          aria-pressed={project.saved}
          onClick={() => toggleSaved(project.id)}
        >
          {project.saved ? <Check size={18} /> : <Bookmark size={18} />}
        </button>
      </div>
      <Heading>
        <Link to={`/projects/${project.id}`}>{project.name}</Link>
        <span>{project.number}</span>
      </Heading>
      <p className="project-description">{project.description}</p>
      <ul className="tag-list" aria-label={`${project.name} technologies`}>
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="project-links">
        <Link to={`/projects/${project.id}`}>
          Project notes <ArrowUpRight size={16} />
        </Link>
        <a href={project.code} target="_blank" rel="noreferrer">
          Code <Github size={16} />
          <span className="sr-only">
            {" "}
            for {project.name} (opens in new tab)
          </span>
        </a>
      </div>
    </article>
  );
}
