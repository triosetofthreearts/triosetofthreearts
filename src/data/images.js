// ============================================================================
// TRIO — IMAGE & CONTENT CONFIGURATION
// ----------------------------------------------------------------------------
// Event images live directly inside each event's JSON file in
// /content/events/ (see data/events.js) — editable via the /admin dashboard.
//
// Updates, testimonials, blog posts, the site gallery, homepage studio
// gallery, and site settings (latest video, live stream link) are all
// dashboard-editable too — see data/updates.js, data/testimonials.js,
// data/blog.js.
//
// Team portraits and core brand/site imagery below are not part of the
// dashboard (out of scope for now) — swap them by replacing the files in
// src/assets and re-deploying, same as before.
// ============================================================================

import trioLogo from "../assets/trio-logo.png";
import sabriPerformance from "../assets/sabri_brothers_performance.jpg";
import kashifRaza from "../assets/kashif_raza.jpg";
import sheebaLateef from "../assets/sheeba_lateef.jpg";
import altamashAbbas from "../assets/altamash_abbas.jpg";
import eventCandid1 from "../assets/studio/event_candid_1.jpg";
import studioTeamGroup from "../assets/studio/studio_team_group.jpg";

import gallery from "../../content/gallery.json";
import siteGallery from "../../content/site-gallery.json";
import siteSettings from "../../content/settings/site.json";

export const brand = {
  logo: trioLogo,
};

export const siteImages = {
  hero: sabriPerformance,
  aboutPrimary: sabriPerformance,
  aboutSecondary: eventCandid1,
  storyBreak: studioTeamGroup,
};

export const teamImages = {
  "kashif-raza": kashifRaza,
  "sheeba-lateef": sheebaLateef,
  "altamash-abbas": altamashAbbas,
};

// ----------------------------------------------------------------------------
// STUDIO / BEHIND-THE-SCENES GALLERY (homepage strip) — dashboard-editable
// Pulled from /content/gallery.json, managed via /admin.
// ----------------------------------------------------------------------------
export const studioImages = gallery.images || [];

// ----------------------------------------------------------------------------
// FULL SITE GALLERY (dedicated /gallery page) — dashboard-editable
// Pulled from /content/site-gallery.json, managed via /admin.
// ----------------------------------------------------------------------------
export const siteGalleryImages = siteGallery.images || [];

// ----------------------------------------------------------------------------
// SITE SETTINGS — dashboard-editable
// Pulled from /content/settings/site.json, managed via /admin.
// ----------------------------------------------------------------------------
export const settings = siteSettings;

// Simple helper: returns true if a usable URL was provided.
export const hasImage = (url) => typeof url === "string" && url.trim().length > 0;
