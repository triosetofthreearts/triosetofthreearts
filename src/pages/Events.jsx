import { events } from "../data/events.js";
import EventCard from "../components/EventCard.jsx";
import RevealOnScroll from "../components/RevealOnScroll.jsx";
import PageWrapper from "../components/PageWrapper.jsx";

export default function Events() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = events.filter((e) => !e.date || new Date(e.date) >= today);
  const past = events
    .filter((e) => e.date && new Date(e.date) < today)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <PageWrapper>
      <section className="bg-ink px-6 pb-24 pt-40 lg:px-10 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll>
            <p className="eyebrow text-brass">Events</p>
            <h1 className="font-display mt-4 max-w-3xl text-5xl leading-[1.05] text-bone sm:text-7xl">
              Screenings, sessions, and everything in between.
            </h1>
            <p className="mt-6 max-w-xl text-bone/70">
              TRIO stages a small number of events each year, deliberately.
              Every one is documented — photographed, filmed, and archived
              — the same way the work we cover is.
            </p>
          </RevealOnScroll>

          {upcoming.length > 0 && (
            <div className="mt-8">
              {upcoming.map((event, i) => (
                <RevealOnScroll key={event.id} delay={i * 0.06}>
                  <EventCard event={event} index={i} />
                </RevealOnScroll>
              ))}
            </div>
          )}

          {upcoming.length === 0 && (
            <RevealOnScroll delay={0.1} className="mt-16 max-w-lg">
              <p className="text-bone/50">
                No upcoming events on the calendar right now — check back
                soon.
              </p>
            </RevealOnScroll>
          )}

          {past.length > 0 && (
            <div className="mt-24">
              <RevealOnScroll>
                <p className="eyebrow text-bone/50">Past Events</p>
              </RevealOnScroll>
              <div className="mt-8">
                {past.map((event, i) => (
                  <RevealOnScroll key={event.id} delay={i * 0.06}>
                    <EventCard event={event} index={i} />
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </PageWrapper>
  );
}
