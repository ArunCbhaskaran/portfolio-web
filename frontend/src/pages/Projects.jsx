import project from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 md:py-32 bg-bg-main border-t border-border-default">
      <div className="mx-auto max-w-6xl flex flex-col gap-16">

        {/* Header */}
        <div className="animate-fade-up flex flex-col gap-3 border-b border-border-default pb-10">
          <div className="flex items-center gap-3">
            <span className="block w-6 h-px bg-accent-secondary" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-text-secondary">
              What I've built
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-text-primary">
            Projects
          </h2>
        </div>

        {/* Cards */}
        <div className="animate-fade-up delay-100 flex flex-wrap gap-8">
          <ProjectCard project={project} />
        </div>

      </div>
    </section>
  );
}
