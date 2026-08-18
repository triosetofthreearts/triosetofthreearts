// Accepts a full YouTube watch/share/live URL and returns an embeddable
// URL, or null if it can't be parsed. Handles youtube.com/watch?v=,
// youtu.be/, youtube.com/shorts/, and youtube.com/live/ links.
export function toEmbedUrl(url) {
  if (!url || typeof url !== "string") return null;
  try {
    const u = new URL(url.trim());
    let videoId = "";
    if (u.hostname.includes("youtu.be")) {
      videoId = u.pathname.slice(1);
    } else if (u.pathname.includes("/shorts/")) {
      videoId = u.pathname.split("/shorts/")[1];
    } else if (u.pathname.includes("/live/")) {
      videoId = u.pathname.split("/live/")[1];
    } else {
      videoId = u.searchParams.get("v");
    }
    videoId = (videoId || "").split(/[?&]/)[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  } catch {
    return null;
  }
}
