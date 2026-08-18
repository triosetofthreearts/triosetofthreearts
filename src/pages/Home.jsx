import Hero from "../components/Hero.jsx";
import YoutubeCTA from "../components/YoutubeCTA.jsx";
import UpdatesPreview from "../components/UpdatesPreview.jsx";
import EventsPreview from "../components/EventsPreview.jsx";
import Upcoming from "../components/Upcoming.jsx";
import Team from "../components/Team.jsx";
import About from "../components/About.jsx";
import SmartImage from "../components/SmartImage.jsx";
import RevealOnScroll from "../components/RevealOnScroll.jsx";
import PageWrapper from "../components/PageWrapper.jsx";
import { siteImages } from "../data/images.js";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />

      <div id="story-start" />

      <YoutubeCTA />

      <UpdatesPreview />

      <EventsPreview />

      <Upcoming />

      {/* Full-width editorial break between Events and Team */}
      <section className="relative">
        <RevealOnScroll>
          <SmartImage
            src={siteImages.storyBreak}
            alt="A frame from a recent TRIO production"
            className="h-[55vh] w-full sm:h-[70vh]"
          />
        </RevealOnScroll>
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/80 via-transparent to-transparent">
          <p className="font-display max-w-2xl px-6 pb-10 text-2xl italic text-bone/90 sm:px-10 sm:pb-16 sm:text-4xl">
            "One vision. Three dimensions. Endless creativity."
          </p>
        </div>
      </section>

      <Team />
      <About />
    </PageWrapper>
  );
}
