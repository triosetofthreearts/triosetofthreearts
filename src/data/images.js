// ============================================================================
// TRIO — IMAGE CONFIGURATION
// ----------------------------------------------------------------------------
// This is the ONLY file you need to edit to replace images across the site.
// Paste your cloud storage URLs (Google Drive direct links, S3, Cloudinary,
// etc.) as plain strings below and they'll override the starter images.
//
// A few slots below are pre-filled with real TRIO assets pulled from the
// materials you shared (logo, the Sur, Shabd aur Shakhsiyat flyer, and The
// Custodians slide) so the site isn't empty while you gather full-res
// photography. Swap any of them out at any time — just replace the string.
// If a slot is left empty (""), the site falls back to a tasteful
// brand-colored placeholder instead of breaking the layout.
// ============================================================================

import trioLogo from "../assets/trio-logo.png";
import sabriPerformance from "../assets/sabri_brothers_performance.jpg";
import surShabdPoster from "../assets/events/sur-shabd-poster.jpg";
import kashifRaza from "../assets/kashif_raza.jpg";
import sheebaLateef from "../assets/sheeba_lateef.jpg";
import altamashAbbas from "../assets/altamash_abbas.jpg";
import studioSession1 from "../assets/studio/studio_session_1.jpg";
import studioSession2 from "../assets/studio/studio_session_2.jpg";
import studioSession3 from "../assets/studio/studio_session_3.jpg";
import studioVocalist from "../assets/studio/studio_vocalist.jpg";
import studioTeamGroup from "../assets/studio/studio_team_group.jpg";
import eventJavedAkhtar from "../assets/studio/event_javed_akhtar.jpg";
import eventCandid1 from "../assets/studio/event_candid_1.jpg";

export const brand = {
  // Your TRIO logo. Currently the circular badge mark, cropped to a
  // transparent PNG. Swap for a higher-res export or a horizontal
  // lockup whenever you have one.
  logo: trioLogo,
};

export const siteImages = {
  // Full-bleed opening image, viewers see this in the first second.
  // Recommended: 2400x1600 or larger, landscape, high contrast.
  // Currently using the Sabri Brothers performance photo as a strong
  // placeholder — replace with your best hero-worthy shot when ready.
  hero: sabriPerformance,

  // Used in the "Who We Are" section of About.
  aboutPrimary: sabriPerformance,
  // Secondary supporting image in About, e.g. behind-the-scenes / candid.
  aboutSecondary: eventCandid1,

  // Wide editorial image used as a section break between Events and Team.
  storyBreak: studioTeamGroup,
};

// ----------------------------------------------------------------------------
// EVENT IMAGES
// Keyed by event id (must match the id used in data/events.js).
// `cover` shows in the event card + hero of the event detail page.
// `gallery` is an array of image URLs shown in the event's photo gallery.
// `video` is an optional embeddable URL (e.g. YouTube embed link).
// ----------------------------------------------------------------------------
export const eventImages = {
  "sur-shabd-aur-shakhsiyat": {
    // The official event flyer — used as the card/hero cover.
    cover: surShabdPoster,
    // The same flyer, kept full-frame (uncropped) for the dedicated
    // "Official Poster" block on the event page.
    poster: surShabdPoster,
    // Add more shots from the evening here as you get them — the
    // gallery layout looks best with 5-8 images of varying orientation.
    gallery: [surShabdPoster, sabriPerformance, "", "", ""],
    video: "",
  },
};

// ----------------------------------------------------------------------------
// TEAM PORTRAITS
// Keyed by team member id (must match the id used in data/team.js).
// Currently populated with the three Custodian portraits cropped from
// your team slide. Swap in higher-resolution, consistently-cropped
// portraits (3:4, natural light) whenever you have them.
// ----------------------------------------------------------------------------
export const teamImages = {
  "kashif-raza": kashifRaza,
  "sheeba-lateef": sheebaLateef,
  "altamash-abbas": altamashAbbas,
};

// ----------------------------------------------------------------------------
// STUDIO / BEHIND-THE-SCENES GALLERY
// Used in the "Currently In The Studio" homepage section. Each entry can be
// a plain image, or { src, caption } when a photo deserves a specific
// credit — e.g. a named guest. Add or remove entries as you get more shots.
// ----------------------------------------------------------------------------
export const studioImages = [
  studioSession1,
  studioSession2,
  studioTeamGroup,
  studioSession3,
  studioVocalist,
  { src: eventJavedAkhtar, caption: "With Javed Akhtar" },
  eventCandid1,
];

// Simple helper: returns true if a usable URL was provided.
export const hasImage = (url) => typeof url === "string" && url.trim().length > 0;
