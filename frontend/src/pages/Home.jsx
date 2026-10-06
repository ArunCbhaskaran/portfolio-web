const scrollTo = (e, href) => {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 relative bg-bg-main"
    >
      <div className="absolute left-[calc(50%-1px)] top-0 bottom-0 hidden lg:block pointer-events-none w-px bg-border-default" />
      <div className="absolute top-0 left-0 right-0 pointer-events-none h-px bg-border-default opacity-50" />

      <div className="mx-auto max-w-6xl w-full py-28 md:py-36 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Hero text */}
        <div className="flex flex-col gap-7">

          <div className="animate-fade-up flex items-center gap-3">
            <span className="block w-8 h-px bg-accent-secondary" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-text-secondary">
              Full-Stack Developer
            </span>
          </div>

          <h1 className="animate-fade-up delay-100 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-text-primary">
            Crafting{" "}
            <em className="not-italic font-editorial text-accent-primary">digital</em>
            <br />
            experiences
            <br />
            <span className="text-text-secondary">that matter.</span>
          </h1>

          <p className="animate-fade-up delay-200 text-base md:text-lg leading-relaxed max-w-md text-text-secondary">
            I'm{" "}
            <span className="text-text-primary font-semibold">Arun CB</span>
            {" "}— a full-stack developer who designs and builds fast,
            accessible web applications with modern tools and a sharp eye for detail.
          </p>

          <div className="animate-fade-up delay-300 flex flex-wrap gap-4 mt-1">
            <a
              href="#projects"
              onClick={(e) => scrollTo(e, "#projects")}
              className="px-7 py-3 rounded-full font-semibold text-sm tracking-wide border border-accent-primary bg-accent-primary text-text-on-accent transition-all duration-200 hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "#contact")}
              className="px-7 py-3 rounded-full font-semibold text-sm tracking-wide border border-border-accent text-text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:text-text-primary hover:border-text-primary"
            >
              Get in touch
            </a>
          </div>

          <div className="animate-fade-up delay-400 flex gap-7 mt-1">
            {[
              { label: "GitHub",   url: "https://github.com/ArunCbhaskaran"},
              { label: "LinkedIn", url: "https://linkedin.com/in/aruncbhaskaran" },
              { label: "Gmail",  url: "mailto:[aruncbhaskaran@gmail.com]"  },
            ].map(({ label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium uppercase tracking-[0.15em] text-text-secondary transition-colors duration-200 hover:text-text-primary"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Identity card */}
        <div className="animate-fade-up delay-300 hidden lg:flex flex-col gap-6">
          <div className="rounded-2xl p-8 border border-border-default bg-bg-card flex flex-col gap-5">
            <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl border border-border-default bg-bg-main">
              🧑‍💻
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xl font-semibold text-text-primary">Arun CB</p>
              <p className="text-sm text-text-secondary">Full-Stack Developer · India</p>
            </div>
            <div className="h-px bg-border-default" />
            <div className="grid grid-cols-3 gap-4">
              {[
                { num: "1+",   label: "Years exp." },
                { num: "6+",  label: "Projects" },

              ].map(({ num, label }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span className="text-2xl font-bold text-text-primary">{num}</span>
                  <span className="text-xs uppercase tracking-wider text-text-secondary">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {["React", "Node.js", "TypeScript", "MongoDB", "Figma", "Docker"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full text-xs font-medium border border-border-default bg-badge-bg text-badge-text transition-all duration-200 hover:-translate-y-0.5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none h-px bg-border-default opacity-50" />

      {/* Scroll hint */}
      <a
        href="#about"
        onClick={(e) => scrollTo(e, "#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up delay-500 text-text-secondary hover:text-text-primary transition-colors duration-200"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <span className="block w-px h-8 bg-border-accent" />
      </a>

    </section>
  );
}
