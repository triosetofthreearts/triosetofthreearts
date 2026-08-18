import { socials } from "../data/config.js";
import { settings } from "../data/images.js";
import { toEmbedUrl } from "../utils/youtube.js";
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
  const embedUrl = toEmbedUrl(settings?.latestVideoUrl);

  return (
    <section className="bg-ink-soft px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll className="relative flex flex-col items-start justify-between gap-8 overflow-hidden border-2 border-brass/60 p-8 shadow-[0_0_60px_-15px_rgba(199,161,90,0.35)] sm:p-12 md:flex-row md:items-center">
          {/* subtle glow accent */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brass/10 blur-3xl" />

          <div className="relative">
            <p className="eyebrow flex items-center gap-2 text-brass">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brass opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brass" />
              </span>
              On YouTube
            </p>
            <h2 className="font-display mt-3 max-w-lg text-3xl leading-tight text-bone sm:text-4xl">
              Sessions, sit-downs, and full event recaps — before anywhere
              else.
            </h2>
          </div>
          <a
            href={socials.youtube}
            target="_blank"
            rel="noreferrer"
            className="group relative flex shrink-0 items-center gap-4 bg-brass px-8 py-5 text-ink transition-transform duration-300 ease-cinematic hover:scale-[1.05]"
          >
            <YouTubeIcon className="h-7 w-10" />
            <span className="eyebrow text-base">Watch on YouTube</span>
          </a>
        </RevealOnScroll>

        {/* Latest video — editable via the dashboard (Settings). Only
            renders once a video URL has been set. */}
        {embedUrl && (
          <RevealOnScroll delay={0.08} className="mt-8">
            <p className="eyebrow mb-4 text-bone/50">Latest Upload</p>
            <div className="aspect-video w-full overflow-hidden border border-ink-line bg-ink">
              <iframe
                src={embedUrl}
                title="Latest TRIO video"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </RevealOnScroll>
        )}
      </div>
    </section>
  );
}
