import RevealOnScroll from "../components/RevealOnScroll.jsx";
import PageWrapper from "../components/PageWrapper.jsx";
import { settings } from "../data/images.js";
import { socials } from "../data/config.js";
import { toEmbedUrl } from "../utils/youtube.js";

export default function Live() {
  const embedUrl = toEmbedUrl(settings?.liveStreamUrl);

  return (
    <PageWrapper>
      <section className="bg-ink px-6 pb-24 pt-40 lg:px-10 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll className="flex items-center gap-4">
            {embedUrl && (
              <span className="flex items-center gap-2 border border-red-500/40 bg-red-500/10 px-3 py-1">
                <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                <span className="eyebrow text-xs text-red-400">Live Now</span>
              </span>
            )}
            <p className="eyebrow text-brass">Live</p>
          </RevealOnScroll>

          <h1 className="font-display mt-4 max-w-3xl text-5xl leading-[1.05] text-bone sm:text-7xl">
            {embedUrl ? "We're live right now." : "Nothing live at the moment."}
          </h1>
          <p className="mt-6 max-w-xl text-bone/70">
            {embedUrl
              ? "Join the stream below — no separate app or login needed."
              : "Check back during a TRIO event, or follow our YouTube channel to get notified the moment we go live."}
          </p>

          <div className="mt-14">
            {embedUrl ? (
              <div className="aspect-video w-full overflow-hidden border border-ink-line bg-ink-soft">
                <iframe
                  src={embedUrl}
                  title="TRIO — Live Stream"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="flex aspect-video w-full flex-col items-center justify-center gap-6 border border-dashed border-ink-line bg-ink-soft px-6 text-center">
                <p className="text-bone/50">
                  We'll embed the stream here automatically the moment it's
                  live.
                </p>
                <a
                  href={socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="eyebrow border border-brass px-6 py-3 text-brass transition-colors duration-300 hover:bg-brass hover:text-ink"
                >
                  Follow on YouTube →
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
