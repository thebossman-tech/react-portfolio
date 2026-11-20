import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { useProjects } from "../context/ProjectsContext";
import NotFound from "./NotFound";
export default function ProjectDetail() {
  const { id } = useParams();
  const { projects } = useProjects();
  const project = projects.find((item) => item.id === id);
  if (!project) return <NotFound />;
  return (
    <article className="container page-section project-detail">
      <Link className="text-link back-link" to="/projects">
        <ArrowLeft size={17} />
        Back to projects
      </Link>
      <p className="eyebrow">{project.type}</p>
      <h1>
        {project.name}
        <span className="brand-dot">.</span>
      </h1>
      <p className="page-intro">{project.description}</p>
      <ul className="tag-list">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="button-row">
        {project.live && (
          <a
            className="button button-primary"
            href={project.live}
            target="_blank"
            rel="noreferrer"
          >
            Visit live website <ArrowUpRight size={17} />
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        )}
        <a
          className="button button-secondary"
          href={project.code}
          target="_blank"
          rel="noreferrer"
        >
          <Github size={17} />
          Explore the code<span className="sr-only"> (opens in new tab)</span>
        </a>
      </div>
      <div className="detail-image">
        <img src={project.image} alt={project.alt} width="1200" height="800" />
      </div>
      <div className="detail-notes">
        <div>
          <p className="eyebrow">THE CHALLENGE</p>
          <h2>A clear purpose.</h2>
          <p>{project.challenge}</p>
        </div>
        <div>
          <p className="eyebrow">THE APPROACH</p>
          <h2>Details with a reason.</h2>
          <p>{project.approach}</p>
        </div>
      </div>
      <p className="project-note">
        This is a concept/personal project. Screenshots show the project at the
        time they were captured; the live version may evolve.
      </p>
    </article>
  );
}
