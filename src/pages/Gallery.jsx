import Gallery from "../components/Gallery.jsx";
import RevealOnScroll from "../components/RevealOnScroll.jsx";
import PageWrapper from "../components/PageWrapper.jsx";
import { siteGalleryImages } from "../data/images.js";

export default function GalleryPage() {
  return (
    <PageWrapper>
      <section className="bg-ink px-6 pb-24 pt-40 lg:px-10 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll>
            <p className="eyebrow text-brass">Gallery</p>
            <h1 className="font-display mt-4 max-w-3xl text-5xl leading-[1.05] text-bone sm:text-7xl">
              Moments, in frame.
            </h1>
            <p className="mt-6 max-w-xl text-bone/70">
              A running collection of photos from behind the scenes, on
              stage, and everywhere in between. New shots are added by our
              team as things happen.
            </p>
          </RevealOnScroll>

          <div className="mt-14">
            <Gallery images={siteGalleryImages} eventName="TRIO gallery" />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
