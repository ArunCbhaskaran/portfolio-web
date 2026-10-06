export default function About() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js",
    "Express", "MongoDB", "Tailwind CSS", "Git",
    "REST APIs", "PostgreSQL", "Docker", "Figma",
  ];

  return (
    <section id="about" className="px-6 py-24 md:py-32 bg-bg-main border-t border-border-default">
      <div className="mx-auto max-w-6xl flex flex-col gap-20">

        {/* Page header */}
        <div className="animate-fade-up flex flex-col gap-3 border-b border-border-default pb-10">
          <div className="flex items-center gap-3">
            <span className="block w-6 h-px bg-accent-secondary" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-text-secondary">
              Get to know me
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-text-primary">
            About{" "}
            <em className="not-italic font-editorial text-accent-primary">Me</em>
          </h2>
        </div>

        {/* Two-column: profile + bio */}
        <div className="animate-fade-up delay-100 flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">

          {/* Profile column */}
          <div className="flex flex-col gap-5 lg:w-72 flex-shrink-0">
            <div className="w-full aspect-square rounded-2xl flex flex-col items-center justify-center gap-3 border border-border-default bg-bg-card text-text-secondary">
              <span className="text-5xl">🧑‍💻</span>
              <span className="text-sm text-text-secondary">Photo coming soon</span>
            </div>

            <div className="rounded-xl border border-border-default bg-bg-card px-5 py-4 flex flex-col gap-4">
              {[
                { label: "Location",     value: "India" },
                { label: "Availability", value: "Open to work" },
                { label: "Focus",        value: "Full-Stack Dev" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-widest font-medium text-text-secondary">
                    {label}
                  </span>
                  <span className="text-sm font-medium text-text-primary">{value}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-accent-primary bg-accent-primary text-text-on-accent text-sm font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5"
            >
              Download CV
            </a>
          </div>

          {/* Bio & skills */}
          <div className="flex flex-col gap-10 flex-1">

            <div className="flex flex-col gap-5">
              <h3 className="text-3xl font-semibold text-text-primary">Arun CB</h3>
              <p className="text-base leading-[1.85] max-w-2xl text-text-secondary">
                I'm a full-stack developer with a passion for building elegant,
                performant web applications. I enjoy turning complex problems into
                simple, intuitive interfaces that users genuinely love to use.
              </p>
              <p className="text-base leading-[1.85] max-w-2xl text-text-secondary">
                With experience spanning the entire web stack — from crafting
                responsive UIs to architecting scalable REST APIs — I bring
                ideas to life from concept to deployment. I'm always learning,
                always building, always improving.
              </p>
            </div>

            <div className="h-px bg-border-default" />

            {/* Skills */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="block w-4 h-px bg-accent-secondary" />
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
                  Skills &amp; Technologies
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-medium border border-border-default bg-badge-bg text-badge-text transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="h-px bg-border-default" />

            {/* Experience */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="block w-4 h-px bg-accent-secondary" />
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
                  Experience
                </h4>
              </div>
              <div className="flex flex-col gap-6">
                {[
                  { role: "Full-Stack Developer", company: "Freelance",   period: "2023 – Present" },
                  { role: "Frontend Developer",   company: "Startup XYZ", period: "2022 – 2023" },
                  { role: "React Intern",         company: "Agency ABC",  period: "2021 – 2022" },
                ].map(({ role, company, period }) => (
                  <div key={role} className="flex flex-col gap-0.5">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-sm font-semibold text-text-primary">{role}</span>
                      <span className="text-xs shrink-0 text-text-secondary">{period}</span>
                    </div>
                    <span className="text-xs text-text-secondary">{company}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
