import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import TrioMark from "./TrioMark.jsx";
import { brand, hasImage } from "../data/images.js";
import { socials } from "../data/config.js";

// Primary links shown directly in the desktop nav bar.
const primaryLinks = [
  { to: "/events", label: "Events" },
  { to: "/live", label: "Live" },
  { to: "/updates", label: "What's New" },
  { to: "/gallery", label: "Gallery" },
];

// Folded into a "More" dropdown on desktop to keep the bar clean —
// all shown flat in the mobile menu.
const moreLinks = [
  { to: "/blog", label: "Blog" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/team", label: "Our Team" },
  { to: "/about", label: "About Us" },
];

const allLinks = [{ to: "/", label: "Home" }, ...primaryLinks, ...moreLinks];

function YouTubeIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 28 20" className={className} fill="none">
      <path
        d="M27.4 3.1c-.3-1.2-1.3-2.1-2.5-2.4C22.7.1 14 .1 14 .1s-8.7 0-10.9.6C1.9 1 .9 1.9.6 3.1 0 5.3 0 10 0 10s0 4.7.6 6.9c.3 1.2 1.3 2.1 2.5 2.4C5.3 19.9 14 19.9 14 19.9s8.7 0 10.9-.6c1.2-.3 2.2-1.2 2.5-2.4.6-2.2.6-6.9.6-6.9s0-4.7-.6-6.9z"
        fill="currentColor"
      />
      <path d="M11.2 14.3 18.5 10l-7.3-4.3v8.6z" fill="#0B1B32" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMoreOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    const onClick = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-cinematic ${
        scrolled || open
          ? "bg-ink/90 backdrop-blur-md border-b border-ink-line"
          : "bg-gradient-to-b from-ink/70 via-ink/10 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link to="/" className="group flex items-center gap-3">
          {hasImage(brand.logo) ? (
            <img src={brand.logo} alt="TRIO — Set of Three Arts" className="h-11 w-11" />
          ) : (
            <TrioMark className="h-6 w-9 text-brass" />
          )}
          <span className="leading-none">
            <span className="font-display block text-xl tracking-[0.18em] text-bone">
              TRIO
            </span>
            <span className="mt-0.5 block text-[0.6rem] tracking-[0.3em] text-brass">
              SET OF THREE ARTS
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-8">
            {primaryLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `eyebrow relative flex items-center gap-2 pb-1 transition-colors duration-300 ${
                    isActive ? "text-brass" : "text-bone/80 hover:text-bone"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.to === "/live" && (
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
                      </span>
                    )}
                    {link.label.toUpperCase()}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-0 left-0 h-px w-full bg-brass"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* More dropdown */}
            <div className="relative" ref={moreRef}>
              <button
                onClick={() => setMoreOpen((v) => !v)}
                className={`eyebrow flex items-center gap-1.5 pb-1 transition-colors duration-300 ${
                  moreOpen || moreLinks.some((l) => l.to === location.pathname)
                    ? "text-brass"
                    : "text-bone/80 hover:text-bone"
                }`}
              >
                MORE
                <motion.span
                  animate={{ rotate: moreOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-[0.6rem]"
                >
                  ▾
                </motion.span>
              </button>
              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-4 w-48 border border-ink-line bg-ink-soft py-2 shadow-xl"
                  >
                    {moreLinks.map((link) => (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        className={({ isActive }) =>
                          `block px-5 py-3 text-sm tracking-wide transition-colors duration-200 ${
                            isActive
                              ? "text-brass"
                              : "text-bone/80 hover:bg-ink hover:text-bone"
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Prominent YouTube button */}
          <a
            href={socials.youtube}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 rounded-full bg-brass px-4 py-2 text-ink shadow-[0_0_20px_-4px_rgba(199,161,90,0.7)] transition-transform duration-300 hover:scale-105"
          >
            <YouTubeIcon className="h-4 w-6" />
            <span className="eyebrow text-xs">YouTube</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-[6px] md:hidden"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="h-px w-6 bg-bone"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="h-px w-6 bg-bone"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="h-px w-6 bg-bone"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-ink-line bg-ink md:hidden"
          >
            <div className="flex max-h-[75vh] flex-col gap-1 overflow-y-auto px-6 py-8">
              {allLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `font-display flex items-center gap-3 py-2.5 text-2xl tracking-wide ${
                        isActive ? "text-brass" : "text-bone"
                      }`
                    }
                  >
                    {link.to === "/live" && (
                      <span className="h-2 w-2 rounded-full bg-red-500" />
                    )}
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}

              <a
                href={socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="eyebrow mt-6 flex w-fit items-center gap-3 rounded-full bg-brass px-6 py-3 text-ink"
              >
                <YouTubeIcon className="h-5 w-8" />
                Watch on YouTube
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
