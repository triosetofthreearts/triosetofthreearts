import { useState } from "react";
import { hasImage } from "../data/images.js";
import TrioMark from "./TrioMark.jsx";

// Wraps <img> with:
// - lazy loading + async decoding
// - a fade-in once the image has actually loaded
// - a tasteful brand-colored placeholder if no URL was provided yet,
//   so a missing cloud-storage link never breaks the layout.
export default function SmartImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  eager = false,
}) {
  const [loaded, setLoaded] = useState(false);

  if (!hasImage(src)) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-ink-soft via-ink to-teal-dim/40 ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,_#F4F0E8_1px,_transparent_0)] [background-size:18px_18px]" />
        <TrioMark className="h-8 w-11 text-brass/50" animate={false} />
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        data-loaded={loaded}
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
