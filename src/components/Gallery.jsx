import SmartImage from "./SmartImage.jsx";
import RevealOnScroll from "./RevealOnScroll.jsx";

// Varies image sizes across a 6-column grid so the gallery reads as
// editorial rather than a uniform thumbnail wall.
const spanPattern = [
  "col-span-4 row-span-2",
  "col-span-2 row-span-1",
  "col-span-2 row-span-1",
  "col-span-3 row-span-2",
  "col-span-3 row-span-1",
  "col-span-3 row-span-1",
];

// Accepts either plain URL strings, or { src, caption } objects when a
// specific photo deserves a credit (e.g. a named guest at an event).
export default function Gallery({ images = [], eventName = "" }) {
  const normalized = images
    .map((item) => (typeof item === "string" ? { src: item, caption: "" } : item))
    .filter((item) => item && item.src);

  const valid = normalized.length > 0 ? normalized : [{ src: "" }, { src: "" }, { src: "" }, { src: "" }];

  return (
    <div className="grid auto-rows-[140px] grid-cols-6 gap-3 sm:auto-rows-[180px] sm:gap-4">
      {valid.map((item, i) => (
        <RevealOnScroll
          key={i}
          delay={(i % 4) * 0.06}
          className={`relative group ${spanPattern[i % spanPattern.length]}`}
        >
          <SmartImage
            src={item.src}
            alt={item.caption || `${eventName} — photo ${i + 1}`}
            className="h-full w-full"
            imgClassName="transition-transform duration-[1200ms] ease-cinematic group-hover:scale-[1.05]"
          />
          {item.caption && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent px-3 pb-2 pt-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-xs tracking-wide text-bone">{item.caption}</p>
            </div>
          )}
        </RevealOnScroll>
      ))}
    </div>
  );
}
