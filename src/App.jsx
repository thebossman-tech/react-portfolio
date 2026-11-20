import { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import { initialProjects } from "./data/projects";

export default function App() {
  const location = useLocation();
  const main = useRef(null);
  const firstRender = useRef(true);
  useEffect(() => {
    const titles = {
      "/": "Home",
      "/projects": "Projects",
      "/about": "About & Skills",
      "/contact": "Contact",
    };
    const project = initialProjects.find(
      (item) => location.pathname === `/projects/${item.id}`,
    );
    const label =
      titles[location.pathname] || project?.name || "Page not found";
    document.title = `${label} — Olatunbosun Ogundijo`;
    // Route changes need an explicit focus/scroll reset in a client-rendered app.
    window.scrollTo({ top: 0, behavior: "instant" });
    if (!firstRender.current) main.current?.focus({ preventScroll: true });
    firstRender.current = false;
  }, [location.pathname]);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content" ref={main} tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
