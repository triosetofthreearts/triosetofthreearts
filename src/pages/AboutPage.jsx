import { siteImages } from "../data/images.js";
import SmartImage from "../components/SmartImage.jsx";
import RevealOnScroll from "../components/RevealOnScroll.jsx";
import PageWrapper from "../components/PageWrapper.jsx";

export default function AboutPage() {
  return (
    <PageWrapper>
      <section className="bg-ink px-6 pb-20 pt-40 lg:px-10 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll>
            <p className="eyebrow text-brass">About TRIO</p>
            <h1 className="font-display mt-4 max-w-4xl text-balance text-5xl leading-[1.05] text-bone sm:text-7xl">
              One vision. Three dimensions.
            </h1>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-ink px-6 pb-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
          <RevealOnScroll className="lg:col-span-7" direction="left">
            <p className="eyebrow text-bone/50">Who We Are</p>
            <p className="font-display mt-4 text-3xl leading-relaxed text-bone/90">
              TRIO: Set of Three Arts is a production house and creative
              agency dedicated to the intersection of Media, Music, and
              Literature.
            </p>
            <p className="mt-6 max-w-xl text-bone/70">
              We believe the most powerful experiences happen when
              different art forms converge. By blending visual
              storytelling, rhythmic innovation, and the power of the
              written word, we curate music albums, events, and content
              that resonate on a deeper level.
            </p>
            <p className="mt-4 max-w-xl text-bone/70">
              TRIO is guided by its Custodians — the people who back,
              direct, and steer the studio's work across all three arts.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="lg:col-span-5" direction="right" delay={0.1}>
            <SmartImage
              src={siteImages.aboutPrimary}
              alt="TRIO studio"
              className="aspect-[4/5] w-full"
            />
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-ink-soft px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll className="mb-14 max-w-xl">
            <p className="eyebrow text-brass">Our Three Pillars</p>
          </RevealOnScroll>
          <div className="grid gap-10 border-t border-ink-line pt-10 sm:grid-cols-3">
            {[
              {
                title: "Media & Events",
                body: "From high-end video production to large-scale event management, we bring visions to life through precision and creativity.",
              },
              {
                title: "Music & Sound",
                body: "We support artists and brands in finding their unique voice through production, curation, and live performance.",
              },
              {
                title: "Literary & Arts Fest",
                body: "We celebrate the intellectual and the imaginative by hosting literary festivals and workshops that champion the power of narrative.",
              },
            ].map((item) => (
              <RevealOnScroll key={item.title}>
                <h3 className="font-display text-2xl text-bone">
                  {item.title}
                </h3>
                <p className="mt-3 text-bone/70">{item.body}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="relative">
        <SmartImage
          src={siteImages.aboutSecondary}
          alt="TRIO team at work"
          className="h-[50vh] w-full sm:h-[65vh]"
        />
      </section>
    </PageWrapper>
  );
}
