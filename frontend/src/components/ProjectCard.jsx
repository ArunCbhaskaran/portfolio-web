export default function ProjectCard({ project }) {
  const { title, description, image, technologies, githubUrl, liveUrl } = project;

  return (
    <div className="w-80 rounded-2xl overflow-hidden border border-border-default bg-bg-card transition-all duration-300 hover:-translate-y-2 hover:border-border-accent cursor-default">
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-44 object-cover block border-b border-border-default"
        />
      ) : (
        <div className="w-full h-44 flex items-center justify-center bg-bg-main border-b border-border-default text-text-secondary text-xs tracking-[0.15em] uppercase opacity-50">
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
                className="px-2.5 py-0.5 rounded-full text-[0.7rem] font-medium border border-border-default bg-badge-bg text-badge-text"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {(githubUrl || liveUrl) && (
          <div className="flex gap-2 pt-3 border-t border-border-default">
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
