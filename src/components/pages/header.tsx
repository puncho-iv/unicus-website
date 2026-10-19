
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import PrimaryButton from "../buttons/primary-button";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Solutions", href: "#solutions" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="relative z-30">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <a
          href="#home"
          aria-label="Unicus home"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
        >
          <img
            src="/logo.png"
            alt="Unicus"
            className="min-h-[120px] w-[140px]  sm:h-10"
          />
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <PrimaryButton
            href="#contact"
            imageSrc={<ArrowRight size={16} color="black" />}
          >
            Let's Talk
          </PrimaryButton>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-lg border border-white/10 p-2 text-white transition hover:bg-white/5 md:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-4 right-4 top-full rounded-2xl border border-white/10 bg-slate-900 p-4 shadow-2xl md:hidden"
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm text-slate-200 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-3 border-t border-white/10 pt-4">
            <PrimaryButton
              href="#contact"
              imageSrc={<ArrowRight size={16} color="black" />}
              onClick={closeMenu}
            >
              Let's Talk
            </PrimaryButton>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
