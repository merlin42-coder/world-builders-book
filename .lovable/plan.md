
## Issues

**1. MailerLite signups aren't being recorded**

The current code POSTs to MailerLite's JSONP endpoint with `mode: "no-cors"`. That endpoint is JSONP (designed for GET requests with a `?callback=` param), not a JSON POST API. With `no-cors`, the browser sends the request but we can't read the response — and in practice MailerLite's JSONP endpoint silently ignores malformed POSTs, so the email never lands in the list. The user always sees "success" because we navigate regardless.

**2. Thank You page download link is broken**

It points to `/world-builders-preview.pdf` (a local file that doesn't exist). Needs to point to the Google Drive PDF, using a direct-download URL so the button actually downloads instead of opening Drive's viewer.

---

## Fix

### A. Reliable MailerLite signup via an edge function

Use MailerLite's official Subscribers API from a Lovable Cloud edge function. This is the only reliable server-side way to add subscribers (the public embedded-form endpoint is fragile and CORS-restricted).

Steps:
1. Ask the user for their **MailerLite API key** (Account → Integrations → API → Generate new token) and store it as a secret `MAILERLITE_API_KEY`.
2. Optionally ask for a **Group ID** so signups land in the "World Builders waitlist" group (otherwise they go to the default subscriber list).
3. Create edge function `subscribe-waitlist` that calls:
   `POST https://connect.mailerlite.com/api/subscribers`
   with `{ email, groups: [groupId] }` and `Authorization: Bearer <key>`.
4. Update `Index.tsx` to call this function via `supabase.functions.invoke('subscribe-waitlist', { body: { email } })`. Only navigate to `/thank-you` on success; show a toast error on failure.

### B. Fix the download link

In `ThankYou.tsx`, change `PREVIEW_PDF_URL` to the Google Drive direct-download URL:

```
https://drive.google.com/uc?export=download&id=17G74sN45qm3XiVb0U_jw1MOO4kUA43Wx
```

Keep the existing button styling. Add `target="_blank" rel="noopener"` so it works even if Drive redirects to a confirmation page for large files.

---

## Questions before implementing

1. Do you want me to set up the MailerLite API integration (recommended)? I'll need you to paste a **MailerLite API token**.
2. Do you have a specific **Group ID** in MailerLite for the World Builders waitlist, or should subscribers just be added to the general list?
