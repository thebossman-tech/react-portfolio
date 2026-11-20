import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuButton = useRef(null);
  const header = useRef(null);
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);
  useEffect(() => {
    const viewport = matchMedia("(min-width: 801px)");
    const onResize = () => {
      if (viewport.matches) setMenuOpen(false);
    };
    viewport.addEventListener("change", onResize);
    return () => viewport.removeEventListener("change", onResize);
  }, []);
  // Trap focus in the expanded mobile header; Escape returns to its trigger.
  function onKeyDown(event) {
    if (!menuOpen) return;
    if (event.key === "Escape") {
      setMenuOpen(false);
      menuButton.current?.focus();
    }
    if (event.key === "Tab") {
      const focusable = [...header.current.querySelectorAll("a,button")].filter(
        (element) => element.getClientRects().length,
      );
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  }
  return (
    <header ref={header} className="site-header" onKeyDown={onKeyDown}>
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="Olatunbosun home">
          <span className="brand-symbol" aria-hidden="true">
            o<span>.</span>
          </span>
          <span>
            olatunbosun<span className="brand-dot">.</span>
          </span>
        </Link>
        <nav
          id="site-navigation"
          className={`navigation ${menuOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {[
            ["/", "Home"],
            ["/projects", "Work"],
            ["/about", "About"],
            ["/contact", "Contact"],
          ].map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <Link className="nav-contact" to="/contact">
            Let’s talk <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </nav>
        <div className="header-actions">
          <button
            className="icon-button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <Moon size={19} /> : <Sun size={19} />}
          </button>
          <button
            ref={menuButton}
            className="icon-button menu-button"
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
