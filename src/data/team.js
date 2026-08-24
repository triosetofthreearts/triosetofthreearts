// ============================================================================
// TRIO — TEAM DATA
// ----------------------------------------------------------------------------
// Team members live as individual JSON files in /content/team/ — editable
// via the /admin dashboard (name, role, bio, and photo all together).
// ============================================================================

const modules = import.meta.glob("../../content/team/*.json", { eager: true });

export const team = Object.values(modules)
  .map((mod) => mod.default)
  .sort((a, b) => (a.order || 0) - (b.order || 0));
