import RevealOnScroll from "../components/RevealOnScroll.jsx";
import PageWrapper from "../components/PageWrapper.jsx";
import SmartImage from "../components/SmartImage.jsx";
import { testimonials } from "../data/testimonials.js";

export default function Testimonials() {
  return (
    <PageWrapper>
      <section className="bg-ink px-6 pb-24 pt-40 lg:px-10 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll>
            <p className="eyebrow text-brass">Testimonials</p>
            <h1 className="font-display mt-4 max-w-3xl text-5xl leading-[1.05] text-bone sm:text-7xl">
              What people say after working with us.
            </h1>
          </RevealOnScroll>

          {testimonials.length === 0 ? (
            <RevealOnScroll delay={0.1} className="mt-16 max-w-lg">
              <p className="text-bone/50">
                Testimonials will appear here as they're added.
              </p>
            </RevealOnScroll>
          ) : (
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t, i) => (
                <RevealOnScroll
                  key={t.id || t.name}
                  delay={(i % 3) * 0.08}
                  className="flex flex-col justify-between border border-ink-line bg-ink-soft p-8"
                >
                  <div>
                    <span className="font-display text-5xl leading-none text-brass/40">
                      "
                    </span>
                    <p className="font-display -mt-4 text-xl leading-relaxed text-bone/90">
                      {t.quote}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-4">
                    {t.photo ? (
                      <SmartImage
                        src={t.photo}
                        alt={t.name}
                        className="h-12 w-12 shrink-0 rounded-full"
                      />
                    ) : (
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink text-brass">
                        {t.name?.[0] || "?"}
                      </div>
                    )}
                    <div>
                      <p className="eyebrow text-bone">{t.name}</p>
                      {t.role && (
                        <p className="mt-1 text-xs text-bone/50">{t.role}</p>
                      )}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          )}
        </div>
      </section>
    </PageWrapper>
  );
}
