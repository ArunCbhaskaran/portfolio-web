export default function ProjectCard({ project }) {
  const { title, description, image, technologies, githubUrl, liveUrl } = project;

  return (
    <div 
      className="w-full flex flex-col transition-all duration-300 hover:-translate-y-2 cursor-default group"
      style={{
        background: "linear-gradient(145deg, #141412 0%, #1a1916 100%)",
        border: "1px solid #302E2A",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 0 0 1px rgba(232,223,201,0.04), 0 24px 48px rgba(0,0,0,0.5)",
      }}
    >
      {/* Window chrome */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "10px 14px", borderBottom: "1px solid #302E2A", background: "rgba(255,255,255,0.02)" }}>
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57", display: "inline-block" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E", display: "inline-block" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840", display: "inline-block" }} />
        <span style={{ flex: 1, textAlign: "center", fontSize: 11, color: "#5a564e", letterSpacing: "0.08em", fontFamily: "monospace", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>~/{title.toLowerCase().replace(/\s+/g, '-')}</span>
      </div>

      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-44 object-cover block border-b border-border-default"
        />
      ) : (
        <div className="w-full h-44 flex items-center justify-center bg-black/40 border-b border-[#302E2A] text-text-secondary text-xs tracking-[0.15em] uppercase opacity-50">
          No image yet
        </div>
      )}

      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-base font-semibold text-text-primary">{title}</h3>

        <p className="text-sm text-text-secondary leading-relaxed">{description}</p>

        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech) => (
              <span
                key={tech}
                style={{ border: "1px solid #302E2A", background: "rgba(255,255,255,0.02)", color: "#BEB7A8" }}
                className="px-2.5 py-0.5 rounded-full text-[0.7rem] font-medium transition-colors hover:text-[#E8DFC9] hover:border-[#E8DFC9]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {(githubUrl || liveUrl) && (
          <div className="flex gap-2 pt-3 border-t border-[#302E2A]">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-1.5 rounded-full text-xs font-medium text-center border border-border-accent text-text-secondary transition-colors duration-200 hover:text-text-primary"
              >
                GitHub
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-1.5 rounded-full text-xs font-semibold text-center bg-accent-primary text-text-on-accent border border-accent-primary transition-all duration-200 hover:-translate-y-0.5"
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
