// ============================================================================
// TRIO — EVENTS DATA
// ----------------------------------------------------------------------------
// To add a new event, copy an object below, give it a unique `id`, and add
// matching image entries in `data/images.js` under `eventImages[id]`.
// Events are shown newest-first based on their order in this array.
// ============================================================================

export const events = [
  {
    id: "sur-shabd-aur-shakhsiyat",
    name: "Sur, Shabd aur Shakhsiyat",
    discipline: "Music & Conversation",
    date: "2026-09-12",
    dateLabel: "12 September 2026 · Saturday · 6 PM Onwards",
    location: "SPJIMR Auditorium, Bhavan's Campus, Andheri (West), Mumbai",
    presentedBy:
      "Bhavan's Cultural Centre, Andheri, in association with TRIO — Set of Three Arts",
    tagline:
      "A high-energy live performance blending traditional spiritual qawwali with beloved Bollywood classics — an evening of harmony, heritage & conversation with The Sabri Brothers.",
    description:
      "Sur, Shabd aur Shakhsiyat brings melody, word, and personality into one room for an evening with The Sabri Brothers. A high-energy live performance blends traditional spiritual qawwali with beloved Bollywood classics and crossovers, moving through a musical journey, an unscripted conversation with legends, and a live moment of interaction between the artists and the audience. Presented by Bhavan's Cultural Centre, Andheri, in association with TRIO — Set of Three Arts.",
    highlights: [
      "Sur & Shabd — the musical journey",
      "Shakhsiyat — in conversation with legends",
      "Live music interaction with legends",
      "Traditional qawwali woven with Bollywood classics & crossovers",
    ],
    externalLink: "",
    featured: true,
  },

  // Add your next announced event here, following the same shape —
  // for example:
  // {
  //   id: "your-event-slug",
  //   name: "Event Name",
  //   discipline: "Music" | "Film" | "Talks" | etc,
  //   date: "2026-10-01",
  //   dateLabel: "1 October 2026",
  //   location: "Venue, City",
  //   tagline: "One-line hook shown on the card.",
  //   description: "Longer paragraph shown on the event page.",
  //   highlights: ["Point one", "Point two", "Point three"],
  //   externalLink: "",
  //   featured: true,
  // },
];

export const getEventById = (id) => events.find((event) => event.id === id);
