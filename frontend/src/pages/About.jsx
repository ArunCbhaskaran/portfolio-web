// ============================================================
//  src/pages/About.jsx
//  Editorial about page — black & cream aesthetic.
//  Clean grid layout: profile column + bio column.
// ============================================================

export default function About() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js",
    "Express", "MongoDB", "Tailwind CSS", "Git",
    "REST APIs", "PostgreSQL", "Docker", "Figma",
  ];

  return (
    <main
      className="min-h-screen px-6 py-24 md:py-32"
      style={{ background: "var(--bg-main)" }}
    >
      <div className="mx-auto max-w-6xl flex flex-col gap-20">

        {/* ── Page header ────────────────────────────────────── */}
        <div className="animate-fade-up flex flex-col gap-3 border-b pb-10" style={{ borderColor: "var(--border-default)" }}>
          <div className="flex items-center gap-3">
            <span className="block w-6 h-px" style={{ background: "var(--accent-secondary)" }} />
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: "var(--text-secondary)" }}
            >
              Get to know me
            </span>
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            About{" "}
            <em className="not-italic font-editorial" style={{ color: "var(--accent-primary)" }}>
              Me
            </em>
          </h1>
        </div>

        {/* ── Two-column: profile + bio ─────────────────────── */}
        <div className="animate-fade-up delay-100 flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">

          {/* ── Left column — profile card ─────────────────── */}
          <div className="flex flex-col gap-5 lg:w-72 flex-shrink-0">

            {/* Avatar */}
            <div
              className="w-full aspect-square rounded-2xl flex flex-col items-center justify-center gap-3 border"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-default)",
                color: "var(--text-secondary)",
              }}
            >
              {/* ← Replace with: <img src="/your-photo.jpg" alt="Arun CB" className="w-full h-full object-cover rounded-2xl" /> */}
              <span className="text-5xl">🧑‍💻</span>
              <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Add your photo here
              </span>
            </div>

            {/* Quick facts */}
            <div
              className="rounded-xl border px-5 py-4 flex flex-col gap-4"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-default)",
              }}
            >
              {[
                { label: "Location",    value: "India" },
                { label: "Availability", value: "Open to work" },
                { label: "Focus",       value: "Full-Stack Dev" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center">
                  <span
                    className="text-xs uppercase tracking-widest font-medium"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {label}
                  </span>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Download CV */}
            <a
              href="#"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full border text-sm font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: "var(--accent-primary)",
                color: "var(--text-on-accent)",
                borderColor: "var(--accent-primary)",
              }}
            >
              Download CV
            </a>
          </div>

          {/* ── Right column — bio & skills ────────────────── */}
          <div className="flex flex-col gap-10 flex-1">

            {/* Name + bio */}
            <div className="flex flex-col gap-5">
              <h2
                className="text-3xl font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Arun CB
              </h2>

              <p
                className="text-base leading-[1.85] max-w-2xl"
                style={{ color: "var(--text-secondary)" }}
              >
                I'm a full-stack developer with a passion for building elegant,
                performant web applications. I enjoy turning complex problems into
                simple, intuitive interfaces that users genuinely love to use.
              </p>

              <p
                className="text-base leading-[1.85] max-w-2xl"
                style={{ color: "var(--text-secondary)" }}
              >
                With experience spanning the entire web stack — from crafting
                responsive UIs to architecting scalable REST APIs — I bring
                ideas to life from concept to deployment. I'm always learning,
                always building, always improving.
              </p>
            </div>

            {/* Divider */}
            <div style={{ height: "1px", background: "var(--border-default)" }} />

            {/* Skills section */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="block w-4 h-px" style={{ background: "var(--accent-secondary)" }} />
                <h3
                  className="text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Skills &amp; Technologies
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                    style={{
                      backgroundColor: "var(--badge-bg)",
                      color: "var(--badge-text)",
                      borderColor: "var(--border-default)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: "1px", background: "var(--border-default)" }} />

            {/* Experience timeline — minimal */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="block w-4 h-px" style={{ background: "var(--accent-secondary)" }} />
                <h3
                  className="text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Experience
                </h3>
              </div>

              <div className="flex flex-col gap-6">
                {[
                  { role: "Full-Stack Developer",  company: "Freelance",    period: "2023 – Present" },
                  { role: "Frontend Developer",    company: "Startup XYZ",  period: "2022 – 2023"   },
                  { role: "React Intern",          company: "Agency ABC",   period: "2021 – 2022"   },
                ].map(({ role, company, period }) => (
                  <div key={role} className="flex flex-col gap-0.5">
                    <div className="flex items-baseline justify-between gap-4">
                      <span
                        className="text-sm font-semibold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {role}
                      </span>
                      <span
                        className="text-xs shrink-0"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {period}
                      </span>
                    </div>
                    <span
                      className="text-xs"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {company}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}
