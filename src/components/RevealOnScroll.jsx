import { motion } from "framer-motion";

// A restrained fade + slide used across the site for scroll reveals.
// Direction and delay are the only knobs — keeps every reveal consistent
// rather than each section inventing its own motion.
export default function RevealOnScroll({
  children,
  className = "",
  direction = "up",
  delay = 0,
  distance = 28,
  once = true,
}) {
  const axis = direction === "left" || direction === "right" ? "x" : "y";
  const sign = direction === "up" || direction === "left" ? 1 : -1;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, [axis]: distance * sign }}
      whileInView={{ opacity: 1, [axis]: 0 }}
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
