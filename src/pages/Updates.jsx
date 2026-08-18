import { Link } from "react-router-dom";
import { updates } from "../data/updates.js";
import SmartImage from "../components/SmartImage.jsx";
import RevealOnScroll from "../components/RevealOnScroll.jsx";
import PageWrapper from "../components/PageWrapper.jsx";

export default function Updates() {
  return (
    <PageWrapper>
      <section className="bg-ink px-6 pb-24 pt-40 lg:px-10 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll>
            <p className="eyebrow text-brass">What's New</p>
            <h1 className="font-display mt-4 max-w-3xl text-5xl leading-[1.05] text-bone sm:text-7xl">
              Announcements, releases, and what's coming up.
            </h1>
            <p className="mt-6 max-w-xl text-bone/70">
              Everything that isn't a ticketed event but is still worth
              knowing about — new releases, collaborations, and updates
              from TRIO.
            </p>
          </RevealOnScroll>

          {updates.length === 0 ? (
            <RevealOnScroll delay={0.1} className="mt-16 max-w-lg">
              <p className="text-bone/50">Nothing posted yet — check back soon.</p>
            </RevealOnScroll>
          ) : (
            <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {updates.map((u, i) => (
                <RevealOnScroll key={u.id} delay={(i % 3) * 0.08}>
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
          )}
        </div>
      </section>
    </PageWrapper>
  );
}
