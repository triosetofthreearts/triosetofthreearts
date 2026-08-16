import { upcoming } from "../data/upcoming.js";
import { studioImages } from "../data/images.js";
import Gallery from "./Gallery.jsx";
import RevealOnScroll from "./RevealOnScroll.jsx";

export default function Upcoming() {
  return (
    <section className="bg-ink px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll className="max-w-2xl">
          <p className="eyebrow text-brass">Coming Soon</p>
          <h2 className="font-display mt-4 text-5xl leading-[1.05] text-bone sm:text-6xl">
            {upcoming.title}
          </h2>
          <p className="mt-6 text-bone/70">{upcoming.description}</p>
        </RevealOnScroll>

        <div className="mt-14">
          <Gallery images={studioImages} eventName="TRIO in the studio" />
        </div>
      </div>
    </section>
  );
}
