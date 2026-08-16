import Team from "../components/Team.jsx";
import RevealOnScroll from "../components/RevealOnScroll.jsx";
import PageWrapper from "../components/PageWrapper.jsx";

export default function TeamPage() {
  return (
    <PageWrapper>
      <section className="bg-ink px-6 pb-16 pt-40 lg:px-10 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll>
            <p className="eyebrow text-brass">Our Team</p>
            <h1 className="font-display mt-4 max-w-3xl text-5xl leading-[1.05] text-bone sm:text-7xl">
              The Custodians of TRIO.
            </h1>
          </RevealOnScroll>
        </div>
      </section>
      <Team intro={false} />
    </PageWrapper>
  );
}
