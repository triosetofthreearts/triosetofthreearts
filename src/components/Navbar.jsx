import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import TrioMark from "./TrioMark.jsx";
import { brand, hasImage } from "../data/images.js";

const links = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/team", label: "Our Team" },
  { to: "/about", label: "About Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

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
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `eyebrow relative pb-1 transition-colors duration-300 ${
                  isActive ? "text-brass" : "text-bone/80 hover:text-bone"
                }`
              }
            >
              {({ isActive }) => (
                <>
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
        </nav>

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
            <div className="flex flex-col gap-1 px-6 py-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `font-display block py-3 text-3xl tracking-wide ${
                        isActive ? "text-brass" : "text-bone"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
