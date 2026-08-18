import { useParams, Link, Navigate } from "react-router-dom";
import { getUpdateById } from "../data/updates.js";
import { hasImage } from "../data/images.js";
import SmartImage from "../components/SmartImage.jsx";
import RevealOnScroll from "../components/RevealOnScroll.jsx";
import PageWrapper from "../components/PageWrapper.jsx";

export default function UpdateDetail() {
  const { id } = useParams();
  const update = getUpdateById(id);

  if (!update) return <Navigate to="/updates" replace />;

  return (
    <PageWrapper>
      <section className="bg-ink px-6 pb-24 pt-40 lg:px-10 lg:pt-48">
        <div className="mx-auto max-w-5xl">
          <RevealOnScroll>
            <Link
              to="/updates"
              className="eyebrow text-bone/70 transition-colors duration-300 hover:text-brass"
            >
              ← What's New
            </Link>
            <p className="eyebrow mt-6 text-brass">{update.category}</p>
            <h1 className="font-display mt-4 text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.05] text-bone">
              {update.title}
            </h1>
            {update.presentedBy && (
              <p className="mt-4 text-sm uppercase tracking-widest text-bone-dim">
                {update.presentedBy}
              </p>
            )}
          </RevealOnScroll>

          {hasImage(update.image) && (
            <RevealOnScroll delay={0.08} className="mt-10">
              <SmartImage
                src={update.image}
                alt={update.title}
                className="mx-auto aspect-[4/5] max-w-md sm:max-w-sm"
                imgClassName="object-top"
                eager
              />
            </RevealOnScroll>
          )}

          <RevealOnScroll delay={0.14} className="mt-10 max-w-2xl">
            <p className="font-display text-xl leading-relaxed text-bone/90 sm:text-2xl">
              {update.description}
            </p>
            {update.link && (
              <a
                href={update.link}
                target="_blank"
                rel="noreferrer"
                className="eyebrow mt-8 inline-flex items-center gap-3 border border-brass px-6 py-3 text-brass transition-colors duration-300 hover:bg-brass hover:text-ink"
              >
                {update.linkLabel || "Learn More"} →
              </a>
            )}
          </RevealOnScroll>
        </div>
      </section>
    </PageWrapper>
  );
}
