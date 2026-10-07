import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!allValid) return;

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          gmail: form.email,
          message: form.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTouched({});
    } catch (err) {
      setErrorMsg(err.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const borderColor = (field) => {
    if (!touched[field]) return "border-[#302E2A]";
    return validate[field](form[field]) ? "border-error" : "border-[#302E2A]";
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
        className={`w-full rounded-lg border px-4 py-3 text-sm resize-none bg-black/20 text-text-primary outline-none transition-colors duration-200 ${borderColor(name)} focus:border-accent-primary focus:bg-black/40`}
      />
      {touched[name] && validate[name](form[name]) && (
        <p className="text-xs text-error">{validate[name](form[name])}</p>
      )}
    </div>
  );

  return (
    <section id="contact" className="px-6 py-20 md:py-28 bg-transparent border-t border-border-default">
      <div className="mx-auto max-w-6xl flex flex-col gap-14">

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
        <div className="animate-fade-up delay-100 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* Sidebar */}
          <aside 
            className="flex flex-col lg:w-64 flex-shrink-0"
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
              <span style={{ flex: 1, textAlign: "center", fontSize: 11, color: "#5a564e", letterSpacing: "0.08em", fontFamily: "monospace", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>~/connect</span>
            </div>
            
            <div className="p-6 flex flex-col gap-10">
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
  
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full self-start"
                style={{ border: "1px solid #302E2A", background: "rgba(255,255,255,0.02)" }}
              >
                <span className="w-2 h-2 rounded-full bg-success" />
                <span className="text-xs font-medium text-text-secondary">
                  Available for work
                </span>
              </div>
            </div>
          </aside>

          {/* Form / success */}
          <div className="flex-1">
            {submitted ? (
              <div 
                className="flex flex-col text-center"
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
                  <span style={{ flex: 1, textAlign: "center", fontSize: 11, color: "#5a564e", letterSpacing: "0.08em", fontFamily: "monospace", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>~/contact-success</span>
                </div>
                <div className="p-10 flex flex-col items-center gap-5">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl border border-[#302E2A] bg-[rgba(255,255,255,0.02)]">
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
                    className="px-7 py-2.5 rounded-full text-sm font-semibold border border-[#302E2A] text-text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:text-text-primary hover:border-text-primary bg-[rgba(255,255,255,0.02)]"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col"
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
                  <span style={{ flex: 1, textAlign: "center", fontSize: 11, color: "#5a564e", letterSpacing: "0.08em", fontFamily: "monospace", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>~/contact-form</span>
                </div>
                <div className="p-8 flex flex-col gap-6">
                  {Field({ label: "Name", name: "name" })}
                  {Field({ label: "Email", name: "email", type: "email" })}
                  {Field({ label: "Message", name: "message", as: "textarea", rows: 5 })}
  
                  <div className="pt-6 border-t border-[#302E2A] mt-2">
                    {errorMsg && (
                      <p className="text-error text-sm font-medium mb-4">{errorMsg}</p>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 rounded-full font-semibold text-sm border border-accent-primary bg-accent-primary text-text-on-accent transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Message →"}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
