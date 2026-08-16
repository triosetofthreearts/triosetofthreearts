import { motion } from "framer-motion";
import { siteImages, hasImage } from "../data/images.js";
import TrioMark from "./TrioMark.jsx";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const scrollToNext = () => {
    document.getElementById("story-start")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex h-[100svh] w-full items-end overflow-hidden bg-ink">
      {/* Background */}
      <div className="absolute inset-0">
        {hasImage(siteImages.hero) ? (
          <motion.img
            src={siteImages.hero}
            alt="A moment from a TRIO production"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.4, ease }}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-[radial-gradient(120%_90%_at_50%_10%,#1E2126_0%,#0A0B0D_60%)]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-10 lg:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease }}
          className="eyebrow mb-6 text-brass"
        >
          Media &nbsp;·&nbsp; Music &nbsp;·&nbsp; Literature
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 1, ease }}
          className="font-display text-balance text-[clamp(3.5rem,12vw,9.5rem)] font-medium leading-[0.92] tracking-tight text-bone"
        >
          TRIO
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9, ease }}
          className="font-display mt-6 max-w-xl text-2xl italic text-bone/85 sm:text-3xl"
        >
          Stories. People. Moments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-14 flex items-center gap-4"
        >
          <button
            onClick={scrollToNext}
            className="eyebrow group flex items-center gap-3 text-bone/70 transition-colors duration-300 hover:text-brass"
          >
            Explore TRIO
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="inline-block"
            >
              ↓
            </motion.span>
          </button>
        </motion.div>
      </div>

      {/* Corner mark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="absolute right-6 top-28 z-10 hidden text-bone/40 lg:right-10 lg:block"
      >
        <TrioMark className="h-6 w-9" />
      </motion.div>
    </section>
  );
}
