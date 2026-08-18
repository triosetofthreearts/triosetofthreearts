import { Link } from "react-router-dom";
import { posts } from "../data/blog.js";
import SmartImage from "../components/SmartImage.jsx";
import RevealOnScroll from "../components/RevealOnScroll.jsx";
import PageWrapper from "../components/PageWrapper.jsx";

const formatDate = (d) =>
  d
    ? new Date(d).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

export default function Blog() {
  return (
    <PageWrapper>
      <section className="bg-ink px-6 pb-24 pt-40 lg:px-10 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll>
            <p className="eyebrow text-brass">From TRIO</p>
            <h1 className="font-display mt-4 max-w-3xl text-5xl leading-[1.05] text-bone sm:text-7xl">
              Notes, behind the scenes.
            </h1>
          </RevealOnScroll>

          {posts.length === 0 ? (
            <RevealOnScroll delay={0.1} className="mt-16 max-w-lg">
              <p className="text-bone/50">
                No posts yet — the first one will show up here.
              </p>
            </RevealOnScroll>
          ) : (
            <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p, i) => (
                <RevealOnScroll key={p.id} delay={(i % 3) * 0.08}>
                  <Link to={`/blog/${p.id}`} className="group block">
                    <SmartImage
                      src={p.cover}
                      alt={p.title}
                      className="aspect-[4/3] w-full"
                      imgClassName="transition-transform duration-[1200ms] ease-cinematic group-hover:scale-[1.05]"
                    />
                    <p className="eyebrow mt-4 text-bone/50">
                      {formatDate(p.date)}
                      {p.author ? ` · ${p.author}` : ""}
                    </p>
                    <h3 className="font-display mt-2 text-2xl leading-tight text-bone transition-colors duration-300 group-hover:text-brass">
                      {p.title}
                    </h3>
                    {p.excerpt && (
                      <p className="mt-2 text-sm text-bone/60">{p.excerpt}</p>
                    )}
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
