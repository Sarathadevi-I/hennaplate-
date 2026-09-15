import { useState } from "react";
import logo from "../assets/logo.png";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#packages", label: "Packages" },
  { href: "#testimonials", label: "Testimonials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-10 py-6">
        <a href="#top" className="flex items-center gap-3 focus-ring rounded">
          <span className="h-12 w-12 rounded-full bg-white overflow-hidden inline-block">
            <img
              src={logo}
              alt="Henna Palettes logo"
              className="h-full w-full object-cover scale-125"
            />
          </span>
          <span className="font-display text-lg text-pastel tracking-wide hidden sm:block">
            Henna Palettes
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-10 font-body text-[13px] tracking-wide text-pastel/85">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative pb-1 hover:text-pastel transition-colors focus-ring rounded after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-pastel hover:after:w-full after:transition-all"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-block font-body text-[13px] text-pastel border-b border-pastel/60 pb-0.5 hover:border-pastel focus-ring"
        >
          Book now
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-pastel focus-ring rounded p-1"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="lg:hidden flex flex-col items-center gap-5 pb-8 pt-2 font-body text-pastel bg-henna-900/95 backdrop-blur">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="focus-ring rounded">
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-block border-b border-pastel/60 pb-0.5 focus-ring"
            >
              Book now
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}