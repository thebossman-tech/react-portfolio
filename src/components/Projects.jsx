import { useState } from "react";
import { Search } from "lucide-react";
import { useProjects } from "../context/ProjectsContext";
import ProjectCard from "./ProjectCard";

export default function Projects({ featured = false }) {
  const { projects } = useProjects();
  const [category, setCategory] = useState("All work");
  const [query, setQuery] = useState("");
  const [savedOnly, setSavedOnly] = useState(false);
  // Derive the view from state rather than keeping a second, conflicting project array.
  const visible = projects.filter(
    (project) =>
      (category === "All work" || project.category === category) &&
      (!savedOnly || project.saved) &&
      `${project.name} ${project.description} ${project.tags.join(" ")}`
        .toLowerCase()
        .includes(query.toLowerCase().trim()),
  );
  const displayed = featured ? projects.slice(0, 2) : visible;
  return (
    <div>
      {!featured && (
        <div className="project-toolbar">
          <div className="filters" role="group" aria-label="Project categories">
            {["All work", "Landing pages", "Multi-page websites"].map(
              (label) => (
                <button
                  key={label}
                  aria-pressed={label === category}
                  className={label === category ? "selected" : ""}
                  onClick={() => setCategory(label)}
                >
                  {label}
                </button>
              ),
            )}
          </div>
          <label className="project-search">
            <Search size={17} aria-hidden="true" />
            <span className="sr-only">Search projects</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Find a project…"
            />
          </label>
          <label className="saved-filter">
            <input
              type="checkbox"
              checked={savedOnly}
              onChange={(event) => setSavedOnly(event.target.checked)}
            />
            Saved only
          </label>
        </div>
      )}
      {!featured && (
        <p className="results-count" role="status">
          {displayed.length} {displayed.length === 1 ? "project" : "projects"} ·{" "}
          {projects.filter((p) => p.saved).length} saved in this browser
        </p>
      )}
      <div className="project-grid">
        {displayed.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            headingLevel={featured ? "h3" : "h2"}
          />
        ))}
      </div>
      {!displayed.length && (
        <div className="empty-state">
          <h2>No projects match just yet.</h2>
          <p>Try a different search or reset your filters.</p>
          <button
            className="button button-primary"
            onClick={() => {
              setCategory("All work");
              setQuery("");
              setSavedOnly(false);
            }}
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
