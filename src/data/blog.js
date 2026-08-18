// ============================================================================
// TRIO — BLOG
// ----------------------------------------------------------------------------
// Managed via /admin → Blog. Individual posts live in /content/blog/.
// ============================================================================

const modules = import.meta.glob("../../content/blog/*.json", { eager: true });

export const posts = Object.values(modules)
  .map((mod) => mod.default)
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export const getPostById = (id) => posts.find((p) => p.id === id);
