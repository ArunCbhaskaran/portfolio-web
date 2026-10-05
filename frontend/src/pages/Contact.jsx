// ============================================================
//  src/pages/Contact.jsx
//  Editorial contact page — black & cream aesthetic.
//  Two-column: sidebar + form card.
// ============================================================

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = {
    name:    (v) => v.trim().length < 2 ? "Name must be at least 2 characters." : "",
    email:   (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Enter a valid email address.",
    message: (v) => v.trim().length < 10 ? "Message must be at least 10 characters." : "",
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const allValid =
    !validate.name(form.name) &&
    !validate.email(form.email) &&
    !validate.message(form.message);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!allValid) return;
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTouched({});
  };

  const fieldBorder = (field) => {
    if (!touched[field]) return "var(--input-border)";
    return validate[field](form[field]) ? "#a85252" : "var(--border-accent)";
  };

  const inputStyle = (field) => ({
    backgroundColor: "var(--input-bg)",
    borderColor: fieldBorder(field),
    color: "var(--text-primary)",
    outline: "none",
    transition: "border-color 0.2s",
  });

  const Field = ({ label, name, type = "text", as: As = "input", rows }) => (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-xs font-semibold uppercase tracking-[0.15em]"
        style={{ color: "var(--text-secondary)" }}
      >
        {label}
      </label>

      <As
        id={name}
        name={name}
        type={type}
        rows={rows}
        value={form[name]}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={
          name === "name"    ? "Your full name" :
          name === "email"   ? "you@example.com" :
                               "Write your message here…"
        }
        className="w-full rounded-lg border px-4 py-3 text-sm resize-none transition-colors duration-200"
        style={inputStyle(name)}
      />

      {touched[name] && validate[name](form[name]) && (
        <p className="text-xs" style={{ color: "#a85252" }}>
          {validate[name](form[name])}
        </p>
      )}
    </div>
  );

  return (
    <main
      className="min-h-screen px-6 py-24 md:py-32"
      style={{ background: "var(--bg-main)" }}
    >
      <div className="mx-auto max-w-6xl flex flex-col gap-16">

        {/* ── Page header ──────────────────────────────────── */}
        <div className="animate-fade-up flex flex-col gap-3 border-b pb-10" style={{ borderColor: "var(--border-default)" }}>
          <div className="flex items-center gap-3">
            <span className="block w-6 h-px" style={{ background: "var(--accent-secondary)" }} />
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: "var(--text-secondary)" }}
            >
              Let's talk
            </span>
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Contact
          </h1>
          <p
            className="text-sm max-w-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Have a project in mind, or just want to say hello? Fill in the form
            or reach out directly — I read every message.
          </p>
        </div>

        {/* ── Body: sidebar + form ─────────────────────────── */}
        <div className="animate-fade-up delay-100 flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">

          {/* ── Sidebar ──────────────────────────────────────── */}
          <aside className="flex flex-col gap-10 lg:w-64 flex-shrink-0">

            {/* Direct email */}
            <div className="flex flex-col gap-2">
              <span
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: "var(--text-secondary)" }}
              >
                Email
              </span>
              <a
                href="mailto:you@example.com"
                className="text-sm font-medium transition-colors duration-200 hover:text-[var(--text-primary)] underline underline-offset-4"
                style={{
                  color: "var(--accent-secondary)",
                  textDecorationColor: "var(--border-default)",
                }}
              >
                you@example.com
              </a>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-3">
              <span
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: "var(--text-secondary)" }}
              >
                Social
              </span>
              {[
                { label: "GitHub",   url: "#" },
                { label: "LinkedIn", url: "#" },
                { label: "Twitter",  url: "#" },
              ].map(({ label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium transition-colors duration-200 hover:text-[var(--text-primary)]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {label} →
                </a>
              ))}
            </div>

            {/* Availability badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border self-start"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-default)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#7BAF7B" }}
              />
              <span
                className="text-xs font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                Available for work
              </span>
            </div>

          </aside>

          {/* ── Form / success ───────────────────────────────── */}
          <div className="flex-1">
            {submitted ? (
              <div
                className="rounded-2xl p-10 text-center border flex flex-col items-center gap-5"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-default)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl border"
                  style={{
                    backgroundColor: "var(--bg-main)",
                    borderColor: "var(--border-default)",
                  }}
                >
                  ✓
                </div>
                <div className="flex flex-col gap-2">
                  <p
                    className="text-2xl font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Message sent.
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Thanks for reaching out — I'll get back to you soon.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-7 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    borderColor: "var(--border-accent)",
                    color: "var(--text-secondary)",
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-6 rounded-2xl p-8 border"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-default)",
                }}
              >
                <Field label="Name"    name="name" />
                <Field label="Email"   name="email" type="email" />
                <Field label="Message" name="message" as="textarea" rows={5} />

                <div
                  className="pt-2"
                  style={{ borderTop: "1px solid var(--border-default)" }}
                >
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-full font-semibold text-sm border transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{
                      backgroundColor: "var(--accent-primary)",
                      color: "var(--text-on-accent)",
                      borderColor: "var(--accent-primary)",
                    }}
                  >
                    Send Message →
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </main>
  );
}
