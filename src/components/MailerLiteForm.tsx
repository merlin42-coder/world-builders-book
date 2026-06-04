import { useState, type FormEvent } from "react";
import { z } from "zod";

/**
 * Custom-styled waitlist form that posts directly to MailerLite's public
 * form endpoint. No backend, no API key, no iframe. On submit we fire a
 * no-cors POST (the JSONP endpoint accepts it) then redirect to the
 * thank-you page.
 */
const ENDPOINT =
  "https://assets.mailerlite.com/jsonp/1868409/forms/189250760004863515/subscribe";
const REDIRECT_URL = "https://book.worldbuildersguide.com/thank-you";

const schema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address." })
    .max(255),
});

const MailerLiteForm = () => {
  const [email, setEmail] = useState("");
  const [preferred, setPreferred] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const parsed = schema.safeParse({
      email,
      preferred_world_builders: preferred,
    });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Invalid input.");
      return;
    }

    setSubmitting(true);

    const body = new FormData();
    body.append("fields[email]", parsed.data.email);
    if (parsed.data.preferred_world_builders) {
      body.append(
        "fields[preferred_world_builders]",
        parsed.data.preferred_world_builders,
      );
    }
    body.append("ml-submit", "1");
    body.append("anticsrf", "true");

    try {
      await fetch(ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        body,
      });
    } catch {
      /* no-cors POST is fire-and-forget; ignore network read errors */
    }

    window.location.href = REDIRECT_URL;
  };

  return (
    <form onSubmit={onSubmit} className="w-full space-y-3" noValidate>
      <input
        type="email"
        name="fields[email]"
        required
        autoComplete="email"
        placeholder="you@example.com"
        aria-label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        maxLength={255}
        className="w-full h-12 px-4 rounded-md bg-navy-deep/60 border border-gold/40 text-parchment placeholder:text-parchment/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition-colors"
      />
      <input
        type="text"
        name="fields[preferred_world_builders]"
        placeholder="A World Builder you'd love to see (optional)"
        aria-label="Preferred world builder (optional)"
        value={preferred}
        onChange={(e) => setPreferred(e.target.value)}
        maxLength={200}
        className="w-full h-12 px-4 rounded-md bg-navy-deep/60 border border-gold/40 text-parchment placeholder:text-parchment/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition-colors"
      />
      <button
        type="submit"
        disabled={submitting}
        className="w-full h-12 px-6 rounded-md bg-gold text-navy-deep font-semibold hover:bg-gold/90 transition-colors disabled:opacity-70"
      >
        {submitting ? "Sending…" : "Get the Free Preview"}
      </button>
      {error && (
        <p className="text-sm text-[hsl(0,80%,75%)]" role="alert">
          {error}
        </p>
      )}
    </form>
  );
};

export default MailerLiteForm;