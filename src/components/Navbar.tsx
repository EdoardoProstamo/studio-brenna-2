import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Lo Studio", href: "#studio" },
  { label: "Competenze", href: "#competenze" },
  { label: "Il Team", href: "#team" },
  { label: "Metodo", href: "#metodo" },
  { label: "Contatti", href: "#contatti" },
  { label: "Appuntamenti", href: "#appuntamenti" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-navy-light">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        <a href="#" className="flex flex-col leading-tight">
          <span className="font-serif text-lg md:text-xl tracking-wide text-primary-foreground">
            Avv. Marco Brenna
          </span>
          <span className="text-xs tracking-[0.25em] uppercase text-gold">
            Studio Legale
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm tracking-wide uppercase text-primary-foreground/80 hover:text-gold transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary border-t border-navy-light">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm tracking-wide uppercase text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
