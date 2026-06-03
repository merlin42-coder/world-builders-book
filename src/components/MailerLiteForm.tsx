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
    <div
      ref={ref}
      className="wb-mailerlite"
      dangerouslySetInnerHTML={{ __html: FORM_HTML }}
    />
  );
};

export default MailerLiteForm;