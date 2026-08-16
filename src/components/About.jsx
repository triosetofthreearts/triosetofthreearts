import { Link } from "react-router-dom";
import { siteImages } from "../data/images.js";
import SmartImage from "./SmartImage.jsx";
import RevealOnScroll from "./RevealOnScroll.jsx";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12 lg:gap-8">
        <RevealOnScroll className="lg:col-span-6" direction="left">
          <p className="eyebrow text-brass">Who We Are</p>
          <h2 className="font-display mt-4 text-balance text-4xl leading-[1.1] text-bone sm:text-5xl">
            One vision. Three dimensions. Endless creativity.
          </h2>
          <p className="mt-6 max-w-lg text-bone/70">
            TRIO: Set of Three Arts is a production house and creative
            agency built at the intersection of Media, Music, and
            Literature. We believe the most powerful experiences happen
            when different art forms converge — so we curate albums,
            events, and content that resonate on a deeper level.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div>
              <p className="eyebrow text-bone/50">Media &amp; Events</p>
              <p className="font-display mt-3 text-xl text-bone">
                High-end video production and large-scale event
                management.
              </p>
            </div>
            <div>
              <p className="eyebrow text-bone/50">Music &amp; Sound</p>
              <p className="font-display mt-3 text-xl text-bone">
                Production, curation, and live performance for artists and
                brands.
              </p>
            </div>
            <div>
              <p className="eyebrow text-bone/50">Literary &amp; Arts Fest</p>
              <p className="font-display mt-3 text-xl text-bone">
                Festivals and workshops that champion the power of
                narrative.
              </p>
            </div>
          </div>

          <Link
            to="/about"
            className="eyebrow mt-12 inline-flex items-center gap-3 border-b border-bone/30 pb-1 text-bone/80 transition-colors duration-300 hover:border-brass hover:text-brass"
          >
            More About TRIO →
          </Link>
        </RevealOnScroll>

        <RevealOnScroll
          className="relative lg:col-span-6"
          direction="right"
          delay={0.1}
        >
          <SmartImage
            src={siteImages.aboutPrimary}
            alt="TRIO at work"
            className="aspect-[4/5] w-full"
          />
          <div className="absolute -bottom-10 -left-6 hidden w-2/3 border-8 border-ink sm:block lg:-left-10">
            <SmartImage
              src={siteImages.aboutSecondary}
              alt="Behind the scenes at a TRIO event"
              className="aspect-[4/3] w-full"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
