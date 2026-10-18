import { ArrowRight, ArrowUpRight, Layers3, Menu, X } from "lucide-react";
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

  return (
    <header className="relative z-30">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-500 text-white">
            <Layers3 size={20} />
          </span>
          <span className="text-xl font-bold tracking-tight text-white">
            Unicus<span className="text-red-400">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <PrimaryButton imageSrc={<ArrowRight color="black" />} href="#contact">Let's Talk</PrimaryButton>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/10 p-2 text-white md:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="absolute left-4 right-4 top-full rounded-2xl border border-white/10 bg-slate-900 p-4 shadow-2xl md:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm text-slate-200 hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 block rounded-xl bg-red-500 px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Let's Talk
          </a>
        </div>
      )}
    </header>
  );
}