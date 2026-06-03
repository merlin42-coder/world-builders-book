import { useEffect, useRef } from "react";

/**
 * MailerLite embedded form (account 1868409, form 42139146).
 * Submissions go directly from the visitor's browser to MailerLite —
 * no backend, no API key, no secrets. Compatible with GitHub Pages.
 *
 * The MailerLite Universal snippet and webforms.min.js are loaded
 * globally from index.html. On successful subscribe, MailerLite calls
 * the global `ml_webform_success_42139146` callback (defined in
 * index.html) which redirects to /thank-you.
 */
const FORM_HTML = `
<div id="mlb2-42139146" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-42139146">
  <div class="ml-form-align-center">
    <div class="ml-form-embedWrapper embedForm">
      <div class="ml-form-embedBody ml-form-embedBodyDefault row-form">
        <form class="ml-block-form"
              action="https://assets.mailerlite.com/jsonp/1868409/forms/42139146/subscribe"
              data-code=""
              method="post"
              target="_blank">
          <div class="ml-form-formContent">
            <div class="ml-form-fieldRow ml-last-item">
              <div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                <input aria-label="email" aria-required="true" type="email"
                       class="form-control" data-inputmask=""
                       name="fields[email]" placeholder="you@example.com"
                       autocomplete="email">
              </div>
            </div>
          </div>
          <input type="hidden" name="ml-submit" value="1">
          <div class="ml-form-embedSubmit">
            <button type="submit" class="primary">Get the Free Preview</button>
            <button disabled="disabled" style="display:none;" type="button" class="loading">
              <div class="ml-form-embedSubmitLoad"></div>
              <span class="sr-only">Loading...</span>
            </button>
          </div>
          <input type="hidden" name="anticsrf" value="true">
        </form>
      </div>
      <div class="ml-form-successBody row-success" style="display:none">
        <div class="ml-form-successContent">
          <h4>Thank you!</h4>
          <p>Redirecting you to your preview…</p>
        </div>
      </div>
    </div>
  </div>
</div>
`;

const MailerLiteForm = () => {
  const ref = useRef<HTMLDivElement>(null);

  // Nudge MailerLite's webforms.min.js to bind to the freshly mounted form.
  useEffect(() => {
    const w = window as unknown as { ml?: (...args: unknown[]) => void };
    if (typeof w.ml === "function") {
      try {
        w.ml("webforms", "embed");
      } catch {
        /* no-op */
      }
    }
  }, []);

  return (
    <>
      <style>{`
        .wb-mailerlite .ml-form-embedBody,
        .wb-mailerlite .ml-form-embedWrapper,
        .wb-mailerlite .ml-form-embedContainer {
          background: transparent !important;
          border: 0 !important;
          padding: 0 !important;
          margin: 0 !important;
          box-shadow: none !important;
          max-width: 100% !important;
          width: 100% !important;
        }
        .wb-mailerlite .ml-form-formContent { margin: 0 !important; }
        .wb-mailerlite .ml-form-fieldRow { margin: 0 !important; padding: 0 !important; }
        .wb-mailerlite form.ml-block-form {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          width: 100%;
        }
        @media (min-width: 640px) {
          .wb-mailerlite form.ml-block-form {
            flex-direction: row;
            align-items: stretch;
          }
          .wb-mailerlite .ml-form-fieldRow { flex: 1; }
        }
        .wb-mailerlite input[type="email"].form-control {
          width: 100% !important;
          height: 3rem !important;
          padding: 0 1rem !important;
          font-size: 1rem !important;
          color: hsl(var(--navy-deep, 220 40% 12%)) !important;
          background: hsl(var(--parchment, 40 30% 96%)) !important;
          border: 1px solid hsl(var(--gold, 40 60% 55%) / 0.5) !important;
          border-radius: 0.5rem !important;
          box-shadow: none !important;
          outline: none !important;
          -webkit-text-fill-color: hsl(var(--navy-deep, 220 40% 12%)) !important;
          opacity: 1 !important;
        }
        .wb-mailerlite input[type="email"].form-control::placeholder {
          color: hsl(var(--navy-deep, 220 40% 12%) / 0.55) !important;
        }
        .wb-mailerlite input[type="email"].form-control:focus {
          border-color: hsl(var(--gold, 40 60% 55%)) !important;
          box-shadow: 0 0 0 2px hsl(var(--gold, 40 60% 55%) / 0.3) !important;
        }
        .wb-mailerlite .ml-form-embedSubmit { margin: 0 !important; }
        .wb-mailerlite .ml-form-embedSubmit button.primary {
          display: inline-flex !important;
          align-items: center;
          justify-content: center;
          height: 3rem !important;
          padding: 0 1.5rem !important;
          font-size: 1rem !important;
          font-weight: 600 !important;
          line-height: 1 !important;
          color: hsl(var(--navy-deep, 220 40% 12%)) !important;
          background: hsl(var(--gold, 40 60% 55%)) !important;
          border: 0 !important;
          border-radius: 0.5rem !important;
          cursor: pointer !important;
          white-space: nowrap;
          width: 100%;
          transition: background-color 0.2s ease;
        }
        @media (min-width: 640px) {
          .wb-mailerlite .ml-form-embedSubmit button.primary { width: auto; }
        }
        .wb-mailerlite .ml-form-embedSubmit button.primary:hover {
          background: hsl(var(--gold, 40 60% 55%) / 0.9) !important;
        }
        .wb-mailerlite .ml-form-embedSubmit button.loading {
          height: 3rem !important;
          background: hsl(var(--gold, 40 60% 55%) / 0.7) !important;
          border-radius: 0.5rem !important;
          border: 0 !important;
        }
        .wb-mailerlite .ml-form-successBody {
          color: hsl(var(--parchment, 40 30% 96%));
        }
        .wb-mailerlite .ml-error-message,
        .wb-mailerlite .label-description p {
          color: #ff8a8a !important;
          font-size: 0.85rem !important;
          margin-top: 0.35rem !important;
        }
      `}</style>
      <div
        ref={ref}
        className="wb-mailerlite"
        dangerouslySetInnerHTML={{ __html: FORM_HTML }}
      />
    </>
  );
};

export default MailerLiteForm;