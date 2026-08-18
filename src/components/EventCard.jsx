import { Link } from "react-router-dom";
import { useState } from "react";
import SmartImage from "./SmartImage.jsx";
import RegisterModal from "./RegisterModal.jsx";

export default function EventCard({ event, index = 0 }) {
  const reversed = index % 2 === 1;
  const [registerOpen, setRegisterOpen] = useState(false);

  return (
    <div
      className={`grid items-center gap-8 border-t border-ink-line py-10 md:grid-cols-12 md:gap-10 md:py-16 ${
        reversed ? "" : ""
      }`}
    >
      <Link
        to={`/events/${event.id}`}
        className={`group md:col-span-7 ${reversed ? "md:order-2" : "md:order-1"}`}
      >
        <SmartImage
          src={event.cover}
          alt={event.name}
          className="aspect-[4/3] w-full"
          imgClassName="object-top transition-transform duration-[1400ms] ease-cinematic group-hover:scale-[1.06]"
        />
      </Link>

      <div
        className={`md:col-span-5 ${reversed ? "md:order-1" : "md:order-2"}`}
      >
        <p className="eyebrow text-brass">{event.discipline}</p>
        <Link to={`/events/${event.id}`} className="group">
          <h3 className="font-display mt-3 text-4xl leading-tight text-bone transition-colors duration-300 group-hover:text-brass sm:text-5xl">
            {event.name}
          </h3>
        </Link>
        <p className="mt-4 text-sm uppercase tracking-widest text-bone-dim">
          {event.location} &nbsp;·&nbsp; {event.dateLabel}
        </p>
        <p className="mt-5 max-w-md text-bone/70">{event.tagline}</p>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Link
            to={`/events/${event.id}`}
            className="eyebrow group inline-flex items-center gap-3 text-bone transition-colors duration-300 hover:text-brass"
          >
            View Event
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </Link>
          <button
            onClick={() => setRegisterOpen(true)}
            className="eyebrow border border-brass px-5 py-2.5 text-brass transition-colors duration-300 hover:bg-brass hover:text-ink"
          >
            Register
          </button>
        </div>
      </div>

      <RegisterModal
        open={registerOpen}
        onClose={() => setRegisterOpen(false)}
        eventName={event.name}
      />
    </div>
  );
}
