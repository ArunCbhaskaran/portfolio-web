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

      <div className="mx-auto max-w-6xl w-full pt-8 pb-20 md:pt-10 md:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

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
              { label: "GitHub",   url: "https://github.com/ArunCbhaskaran" },
              { label: "LinkedIn", url: "https://linkedin.com/in/aruncbhaskaran" },
              { label: "Gmail",    url: "mailto:aruncbhaskaran@gmail.com" },
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

        {/* Identity card — terminal style */}
        <div className="animate-fade-up delay-300 hidden lg:flex flex-col gap-4 justify-between">

          {/* Terminal window */}
          <div
            style={{
              background: "linear-gradient(145deg, #141412 0%, #1a1916 100%)",
              border: "1px solid #302E2A",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 0 0 1px rgba(232,223,201,0.04), 0 24px 48px rgba(0,0,0,0.5)",
            }}
          >
            {/* Window chrome */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "10px 14px",
                borderBottom: "1px solid #302E2A",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57", display: "inline-block" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E", display: "inline-block" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840", display: "inline-block" }} />
              <span style={{ flex: 1, textAlign: "center", fontSize: 11, color: "#5a564e", letterSpacing: "0.08em", fontFamily: "monospace" }}>~/arun-cb/portfolio</span>
            </div>

            {/* Terminal body */}
            <div style={{ padding: "20px 22px 24px", fontFamily: "monospace", fontSize: 13, lineHeight: "1.85" }}>
              <p style={{ color: "#5a564e" }}>{"# dev identity"}</p>

              <p style={{ marginTop: 6 }}>
                <span style={{ color: "#7BAF7B" }}>const</span>
                <span style={{ color: "#E8DFC9" }}> developer</span>
                <span style={{ color: "#BEB7A8" }}>{" = {"}</span>
              </p>

              <div style={{ paddingLeft: 20 }}>
                <p><span style={{ color: "#BEB7A8" }}>name:</span> <span style={{ color: "#E8C87A" }}>"Arun CB"</span>,</p>
                <p><span style={{ color: "#BEB7A8" }}>role:</span> <span style={{ color: "#E8C87A" }}>"Full-Stack Developer"</span>,</p>
                <p><span style={{ color: "#BEB7A8" }}>based:</span> <span style={{ color: "#E8C87A" }}>"India 🇮🇳"</span>,</p>
                <p><span style={{ color: "#BEB7A8" }}>exp:</span> <span style={{ color: "#a88de8" }}>"1+ year"</span>,</p>
                <p><span style={{ color: "#BEB7A8" }}>projects:</span> <span style={{ color: "#a88de8" }}>6</span>,</p>
                <p><span style={{ color: "#BEB7A8" }}>openTo:</span> <span style={{ color: "#7BAF7B" }}>true</span>,</p>
              </div>

              <p style={{ color: "#BEB7A8" }}>{'};'}</p>

              <p style={{ marginTop: 12, color: "#5a564e" }}># run</p>
              <p>
                <span style={{ color: "#7BAF7B" }}>$</span>
                <span style={{ color: "#E8DFC9" }}> deploy</span>
                <span style={{ color: "#BEB7A8" }}>(developer)</span>
                <span
                  style={{
                    display: "inline-block",
                    width: 7,
                    height: 14,
                    background: "#E8DFC9",
                    marginLeft: 4,
                    verticalAlign: "middle",
                    animation: "blink 1.1s step-end infinite",
                  }}
                />
              </p>
            </div>
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
