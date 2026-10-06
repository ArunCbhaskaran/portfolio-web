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

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleBlur = (e) =>
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));

  const allValid =
    !validate.name(form.name) &&
    !validate.email(form.email) &&
    !validate.message(form.message);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!allValid) return;
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTouched({});
  };

  const borderColor = (field) => {
    if (!touched[field]) return "border-input-border";
    return validate[field](form[field]) ? "border-error" : "border-border-accent";
  };

  const Field = ({ label, name, type = "text", as: As = "input", rows }) => (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-xs font-semibold uppercase tracking-[0.15em] text-text-secondary"
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
        className={`w-full rounded-lg border px-4 py-3 text-sm resize-none bg-input-bg text-text-primary outline-none transition-colors duration-200 ${borderColor(name)}`}
      />
      {touched[name] && validate[name](form[name]) && (
        <p className="text-xs text-error">{validate[name](form[name])}</p>
      )}
    </div>
  );

  return (
    <section id="contact" className="px-6 pt-24 pb-32 md:pt-32 bg-bg-main border-t border-border-default">
      <div className="mx-auto max-w-6xl flex flex-col gap-16">

        {/* Page header */}
        <div className="animate-fade-up flex flex-col gap-3 border-b border-border-default pb-10">
          <div className="flex items-center gap-3">
            <span className="block w-6 h-px bg-accent-secondary" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-text-secondary">
              Let's talk
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-text-primary">
            Contact
          </h2>
          <p className="text-sm max-w-lg leading-relaxed text-text-secondary">
            Have a project in mind, or just want to say hello? Fill in the form
            or reach out directly — I read every message.
          </p>
        </div>

        {/* Body */}
        <div className="animate-fade-up delay-100 flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">

          {/* Sidebar */}
          <aside className="flex flex-col gap-10 lg:w-64 flex-shrink-0">

            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
                Email
              </span>
              <a
                href="mailto:you@example.com"
                className="text-sm font-medium text-accent-secondary transition-colors duration-200 hover:text-text-primary underline underline-offset-4 decoration-border-default"
              >
                you@example.com
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
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
                  className="text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary"
                >
                  {label} →
                </a>
              ))}
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-default bg-bg-card self-start">
              <span className="w-2 h-2 rounded-full bg-success" />
              <span className="text-xs font-medium text-text-secondary">
                Available for work
              </span>
            </div>

          </aside>

          {/* Form / success */}
          <div className="flex-1">
            {submitted ? (
              <div className="rounded-2xl p-10 text-center border border-border-default bg-bg-card flex flex-col items-center gap-5">
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl border border-border-default bg-bg-main">
                  ✓
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-2xl font-bold text-text-primary">Message sent.</p>
                  <p className="text-sm text-text-secondary">
                    Thanks for reaching out — I'll get back to you soon.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-7 py-2.5 rounded-full text-sm font-semibold border border-border-accent text-text-secondary transition-all duration-200 hover:-translate-y-0.5"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-6 rounded-2xl p-8 border border-border-default bg-bg-card"
              >
                <Field label="Name"    name="name" />
                <Field label="Email"   name="email" type="email" />
                <Field label="Message" name="message" as="textarea" rows={5} />

                <div className="pt-2 border-t border-border-default">
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-full font-semibold text-sm border border-accent-primary bg-accent-primary text-text-on-accent transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Send Message →
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
