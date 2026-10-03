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

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-4 px-4 py-3.5 transition-[background,box-shadow,backdrop-filter] duration-300 md:px-8 ${
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
          onClick={() => setOpen(false)}
        >
          {person.name}
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-3 lg:gap-5">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`text-[0.7rem] font-medium tracking-[0.04em] uppercase no-underline transition-colors hover:text-amber lg:text-xs ${
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
          className={`relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-[0.35rem] border md:hidden ${
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
          <span aria-hidden="true" className="relative flex h-3.5 w-4 flex-col justify-between">
            <span
              className={`block h-0.5 w-full origin-center bg-current transition-transform duration-200 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-full origin-center bg-current transition-transform duration-200 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </header>

      {open ? (
        <button
          type="button"
          aria-label="Close menu overlay"
          className="fixed inset-0 z-40 bg-lake-deep/45 md:hidden"
          onClick={() => setOpen(false)}
        />
      ) : null}

      <nav
        id="mobile-nav"
        aria-hidden={!open}
        className={`fixed top-0 right-0 z-40 flex h-full w-[min(18rem,84vw)] flex-col bg-paper px-6 pt-24 shadow-[var(--shadow-soft)] transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "pointer-events-none translate-x-full"
        }`}
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
    </>
  );
}
