// ============================================================
//  src/pages/Projects.jsx
//  Shows one project card. Edit the data in src/data/projects.js
// ============================================================

import project from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "6rem 1.5rem",
        background: "var(--bg-main)",
      }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto", display: "flex", flexDirection: "column", gap: "4rem" }}>

        {/* Header */}
        <div style={{ borderBottom: "1px solid var(--border-default)", paddingBottom: "2.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ display: "block", width: "1.5rem", height: "1px", background: "var(--accent-secondary)" }} />
            <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-secondary)" }}>
              What I've built
            </span>
          </div>
          <h1 style={{ margin: 0, fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 700, color: "var(--text-primary)" }}>
            Projects
          </h1>
          <p style={{ marginTop: "0.75rem", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
            Edit{" "}
            <code style={{ padding: "0.15rem 0.4rem", borderRadius: "0.25rem", fontSize: "0.75rem", backgroundColor: "var(--badge-bg)", color: "var(--badge-text)" }}>
              src/data/projects.js
            </code>{" "}
            to update this card with your own project.
          </p>
        </div>

        {/* Single project card */}
        <ProjectCard project={project} />

      </div>
    </main>
  );
}
