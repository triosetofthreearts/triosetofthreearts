import { Link } from "react-router-dom";
import { events } from "../data/events.js";
import EventCard from "./EventCard.jsx";
import RevealOnScroll from "./RevealOnScroll.jsx";

export default function EventsPreview() {
  const featured = events.filter((e) => e.featured).slice(0, 3);

  return (
    <section className="bg-ink px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-brass">On The Calendar</p>
            <h2 className="font-display mt-4 max-w-2xl text-5xl leading-[1.05] text-bone sm:text-6xl">
              Where TRIO shows up next.
            </h2>
          </div>
          <Link
            to="/events"
            className="eyebrow shrink-0 border-b border-bone/30 pb-1 text-bone/80 transition-colors duration-300 hover:border-brass hover:text-brass"
          >
            All Events →
          </Link>
        </RevealOnScroll>

        <div className="mt-8">
          {featured.map((event, i) => (
            <RevealOnScroll key={event.id} delay={i * 0.08}>
              <EventCard event={event} index={i} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
