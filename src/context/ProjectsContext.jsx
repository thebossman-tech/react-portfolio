import { createContext, useContext, useEffect, useState } from "react";
import { initialProjects } from "../data/projects";

const ProjectsContext = createContext(null);

export function ProjectsProvider({ children }) {
  // Functional initialization reads saved IDs once and rejects malformed stored data.
  const [projects, setProjects] = useState(() => {
    let saved = [];
    try {
      const parsed = JSON.parse(
        localStorage.getItem("portfolio-saved-projects") || "[]",
      );
      if (Array.isArray(parsed))
        saved = parsed.filter((id) => typeof id === "string");
    } catch {
      /* Corrupt or blocked storage falls back to the original project list. */
    }
    return initialProjects.map((project) => ({
      ...project,
      saved: saved.includes(project.id),
    }));
  });
  useEffect(() => {
    try {
      localStorage.setItem(
        "portfolio-saved-projects",
        JSON.stringify(
          projects
            .filter((project) => project.saved)
            .map((project) => project.id),
        ),
      );
    } catch {
      /* Saving within this session still works. */
    }
  }, [projects]);
  // Immutable updates produce a new array so React can re-render dependent components.
  function toggleSaved(id) {
    setProjects((current) =>
      current.map((project) =>
        project.id === id ? { ...project, saved: !project.saved } : project,
      ),
    );
  }
  return (
    <ProjectsContext.Provider value={{ projects, toggleSaved }}>
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjects() {
  const value = useContext(ProjectsContext);
  if (!value)
    throw new Error("useProjects must be used inside ProjectsProvider");
  return value;
}
