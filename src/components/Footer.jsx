import { Link } from "react-router-dom";
import TrioMark from "./TrioMark.jsx";
import { brand, hasImage } from "../data/images.js";
import { contact, socials } from "../data/config.js";

const links = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/live", label: "Live" },
  { to: "/updates", label: "What's New" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/team", label: "Our Team" },
  { to: "/about", label: "About Us" },
];

const socialLinks = [
  { label: "YouTube", url: socials.youtube },
  { label: "Instagram", url: socials.instagram },
  { label: "Facebook", url: socials.facebook },
];

export default function Footer() {
  const activeSocials = socialLinks.filter((s) => s.url);

  return (
    <footer className="border-t border-ink-line bg-ink px-6 pb-10 pt-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center gap-3">
              {hasImage(brand.logo) ? (
                <img src={brand.logo} alt="TRIO — Set of Three Arts" className="h-10 w-10" />
              ) : (
                <TrioMark className="h-5 w-8 text-brass" animate={false} />
              )}
              <span className="leading-none">
                <span className="font-display block text-lg tracking-[0.18em] text-bone">
                  TRIO
                </span>
                <span className="mt-0.5 block text-[0.58rem] tracking-[0.3em] text-brass">
                  SET OF THREE ARTS
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm text-bone/60">
              A media and creative studio built on three arts — Media &amp;
              Events, Music &amp; Sound, and Literary &amp; Arts Fest.
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow text-bone/50">Navigate</p>
            <ul className="mt-5 space-y-3">
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-bone/70 transition-colors duration-300 hover:text-brass"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow text-bone/50">Follow</p>
            <ul className="mt-5 space-y-3">
              {activeSocials.length > 0 ? (
                activeSocials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-bone/70 transition-colors duration-300 hover:text-brass"
                    >
                      {s.label}
                    </a>
                  </li>
                ))
              ) : (
                <li className="text-sm text-bone/40">Coming soon</li>
              )}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow text-bone/50">Contact</p>
            <p className="mt-5 text-sm text-bone/70">{contact.email}</p>
            {contact.phones.map((phone) => (
              <p key={phone} className="mt-2 text-sm text-bone/70">
                {phone}
              </p>
            ))}
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-bone/60">
              {contact.address}
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ink-line pt-8 text-xs text-bone/40 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} TRIO. All Rights Reserved.</p>
          <p className="tracking-widest">SET OF THREE ARTS</p>
        </div>
      </div>
    </footer>
  );
}
