// ============================================================================
// TRIO — EVENTS DATA
// ----------------------------------------------------------------------------
// Events now live as individual JSON files in /content/events/ — this is
// what the CMS dashboard (/admin) edits directly. Each file is one event,
// with its own cover, poster, gallery, and video fields all in one place.
//
// You normally never need to touch this file. To add an event by hand
// instead of through the dashboard, copy an existing file in
// /content/events/, rename it, and edit the fields.
// ============================================================================

const modules = import.meta.glob("../../content/events/*.json", { eager: true });

export const events = Object.values(modules)
  .map((mod) => mod.default)
  .sort((a, b) => new Date(a.date) - new Date(b.date));

export const getEventById = (id) => events.find((event) => event.id === id);
