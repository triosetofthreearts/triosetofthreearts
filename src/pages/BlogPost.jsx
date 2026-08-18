import { useParams, Link, Navigate } from "react-router-dom";
import { marked } from "marked";
import { getPostById } from "../data/blog.js";
import { hasImage } from "../data/images.js";
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

export default function BlogPost() {
  const { id } = useParams();
  const post = getPostById(id);

  if (!post) return <Navigate to="/blog" replace />;

  const html = marked.parse(post.body || "");

  return (
    <PageWrapper>
      <section className="bg-ink px-6 pb-24 pt-40 lg:px-10 lg:pt-48">
        <div className="mx-auto max-w-3xl">
          <RevealOnScroll>
            <Link
              to="/blog"
              className="eyebrow text-bone/70 transition-colors duration-300 hover:text-brass"
            >
              ← All Posts
            </Link>
            <p className="eyebrow mt-6 text-bone/50">
              {formatDate(post.date)}
              {post.author ? ` · ${post.author}` : ""}
            </p>
            <h1 className="font-display mt-4 text-[clamp(2.25rem,6vw,4rem)] leading-[1.05] text-bone">
              {post.title}
            </h1>
          </RevealOnScroll>

          {hasImage(post.cover) && (
            <RevealOnScroll delay={0.08} className="mt-10">
              <SmartImage
                src={post.cover}
                alt={post.title}
                className="aspect-[16/9] w-full"
                eager
              />
            </RevealOnScroll>
          )}

          <RevealOnScroll
            delay={0.14}
            className="prose prose-invert mt-10 max-w-none text-bone/85 [&_a]:text-brass [&_h2]:font-display [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:text-bone [&_h3]:font-display [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:text-bone [&_p]:mt-5 [&_p]:leading-relaxed [&_ul]:mt-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:pl-6"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </section>
    </PageWrapper>
  );
}
