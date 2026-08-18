import { useParams, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { getEventById, events } from "../data/events.js";
import { hasImage } from "../data/images.js";
import SmartImage from "../components/SmartImage.jsx";
import Gallery from "../components/Gallery.jsx";
import RevealOnScroll from "../components/RevealOnScroll.jsx";
import PageWrapper from "../components/PageWrapper.jsx";
import RegisterModal from "../components/RegisterModal.jsx";

export default function EventDetail() {
  const { id } = useParams();
  const event = getEventById(id);
  const [registerOpen, setRegisterOpen] = useState(false);

  if (!event) return <Navigate to="/events" replace />;

  const others = events.filter((e) => e.id !== event.id).slice(0, 2);

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative flex h-[80vh] min-h-[520px] w-full items-end overflow-hidden bg-ink">
        <SmartImage
          src={event.cover}
          alt={event.name}
          className="absolute inset-0 h-full w-full"
          imgClassName="object-top"
          eager
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/50" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 lg:px-10">
          <Link
            to="/events"
            className="eyebrow text-bone/70 transition-colors duration-300 hover:text-brass"
          >
            ← All Events
          </Link>
          <p className="eyebrow mt-6 text-brass">{event.discipline}</p>
          <h1 className="font-display mt-4 text-[clamp(2.75rem,8vw,6rem)] leading-[0.95] text-bone">
            {event.name}
          </h1>
          <p className="mt-5 max-w-xl text-sm uppercase tracking-widest text-bone-dim">
            {event.location} &nbsp;·&nbsp; {event.dateLabel}
          </p>
          {event.presentedBy && (
            <p className="mt-2 max-w-xl text-xs uppercase tracking-widest text-bone-dim/70">
              {event.presentedBy}
            </p>
          )}
          <button
            onClick={() => setRegisterOpen(true)}
            className="eyebrow mt-8 w-full border border-brass bg-brass px-8 py-3.5 text-ink transition-opacity duration-300 hover:opacity-90 sm:w-auto"
          >
            Register For This Event
          </button>
        </div>
      </section>

      <RegisterModal
        open={registerOpen}
        onClose={() => setRegisterOpen(false)}
        eventName={event.name}
      />

      {/* Description + highlights */}
      <section className="bg-ink px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
          <RevealOnScroll className="lg:col-span-7">
            <p className="eyebrow text-bone/50">About This Event</p>
            <p className="font-display mt-4 text-2xl leading-relaxed text-bone/90 sm:text-3xl">
              {event.description}
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="lg:col-span-5" delay={0.1}>
            <p className="eyebrow text-bone/50">Highlights</p>
            <ul className="mt-5 space-y-4">
              {event.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 border-t border-ink-line pt-4 text-bone/75"
                >
                  <span className="mt-1 text-brass">—</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {event.externalLink && (
              <a
                href={event.externalLink}
                target="_blank"
                rel="noreferrer"
                className="eyebrow mt-8 inline-flex items-center gap-3 border-b border-bone/30 pb-1 text-bone/80 transition-colors duration-300 hover:border-brass hover:text-brass"
              >
                Event Details / Tickets →
              </a>
            )}
          </RevealOnScroll>
        </div>
      </section>

      {/* Official poster — shown full-frame, uncropped */}
      {hasImage(event.poster) && (
        <section className="border-t border-ink-line bg-ink-soft px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <RevealOnScroll className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow text-brass">Official Poster</p>
                <h2 className="font-display mt-4 text-4xl text-bone sm:text-5xl">
                  The full flyer.
                </h2>
              </div>
              <a
                href={event.poster}
                target="_blank"
                rel="noreferrer"
                className="eyebrow shrink-0 border-b border-bone/30 pb-1 text-bone/80 transition-colors duration-300 hover:border-brass hover:text-brass"
              >
                View Full Size →
              </a>
            </RevealOnScroll>
            <RevealOnScroll delay={0.08}>
              <a
                href={event.poster}
                target="_blank"
                rel="noreferrer"
                className="mx-auto flex max-w-md items-center justify-center overflow-hidden border border-ink-line bg-ink sm:max-w-sm"
              >
                <img
                  src={event.poster}
                  alt={`${event.name} — official event poster`}
                  className="h-auto w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </RevealOnScroll>
          </div>
        </section>
      )}

      {/* Video */}
      {hasImage(event.video) && (
        <section className="bg-ink px-6 pb-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <RevealOnScroll>
              <p className="eyebrow mb-6 text-bone/50">Watch</p>
              <div className="aspect-video w-full overflow-hidden bg-ink-soft">
                <iframe
                  src={event.video}
                  title={`${event.name} video`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </RevealOnScroll>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="border-t border-ink-line bg-ink-soft px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll className="mb-10">
            <p className="eyebrow text-brass">Gallery</p>
            <h2 className="font-display mt-4 text-4xl text-bone sm:text-5xl">
              From the room.
            </h2>
          </RevealOnScroll>
          <Gallery images={event.gallery || []} eventName={event.name} />
        </div>
      </section>

      {/* More events */}
      {others.length > 0 && (
        <section className="bg-ink px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <RevealOnScroll className="mb-10">
              <p className="eyebrow text-bone/50">Also On</p>
            </RevealOnScroll>
            <div className="grid gap-8 sm:grid-cols-2">
              {others.map((e) => (
                <RevealOnScroll key={e.id}>
                  <Link to={`/events/${e.id}`} className="group block">
                    <SmartImage
                      src={e.cover}
                      alt={e.name}
                      className="aspect-[16/10] w-full"
                      imgClassName="transition-transform duration-[1200ms] ease-cinematic group-hover:scale-[1.05]"
                    />
                    <p className="eyebrow mt-4 text-brass">{e.discipline}</p>
                    <h3 className="font-display mt-2 text-2xl text-bone">
                      {e.name}
                    </h3>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageWrapper>
  );
}
