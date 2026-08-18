// ============================================================================
// TRIO — TESTIMONIALS
// ----------------------------------------------------------------------------
// Managed via /admin → Testimonials. Individual files live in
// /content/testimonials/.
// ============================================================================

const modules = import.meta.glob("../../content/testimonials/*.json", { eager: true });

export const testimonials = Object.values(modules).map((mod) => mod.default);
