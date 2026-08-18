// ============================================================================
// TRIO — UPDATES / WHAT'S NEW
// ----------------------------------------------------------------------------
// Announcements, releases, and news that aren't full "events" (no venue or
// registration) — e.g. a new song release. Managed via /admin → What's New.
// Individual files live in /content/updates/.
// ============================================================================

const modules = import.meta.glob("../../content/updates/*.json", { eager: true });

export const updates = Object.values(modules)
  .map((mod) => mod.default)
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export const getUpdateById = (id) => updates.find((u) => u.id === id);
