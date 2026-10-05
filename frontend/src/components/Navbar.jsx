// ============================================================
//  src/components/Navbar.jsx
//  Sticky, editorial navbar — black & cream aesthetic.
//  Clean logo mark, underline active links, hamburger on mobile.
// ============================================================

import { useState } from "react";
import { NavLink } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home",     path: "/" },
  { label: "About",   path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    [
      "relative py-1 text-sm font-medium tracking-wide transition-all duration-200",
      "after:absolute after:left-0 after:bottom-0",
      "after:h-px after:w-0 after:rounded-full",
      "after:transition-all after:duration-300",
      isActive
        ? "text-[var(--text-primary)] after:w-full after:bg-[var(--text-primary)]"
        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] after:bg-[var(--accent-secondary)] hover:after:w-full",
    ].join(" ");

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md border-b"
      style={{
        backgroundColor: "var(--bg-nav)",
        borderColor: "var(--border-default)",
      }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:py-5">

        {/* ── Wordmark logo ─────────────────────────────────── */}
        <NavLink
          to="/"
          className="group flex items-baseline gap-0.5 text-lg font-semibold tracking-tight"
          style={{ color: "var(--text-primary)" }}
        >
          Arun
          <span
            className="text-base font-medium transition-colors duration-200"
            style={{ color: "var(--accent-secondary)" }}
          >
            .dev
          </span>
        </NavLink>

        {/* ── Desktop links ─────────────────────────────────── */}
        <ul className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} end={link.path === "/"} className={linkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── Hire me pill — desktop only ───────────────────── */}
        <a
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full border transition-all duration-200 hover:bg-[var(--accent-primary)] hover:text-[var(--text-on-accent)] hover:border-[var(--accent-primary)]"
          style={{
            color: "var(--accent-primary)",
            borderColor: "var(--border-accent)",
          }}
        >
          Hire me
        </a>

        {/* ── Hamburger (mobile) ────────────────────────────── */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span
            className="block h-px w-6 rounded transition-all duration-300 origin-center"
            style={{
              backgroundColor: "var(--text-primary)",
              transform: mobileOpen ? "translateY(6px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block h-px w-6 rounded transition-all duration-300"
            style={{
              backgroundColor: "var(--text-primary)",
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            className="block h-px w-6 rounded transition-all duration-300 origin-center"
            style={{
              backgroundColor: "var(--text-primary)",
              transform: mobileOpen ? "translateY(-6px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* ── Mobile dropdown ───────────────────────────────── */}
      {mobileOpen && (
        <ul
          className="md:hidden flex flex-col border-t"
          style={{
            backgroundColor: "var(--bg-nav)",
            borderColor: "var(--border-default)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === "/"}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  [
                    "block px-6 py-4 text-sm font-medium border-b transition-colors duration-200",
                    isActive
                      ? "text-[var(--text-primary)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
                  ].join(" ")
                }
                style={{ borderColor: "var(--border-default)" }}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          {/* Hire me in mobile menu too */}
          <li>
            <a
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block px-6 py-4 text-sm font-semibold tracking-widest uppercase"
              style={{ color: "var(--accent-primary)" }}
            >
              Hire me
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
