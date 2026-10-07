import photo from "../assets/images/photo.jpeg";

export default function About() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js",
    "Express", "MongoDB", "Tailwind CSS", "Git",
    "REST APIs", "PostgreSQL", "Docker", "Figma",
  ];

  return (
    <section id="about" className="px-6 py-20 md:py-28 bg-transparent border-t border-border-default">
      <div className="mx-auto max-w-6xl flex flex-col gap-14">

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
        <div className="animate-fade-up delay-100 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* Profile column */}
          <div
            className="flex flex-col lg:w-72 xl:w-80 flex-shrink-0"
            style={{
              background: "linear-gradient(145deg, #141412 0%, #1a1916 100%)",
              border: "1px solid #302E2A",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow:
                "0 0 0 1px rgba(232,223,201,0.04), 0 24px 48px rgba(0,0,0,0.5)",
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
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#FF5F57",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#FFBD2E",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#28C840",
                  display: "inline-block",
                }}
              />
            </div>

            <div className="flex flex-col gap-5 p-5">
              {/* Profile Photo - Place your image in the public folder (e.g., public/profile.jpg) and update the src below */}
              <div className="w-full aspect-square rounded-2xl overflow-hidden border border-border-default bg-bg-card relative flex items-center justify-center group">
                {/* Fallback placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-text-secondary">
                  <span className="text-5xl">🧑‍💻</span>
                  <span className="text-sm">Add photo in public/</span>
                </div>
                {/* Actual image */}
                <img 
                  src={photo} 
                  alt="Arun CB" 
                  className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => e.target.style.display = 'none'}
                />
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

              {/* Resume Download - Place your CV in the public folder and update the href below */}
              <a
                href="/Arun_CV.pdf"
                download="Arun_CB_CV.pdf"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-accent-primary bg-accent-primary text-text-on-accent text-sm font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </a>
            </div>
          </div>

          {/* Bio & Skills (Card Theme) */}
          <div className="flex flex-col gap-8 flex-1 lg:pl-4">

            {/* Bio Card */}
            <div
              style={{
                background: "linear-gradient(145deg, #141412 0%, #1a1916 100%)",
                border: "1px solid #302E2A",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 0 0 1px rgba(232,223,201,0.04), 0 24px 48px rgba(0,0,0,0.5)",
              }}
              className="flex flex-col animate-fade-up delay-200"
            >
              {/* Window chrome */}
              <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "10px 14px", borderBottom: "1px solid #302E2A", background: "rgba(255,255,255,0.02)" }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57", display: "inline-block" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E", display: "inline-block" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840", display: "inline-block" }} />
                <span style={{ flex: 1, textAlign: "center", fontSize: 11, color: "#5a564e", letterSpacing: "0.08em", fontFamily: "monospace", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>~/about-me</span>
              </div>
              <div className="p-6 md:p-8 flex flex-col gap-6">
                <h3 className="text-3xl md:text-4xl font-semibold text-text-primary tracking-tight">Arun CB</h3>
                <div className="flex flex-col gap-4">
                  <p className="text-base md:text-lg leading-[1.8] max-w-2xl text-text-secondary">
                    I'm a full-stack developer with a passion for building elegant,
                    performant web applications. I enjoy turning complex problems into
                    simple, intuitive interfaces that users genuinely love to use.
                  </p>
                  <p className="text-base md:text-lg leading-[1.8] max-w-2xl text-text-secondary">
                    With experience spanning the entire web stack — from crafting
                    responsive UIs to architecting scalable REST APIs — I bring
                    ideas to life from concept to deployment. I'm always learning,
                    always building, always improving.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Card */}
            <div
              style={{
                background: "linear-gradient(145deg, #141412 0%, #1a1916 100%)",
                border: "1px solid #302E2A",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 0 0 1px rgba(232,223,201,0.04), 0 24px 48px rgba(0,0,0,0.5)",
              }}
              className="flex flex-col animate-fade-up delay-300"
            >
              {/* Window chrome */}
              <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "10px 14px", borderBottom: "1px solid #302E2A", background: "rgba(255,255,255,0.02)" }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57", display: "inline-block" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E", display: "inline-block" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840", display: "inline-block" }} />
                <span style={{ flex: 1, textAlign: "center", fontSize: 11, color: "#5a564e", letterSpacing: "0.08em", fontFamily: "monospace", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>~/skills</span>
              </div>
              <div className="p-6 md:p-8 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <span className="block w-4 h-px bg-accent-secondary" />
                  <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
                    Skills &amp; Technologies
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      style={{ border: "1px solid #302E2A", background: "rgba(255,255,255,0.02)", color: "#BEB7A8" }}
                      className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:text-[#E8DFC9] hover:border-[#E8DFC9] hover:bg-[rgba(255,255,255,0.05)] cursor-default shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
