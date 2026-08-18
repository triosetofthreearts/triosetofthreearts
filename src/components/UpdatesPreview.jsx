import { Link } from "react-router-dom";
import { updates } from "../data/updates.js";
import SmartImage from "./SmartImage.jsx";
import RevealOnScroll from "./RevealOnScroll.jsx";

export default function UpdatesPreview() {
  const latest = updates.slice(0, 3);
  if (latest.length === 0) return null;

  return (
    <section className="bg-ink-soft px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-brass">What's New</p>
            <h2 className="font-display mt-4 max-w-2xl text-5xl leading-[1.05] text-bone sm:text-6xl">
              Fresh off the presses.
            </h2>
          </div>
          <Link
            to="/updates"
            className="eyebrow shrink-0 border-b border-bone/30 pb-1 text-bone/80 transition-colors duration-300 hover:border-brass hover:text-brass"
          >
            All Updates →
          </Link>
        </RevealOnScroll>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((u, i) => (
            <RevealOnScroll key={u.id} delay={i * 0.08}>
              <Link to={`/updates/${u.id}`} className="group block">
                <SmartImage
                  src={u.image}
                  alt={u.title}
                  className="aspect-[4/5] w-full"
                  imgClassName="object-top transition-transform duration-[1200ms] ease-cinematic group-hover:scale-[1.05]"
                />
                <p className="eyebrow mt-4 text-brass">{u.category}</p>
                <h3 className="font-display mt-2 text-2xl leading-tight text-bone transition-colors duration-300 group-hover:text-brass">
                  {u.title}
                </h3>
                <p className="mt-2 text-sm text-bone/60">{u.summary}</p>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
