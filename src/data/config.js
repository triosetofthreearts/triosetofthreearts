// ============================================================================
// TRIO — SITE CONFIGURATION
// ----------------------------------------------------------------------------
// Contact details, social links, and the event-registration form endpoint.
// Sourced directly from what you've provided — edit freely as things change.
// ============================================================================

export const contact = {
  email: "triosetof3arts@gmail.com",
  // Both numbers you gave us. `whatsapp` is used to build the WhatsApp
  // deep-link on the register form's confirmation step (digits only, with
  // country code, no + or spaces).
  phones: ["+91 75067 35354", "+91 99976 34582"],
  whatsapp: "917506735354",
  address:
    "2C/401 Harmony CHS, Patliputra Nagar, Oshiwara, New Link Road, Jogeshwari (West), Mumbai 400102",
};

export const socials = {
  youtube: "https://youtube.com/@trio-setofthreearts?si=RiS_V1e9aH0cWhKs",
  instagram: "https://www.instagram.com/trio_setofthreearts?igsh=YnlkNXFlbWppc2F3",
  facebook: "https://www.facebook.com/share/1CxqPx856t/",
};

// ----------------------------------------------------------------------------
// EVENT REGISTRATION FORM
// ----------------------------------------------------------------------------
// The register form (Name, Age, Contact, Email) needs somewhere to actually
// send its submissions — a static site can't send email or write to a
// spreadsheet on its own. Two ways to wire it up, easiest first:
//
// OPTION A — Formspree (recommended, ~10 minutes, free tier available)
//   1. Create a free account at https://formspree.io and a new form.
//   2. Set its notification email to triosetof3arts@gmail.com — every
//      submission lands in that inbox automatically.
//   3. Paste the form's endpoint URL below as FORMSPREE_ENDPOINT.
//   4. For a live spreadsheet: connect that same Formspree form to Google
//      Sheets via Zapier or Make (both have free tiers) — search
//      "Formspree Google Sheets Zapier" for a step-by-step guide.
//   5. For WhatsApp forwarding to +91 75067 35354 / +91 99976 34582: add a
//      second Zapier/Make step from the same trigger to the WhatsApp
//      Business API (or Twilio's WhatsApp API) — this needs a WhatsApp
//      Business API account, which is a separate signup from Formspree.
//
// OPTION B — No setup at all (current default)
//   FORMSPREE_ENDPOINT is left empty, so the form falls back to opening
//   the visitor's own email app with a pre-filled message addressed to
//   triosetof3arts@gmail.com. It works immediately with zero configuration,
//   but relies on the visitor actually hitting "send" themselves, and
//   doesn't touch a spreadsheet or WhatsApp automatically.
// ----------------------------------------------------------------------------
export const FORMSPREE_ENDPOINT = ""; // e.g. "https://formspree.io/f/xxxxxxx"
