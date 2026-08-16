import { events } from "../data/events.js";
import EventCard from "../components/EventCard.jsx";
import RevealOnScroll from "../components/RevealOnScroll.jsx";
import PageWrapper from "../components/PageWrapper.jsx";

export default function Events() {
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

          <div className="mt-8">
            {events.map((event, i) => (
              <RevealOnScroll key={event.id} delay={i * 0.06}>
                <EventCard event={event} index={i} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
