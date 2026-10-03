"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { person } from "@/data/content";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#hobbies", label: "Hobbies" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 flex items-center justify-between gap-4 px-4 py-3.5 transition-[background,box-shadow,backdrop-filter] duration-300 md:px-8 ${
          solid
            ? "bg-paper/90 shadow-[0_1px_0_var(--line)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <Link
          href="#top"
          className={`font-display text-lg font-semibold tracking-tight no-underline transition-colors md:text-xl ${
            solid ? "text-lake" : "text-white"
          }`}
        >
          {person.name}
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-5">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`text-xs font-medium tracking-[0.04em] uppercase no-underline transition-colors hover:text-amber ${
                    solid ? "text-ink-soft" : "text-white/80"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-[0.35rem] border lg:hidden ${
            solid
              ? "border-line bg-white text-lake"
              : "border-white/35 bg-lake-deep/25 text-white"
          }`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-0.5 w-4 bg-current">
            <span
              className={`absolute left-0 h-0.5 w-4 bg-current transition-transform ${
                open ? "top-0 rotate-45" : "-top-1.5"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-4 bg-current transition-transform ${
                open ? "top-0 -rotate-45" : "top-1.5"
              }`}
            />
          </span>
        </button>
      </header>

      <div
        id="mobile-nav"
        className={`fixed inset-0 z-[35] bg-lake-deep/40 transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      >
        <nav
          className={`ml-auto h-full w-[min(18rem,84vw)] bg-paper px-6 pt-24 shadow-[var(--shadow-soft)] transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <ul className="grid gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block border-b border-line py-3 font-display text-xl text-lake no-underline"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
