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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const toggle = document.getElementById("nav-toggle") as HTMLInputElement | null;
    if (!toggle) return;

    let lockedScrollY = 0;

    const lockScroll = () => {
      lockedScrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${lockedScrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    };

    const unlockScroll = () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, lockedScrollY);
    };

    const syncOverflow = () => {
      if (toggle.checked) lockScroll();
      else unlockScroll();
    };

    const closeMenu = () => {
      toggle.checked = false;
      syncOverflow();
    };

    const onNavLinkClick = (event: MouseEvent) => {
      const link = event.currentTarget as HTMLAnchorElement;
      const href = link.getAttribute("href");
      if (!href?.startsWith("#")) {
        closeMenu();
        return;
      }

      event.preventDefault();
      const target = document.querySelector<HTMLElement>(href);

      // Unlock first so we resume at the locked scroll position, then travel
      // the short path to the section (up or down) instead of from the top.
      toggle.checked = false;
      unlockScroll();

      if (!target) return;

      requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.pushState(null, "", href);
      });
    };

    syncOverflow();
    toggle.addEventListener("change", syncOverflow);

    const links = document.querySelectorAll<HTMLAnchorElement>(".mobile-nav-link");
    links.forEach((link) => link.addEventListener("click", onNavLinkClick));

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      toggle.removeEventListener("change", syncOverflow);
      links.forEach((link) => link.removeEventListener("click", onNavLinkClick));
      window.removeEventListener("keydown", onKeyDown);
      unlockScroll();
    };
  }, []);

  return (
    <>
      {/* Peer checkbox must sit as a sibling of the drawer/backdrop (not inside fixed header). */}
      <input id="nav-toggle" type="checkbox" className="peer sr-only" />

      <header
        className={`site-header fixed inset-x-0 top-0 z-50 px-4 py-3.5 transition-[background,box-shadow,backdrop-filter] duration-300 md:px-8 ${
          scrolled
            ? "is-scrolled bg-paper/90 shadow-[0_1px_0_var(--line)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <Link
            href="#top"
            className={`brand-mark font-display text-lg font-semibold tracking-tight no-underline transition-colors md:text-xl ${
              scrolled ? "text-lake" : "text-white"
            }`}
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
                      scrolled ? "text-ink-soft" : "text-white/80"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <label
            htmlFor="nav-toggle"
            className={`nav-burger relative z-50 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-[0.35rem] border md:hidden ${
              scrolled
                ? "border-line bg-white text-lake"
                : "border-white/35 bg-lake-deep/25 text-white"
            }`}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Toggle menu</span>
            <span aria-hidden="true" className="relative flex h-3.5 w-4 flex-col justify-between">
              <span className="burger-line block h-0.5 w-full origin-center bg-current transition-transform duration-200" />
              <span className="burger-mid block h-0.5 w-full bg-current transition-opacity duration-200" />
              <span className="burger-line-2 block h-0.5 w-full origin-center bg-current transition-transform duration-200" />
            </span>
          </label>
        </div>
      </header>

      <label
        htmlFor="nav-toggle"
        className="pointer-events-none fixed inset-0 z-40 bg-lake-deep/45 opacity-0 transition-opacity duration-300 peer-checked:pointer-events-auto peer-checked:opacity-100 md:hidden"
        aria-hidden="true"
      />

      <nav
        id="mobile-nav"
        className="pointer-events-none fixed inset-y-0 right-0 z-40 flex w-[min(18rem,84vw)] translate-x-full flex-col bg-[#f4f8f9] px-6 pt-24 shadow-[var(--shadow-soft)] transition-transform duration-300 peer-checked:pointer-events-auto peer-checked:translate-x-0 md:hidden"
      >
        <ul className="grid gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="mobile-nav-link block border-b border-line py-3 font-display text-xl text-lake no-underline"
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
