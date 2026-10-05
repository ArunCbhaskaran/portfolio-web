// ============================================================
//  src/pages/Home.jsx
//  Hero landing page — editorial, black & cream aesthetic.
//  Full-screen layout, large display type, clean CTA row.
// ============================================================

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col justify-center px-6 relative overflow-hidden"
      style={{ background: "var(--bg-main)" }}
    >

      {/* ── Subtle vertical rule — editorial decoration ───── */}
      <div
        className="absolute left-[calc(50%-1px)] top-0 bottom-0 hidden lg:block pointer-events-none"
        style={{ width: "1px", background: "var(--border-default)" }}
      />

      {/* ── Grid rule — top horizontal line ──────────────── */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{ height: "1px", background: "var(--border-default)", opacity: 0.5 }}
      />

      {/* ── Main content column ───────────────────────────── */}
      <div className="mx-auto max-w-6xl w-full py-28 md:py-36 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* ── Left — Hero text ─────────────────────────────── */}
        <div className="flex flex-col gap-7">

          {/* Kicker label */}
          <div className="animate-fade-up flex items-center gap-3">
            <span
              className="block w-8 h-px"
              style={{ background: "var(--accent-secondary)" }}
            />
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: "var(--text-secondary)" }}
            >
              Full-Stack Developer
            </span>
          </div>

          {/* Display name */}
          <h1
            className="animate-fade-up delay-100 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Crafting{" "}
            <em
              className="not-italic font-editorial"
              style={{ color: "var(--accent-primary)" }}
            >
              digital
            </em>
            <br />
            experiences
            <br />
            <span style={{ color: "var(--text-secondary)" }}>that matter.</span>
          </h1>

          {/* Intro paragraph */}
          <p
            className="animate-fade-up delay-200 text-base md:text-lg leading-relaxed max-w-md"
            style={{ color: "var(--text-secondary)" }}
          >
            I'm{" "}
            <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>Arun CB</span>
            {" "}— a full-stack developer who designs and builds fast,
            accessible web applications with modern tools and a sharp eye for detail.
          </p>

          {/* CTA row */}
          <div className="animate-fade-up delay-300 flex flex-wrap gap-4 mt-1">
            <Link
              to="/projects"
              className="px-7 py-3 rounded-full font-semibold text-sm tracking-wide border transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: "var(--accent-primary)",
                color: "var(--text-on-accent)",
                borderColor: "var(--accent-primary)",
              }}
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="px-7 py-3 rounded-full font-semibold text-sm tracking-wide border transition-all duration-200 hover:-translate-y-0.5 hover:text-[var(--text-primary)] hover:border-[var(--text-primary)]"
              style={{
                borderColor: "var(--border-accent)",
                color: "var(--text-secondary)",
              }}
            >
              Get in touch
            </Link>
          </div>

          {/* Social links */}
          <div className="animate-fade-up delay-400 flex gap-7 mt-1">
            {[
              { label: "GitHub",   url: "#" },
              { label: "LinkedIn", url: "#" },
              { label: "Twitter",  url: "#" },
            ].map(({ label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-200 hover:text-[var(--text-primary)]"
                style={{ color: "var(--text-secondary)" }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Right — Stats / Identity card ────────────────── */}
        <div className="animate-fade-up delay-300 hidden lg:flex flex-col gap-6">

          {/* Identity card */}
          <div
            className="rounded-2xl p-8 border flex flex-col gap-5"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-default)",
            }}
          >
            {/* Avatar placeholder */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl border"
              style={{
                backgroundColor: "var(--bg-main)",
                borderColor: "var(--border-default)",
              }}
            >
              🧑‍💻
            </div>

            <div className="flex flex-col gap-1">
              <p
                className="text-xl font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Arun CB
              </p>
              <p
                className="text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                Full-Stack Developer · India
              </p>
            </div>

            {/* Divider */}
            <div style={{ height: "1px", background: "var(--border-default)" }} />

            {/* Mini stats row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { num: "3+",   label: "Years exp." },
                { num: "20+",  label: "Projects" },
                { num: "100%", label: "Dedicated" },
              ].map(({ num, label }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span
                    className="text-2xl font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {num}
                  </span>
                  <span
                    className="text-xs uppercase tracking-wider"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stack chips row */}
          <div className="flex flex-wrap gap-2">
            {["React", "Node.js", "TypeScript", "MongoDB", "Figma", "Docker"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "var(--badge-bg)",
                  color: "var(--badge-text)",
                  borderColor: "var(--border-default)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* ── Bottom rule ───────────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: "1px", background: "var(--border-default)", opacity: 0.5 }}
      />

      {/* ── Scroll hint ───────────────────────────────────── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up delay-500"
        style={{ color: "var(--text-secondary)" }}
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <span className="block w-px h-8" style={{ background: "var(--border-accent)" }} />
      </div>

    </main>
  );
}
