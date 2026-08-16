// The TRIO signature: three unequal strokes, standing in for the three
// disciplines the studio is built on. Used sparingly — in the nav mark,
// as a scroll cue, and as a loading/transition motif. Never decorative
// filler; each appearance marks a genuine threshold (nav, section, load).

export default function TrioMark({ className = "", animate = true }) {
  return (
    <svg
      viewBox="0 0 40 28"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <rect
        x="2"
        y="10"
        width="4"
        height="18"
        className={animate ? "origin-bottom animate-[trio-a_2.6s_ease-in-out_infinite]" : ""}
        fill="currentColor"
      />
      <rect
        x="18"
        y="2"
        width="4"
        height="26"
        className={animate ? "origin-bottom animate-[trio-b_2.6s_ease-in-out_infinite]" : ""}
        fill="currentColor"
      />
      <rect
        x="34"
        y="14"
        width="4"
        height="14"
        className={animate ? "origin-bottom animate-[trio-c_2.6s_ease-in-out_infinite]" : ""}
        fill="currentColor"
      />
      <style>{`
        @keyframes trio-a { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(0.55); } }
        @keyframes trio-b { 0%, 100% { transform: scaleY(0.7); } 50% { transform: scaleY(1); } }
        @keyframes trio-c { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(0.4); } }
      `}</style>
    </svg>
  );
}
