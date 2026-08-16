import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { contact, FORMSPREE_ENDPOINT } from "../data/config.js";

const emptyForm = { name: "", age: "", phone: "", email: "" };

export default function RegisterModal({ open, onClose, eventName }) {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const isValid =
    form.name.trim() && form.age.trim() && form.phone.trim() && form.email.trim();

  const buildMessage = () =>
    `TRIO Event Registration\nEvent: ${eventName}\nName: ${form.name}\nAge: ${form.age}\nContact: ${form.phone}\nEmail: ${form.email}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;

    if (FORMSPREE_ENDPOINT) {
      setStatus("sending");
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, event: eventName }),
        });
        if (res.ok) {
          setStatus("sent");
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
    } else {
      // No form backend configured yet — fall back to opening the
      // visitor's email client with everything pre-filled. See
      // src/data/config.js for how to wire up full automation.
      const subject = encodeURIComponent(`TRIO Event Registration — ${eventName}`);
      const body = encodeURIComponent(buildMessage());
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
    }
  };

  const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    isValid ? buildMessage() : `Hi TRIO, I'd like to register for ${eventName}.`
  )}`;

  const handleClose = () => {
    setForm(emptyForm);
    setStatus("idle");
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-full max-w-md overflow-y-auto border border-ink-line bg-ink-soft p-8"
          >
            {status === "sent" ? (
              <div className="py-6 text-center">
                <p className="eyebrow text-brass">Thank You</p>
                <h3 className="font-display mt-4 text-3xl text-bone">
                  You're on the list.
                </h3>
                <p className="mt-4 text-bone/70">
                  {FORMSPREE_ENDPOINT
                    ? "We've received your registration and will be in touch soon."
                    : "Your email app should have opened with your details filled in — just hit send. You can also confirm instantly over WhatsApp below."}
                </p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="eyebrow mt-6 inline-flex items-center gap-2 border border-brass px-6 py-3 text-brass transition-colors duration-300 hover:bg-brass hover:text-ink"
                >
                  Confirm via WhatsApp →
                </a>
                <button
                  onClick={handleClose}
                  className="eyebrow mt-6 block w-full text-bone/50 hover:text-bone"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <p className="eyebrow text-brass">Register</p>
                <h3 className="font-display mt-3 text-3xl text-bone">
                  {eventName}
                </h3>
                <p className="mt-3 text-sm text-bone/60">
                  Fill in your details below, or register instantly over
                  WhatsApp.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <Field label="Full Name">
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={update("name")}
                      className="w-full border border-ink-line bg-transparent px-3 py-2 text-bone outline-none transition-colors focus:border-brass"
                    />
                  </Field>
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Age">
                      <input
                        required
                        type="number"
                        min="1"
                        value={form.age}
                        onChange={update("age")}
                        className="w-full border border-ink-line bg-transparent px-3 py-2 text-bone outline-none transition-colors focus:border-brass"
                      />
                    </Field>
                    <Field label="Contact No.">
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={update("phone")}
                        className="w-full border border-ink-line bg-transparent px-3 py-2 text-bone outline-none transition-colors focus:border-brass"
                      />
                    </Field>
                  </div>
                  <Field label="Email">
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      className="w-full border border-ink-line bg-transparent px-3 py-2 text-bone outline-none transition-colors focus:border-brass"
                    />
                  </Field>

                  {status === "error" && (
                    <p className="text-sm text-brass">
                      Something went wrong sending that — please try the
                      WhatsApp option below instead.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={!isValid || status === "sending"}
                    className="eyebrow w-full bg-brass py-3 text-ink transition-opacity duration-300 hover:opacity-90 disabled:opacity-40"
                  >
                    {status === "sending" ? "Sending…" : "Submit Registration"}
                  </button>
                </form>

                <div className="mt-4 flex items-center gap-3 text-bone/30">
                  <div className="h-px flex-1 bg-ink-line" />
                  <span className="text-xs uppercase tracking-widest">or</span>
                  <div className="h-px flex-1 bg-ink-line" />
                </div>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="eyebrow mt-4 flex w-full items-center justify-center gap-2 border border-bone/30 py-3 text-bone/80 transition-colors duration-300 hover:border-brass hover:text-brass"
                >
                  Register via WhatsApp →
                </a>

                <button
                  onClick={handleClose}
                  className="eyebrow mt-6 block w-full text-center text-bone/40 hover:text-bone"
                >
                  Cancel
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="eyebrow text-bone/50">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
