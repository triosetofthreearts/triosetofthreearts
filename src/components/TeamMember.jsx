import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SmartImage from "./SmartImage.jsx";
import { teamImages } from "../data/images.js";

export default function TeamMember({ member }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group relative block w-full overflow-hidden text-left"
        aria-haspopup="dialog"
      >
        <SmartImage
          src={teamImages[member.id]}
          alt={member.name}
          className="aspect-[3/4] w-full"
          imgClassName="grayscale-[35%] transition-all duration-[1200ms] ease-cinematic group-hover:scale-[1.07] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/0 to-ink/0 opacity-70 transition-opacity duration-500 group-hover:opacity-95" />

        <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 ease-cinematic group-hover:-translate-y-1">
          <p className="eyebrow text-brass opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            {member.discipline}
          </p>
          <h3 className="font-display mt-2 text-2xl text-bone">{member.name}</h3>
          <p className="mt-1 text-sm text-bone/70">{member.role}</p>
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-6 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="grid max-w-3xl gap-8 sm:grid-cols-2"
            >
              <SmartImage
                src={teamImages[member.id]}
                alt={member.name}
                className="aspect-[3/4] w-full"
              />
              <div className="flex flex-col justify-center">
                <p className="eyebrow text-brass">{member.discipline}</p>
                <h3 className="font-display mt-3 text-4xl text-bone">
                  {member.name}
                </h3>
                <p className="mt-1 text-bone-dim">{member.role}</p>
                <p className="mt-6 text-bone/75">{member.bio}</p>
                <button
                  onClick={() => setOpen(false)}
                  className="eyebrow mt-8 w-fit border-b border-bone/30 pb-1 text-bone/80 hover:border-brass hover:text-brass"
                >
                  Close ✕
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
