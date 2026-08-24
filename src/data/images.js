// ============================================================================
// TRIO — IMAGE & CONTENT CONFIGURATION
// ----------------------------------------------------------------------------
// Nearly everything image-related is now dashboard-editable:
//  - Events: /content/events/*.json (see data/events.js)
//  - Team portraits + bios: /content/team/*.json (see data/team.js)
//  - What's New, Testimonials, Blog: see data/updates.js, testimonials.js, blog.js
//  - Homepage hero/about/story imagery: /content/settings/site-images.json
//  - Homepage studio gallery: /content/gallery.json
//  - Full gallery page: /content/site-gallery.json
//  - Latest video / live stream link: /content/settings/site.json
//
// Only the TRIO logo mark itself stays a static code asset (it doesn't
// change) — swap it by replacing src/assets/trio-logo.png and redeploying.
// ============================================================================

import trioLogo from "../assets/trio-logo.png";

import gallery from "../../content/gallery.json";
import siteGallery from "../../content/site-gallery.json";
import siteSettings from "../../content/settings/site.json";
import siteImagesContent from "../../content/settings/site-images.json";

export const brand = {
  logo: trioLogo,
};

// ----------------------------------------------------------------------------
// HERO / ABOUT / STORY IMAGERY — dashboard-editable
// Pulled from /content/settings/site-images.json, managed via /admin.
// ----------------------------------------------------------------------------
export const siteImages = siteImagesContent;

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
