# Lily Bethan Beauty — GitHub Pages booking website

An elegant, mobile-friendly booking enquiry website for Lily Bethan Beauty. No server, paid hosting or build tools needed.

## IMPORTANT: what the website does

**This is an appointment ENQUIRY form, not an automatic booking/calendar system.** Clients can select a service, date and time, fill in their details, then send their request through WhatsApp or email once you configure those contact details. The site does not know actual salon availability, save booking records or take payments. A booking must be confirmed manually.

To provide **real-time availability, confirmed appointments, deposits, reminders, and calendar management**, first make a Square Appointments, Fresha or Booksy booking page, then paste its link into `bookingProviderUrl` in `config.js`. This adds a direct live booking link on the page. You can also replace the main call to action with a link to that provider if you want *only* confirmed appointments.

## Setup (5–10 minutes)

1. Open `config.js` in any text editor.
2. Fill in `email` and/or `whatsappNumber` (international digits only, e.g. 447700900123). **Until you do, visitors can only copy their booking enquiry; it will not be sent.**
3. Add `instagramHandle`, address if desired, and edit the treatments, times, descriptions and **real prices**. `price: null` displays "Price on enquiry". The example prices are intentionally blank to avoid making up your prices.
4. To use your real logo, add a PNG or SVG file to the same folder and set `logoPath: 'logo.png'` (or your filename).
5. Optionally paste a Square/Fresha/Booksy real-time booking link into `bookingProviderUrl`.

## Publish on GitHub Pages

1. Log into github.com and select **New repository**.
2. Name it e.g. `lily-bethan-booking`. Choose **Public**.
3. Select **Add file → Upload files** and upload `index.html`, `styles.css`, `script.js`, and `config.js`, plus an optional logo. Commit changes. (You can also upload this README.)
4. In the repository open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**, branch **main**, folder **/(root)**. Click **Save**.
6. Once GitHub Pages has deployed, the address will follow `https://YOUR-USERNAME.github.io/lily-bethan-booking/` (replace YOUR-USERNAME with your exact username; the actual URL is shown in Settings → Pages).
7. Add the real URL to the Instagram bio, Instagram link sticker and Google Business Profile.

**Privacy:** GitHub Pages is a public static host. Never put passwords, private API keys or customer data in `config.js`. The booking form does not store client information on GitHub. When users choose to send an enquiry, their chosen messaging/email service handles the message. Update your privacy notice as appropriate before launch.

**Security:** Keep the repository public only with public-facing business contact details. Don't put secret booking platform credentials in any file.

## Changing appointments

Edit `config.js` on GitHub directly with the pencil icon and **Commit changes**. GitHub Pages will update the website after deployment.

## Files

- `index.html`: website content and booking form
- `styles.css`: styling and mobile layout
- `script.js`: treatment selection, request text and WhatsApp/email links
- `config.js`: **edit this first**
