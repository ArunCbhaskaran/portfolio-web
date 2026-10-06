import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track which section is in view
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const linkClass = (href) => {
    const isActive = activeSection === href.slice(1);
    return [
      "relative py-1 text-sm font-medium tracking-wide transition-all duration-200",
      "after:absolute after:left-0 after:bottom-0",
      "after:h-px after:w-0 after:rounded-full",
      "after:transition-all after:duration-300",
      isActive
        ? "text-text-primary after:w-full after:bg-text-primary"
        : "text-text-secondary hover:text-text-primary after:bg-accent-secondary hover:after:w-full",
    ].join(" ");
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b bg-bg-nav border-border-default">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:py-5">

        <a
          href="#home"
          onClick={(e) => scrollTo(e, "#home")}
          className="flex items-baseline gap-0.5 text-lg font-semibold tracking-tight text-text-primary"
        >
          Arun
          <span className="text-base font-medium text-accent-secondary transition-colors duration-200">
            .dev
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => scrollTo(e, href)}
                className={linkClass(href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire me — desktop */}
        <a
          href="#contact"
          onClick={(e) => scrollTo(e, "#contact")}
          className="hidden md:inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full border border-border-accent text-accent-primary transition-all duration-200 hover:bg-accent-primary hover:text-text-on-accent hover:border-accent-primary"
        >
          Hire me
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span
            className="block h-px w-6 rounded bg-text-primary transition-all duration-300 origin-center"
            style={{ transform: mobileOpen ? "translateY(6px) rotate(45deg)" : "none" }}
          />
          <span
            className="block h-px w-6 rounded bg-text-primary transition-all duration-300"
            style={{ opacity: mobileOpen ? 0 : 1 }}
          />
          <span
            className="block h-px w-6 rounded bg-text-primary transition-all duration-300 origin-center"
            style={{ transform: mobileOpen ? "translateY(-6px) rotate(-45deg)" : "none" }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <ul className="md:hidden flex flex-col border-t bg-bg-nav border-border-default">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => scrollTo(e, href)}
                className={[
                  "block px-6 py-4 text-sm font-medium border-b border-border-default transition-colors duration-200",
                  activeSection === href.slice(1)
                    ? "text-text-primary"
                    : "text-text-secondary hover:text-text-primary",
                ].join(" ")}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "#contact")}
              className="block px-6 py-4 text-sm font-semibold tracking-widest uppercase text-accent-primary"
            >
              Hire me
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
