import { socials } from "../data/config.js";
import RevealOnScroll from "./RevealOnScroll.jsx";

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

export default function YoutubeCTA() {
  return (
    <section className="bg-ink-soft px-6 py-20 lg:px-10">
      <RevealOnScroll className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 border border-ink-line p-8 sm:p-12 md:flex-row md:items-center">
        <div>
          <p className="eyebrow text-brass">On YouTube</p>
          <h2 className="font-display mt-3 max-w-lg text-3xl leading-tight text-bone sm:text-4xl">
            Sessions, sit-downs, and full event recaps — before anywhere
            else.
          </h2>
        </div>
        <a
          href={socials.youtube}
          target="_blank"
          rel="noreferrer"
          className="group flex shrink-0 items-center gap-4 bg-brass px-8 py-5 text-ink transition-transform duration-300 ease-cinematic hover:scale-[1.03]"
        >
          <YouTubeIcon className="h-7 w-10" />
          <span className="eyebrow text-base">Watch on YouTube</span>
        </a>
      </RevealOnScroll>
    </section>
  );
}
