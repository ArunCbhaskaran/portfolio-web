// ============================================================
//  src/components/ProjectCard.jsx
//  Displays a single project card.
// ============================================================

export default function ProjectCard({ project }) {
  const { title, description, image, technologies, githubUrl, liveUrl } = project;

  return (
    <div
      style={{
        width: "320px",
        borderRadius: "1rem",
        overflow: "hidden",
        border: "1px solid var(--border-default)",
        backgroundColor: "var(--bg-card)",
        transition: "transform 0.28s ease, border-color 0.28s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.borderColor = "var(--border-accent)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "var(--border-default)";
      }}
    >
      {/* Image */}
      {image ? (
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: "180px", objectFit: "cover", display: "block", borderBottom: "1px solid var(--border-default)" }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "180px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--bg-main)",
            borderBottom: "1px solid var(--border-default)",
            color: "var(--text-secondary)",
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            opacity: 0.5,
          }}
        >
          No image yet
        </div>
      )}

      {/* Body */}
      <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>

        {/* Title */}
        <h3 style={{ margin: 0, fontSize: "1rem", fontWeight: 600, color: "var(--text-primary)" }}>
          {title}
        </h3>

        {/* Description */}
        <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
          {description}
        </p>

        {/* Tech chips */}
        {technologies.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
            {technologies.map((tech) => (
              <span
                key={tech}
                style={{
                  padding: "0.2rem 0.65rem",
                  borderRadius: "999px",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  border: "1px solid var(--border-default)",
                  backgroundColor: "var(--badge-bg)",
                  color: "var(--badge-text)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}
        {(githubUrl || liveUrl) && (
          <div style={{ display: "flex", gap: "0.5rem", paddingTop: "0.75rem", borderTop: "1px solid var(--border-default)" }}>
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  padding: "0.4rem 0",
                  borderRadius: "999px",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  textAlign: "center",
                  textDecoration: "none",
                  border: "1px solid var(--border-accent)",
                  color: "var(--text-secondary)",
                }}
              >
                GitHub
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  padding: "0.4rem 0",
                  borderRadius: "999px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  textAlign: "center",
                  textDecoration: "none",
                  backgroundColor: "var(--accent-primary)",
                  color: "var(--text-on-accent)",
                  border: "1px solid var(--accent-primary)",
                }}
              >
                Live Demo
              </a>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
