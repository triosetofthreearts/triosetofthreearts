import { team } from "../data/team.js";
import TeamMember from "./TeamMember.jsx";
import RevealOnScroll from "./RevealOnScroll.jsx";

export default function Team({ intro = true }) {
  return (
    <section className="bg-ink-soft px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        {intro && (
          <RevealOnScroll className="max-w-2xl">
            <p className="eyebrow text-brass">The Custodians</p>
            <h2 className="font-display mt-4 text-5xl leading-[1.05] text-bone sm:text-6xl">
              The people behind TRIO.
            </h2>
            <p className="mt-6 text-bone/70">
              TRIO is guided by three Custodians, backing and steering the
              studio's work across music, word, and personality.
            </p>
          </RevealOnScroll>
        )}

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
          {team.map((member, i) => (
            <RevealOnScroll key={member.id} delay={(i % 3) * 0.08}>
              <TeamMember member={member} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
