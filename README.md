# LB Beauty — Booking Requests Website

## Upload to GitHub Pages

1. Unzip the download.
2. In your `LB_Beauty_Booking` repository, select **Add file → Upload files**.
3. Upload **all the files and the `assets` folder** from inside the unzipped folder, so `index.html` is in the repository root. Replace existing files and **Commit changes**.
4. Under **Settings → Pages**, select **Deploy from a branch**, `main`, `/(root)`.
5. Visit `https://matasgrm.github.io/LB_Beauty_Booking/`.

## Booking details

The website prepares a request email addressed to `matas2f@yahoo.co.uk` using the visitor's email app. **The request is not automatically sent**; visitors must press Send in their email app. The website does not have a database, take payments, or confirm available appointments.

## Change prices or contact information

Edit `config.js`. Current services: Nail Appointment £35, LVL Lashes £60, Microneedling £80/session. Change durations as appropriate.

## Instagram showcase

Instagram public posts cannot be automatically retrieved as a live *latest three posts* feed using a plain GitHub Pages site without an authorised integration or feed service. The page links to `@lily.b.beauty`. To showcase three verified posts, edit the `instagramPosts` array in `config.js` and paste three post/reel URLs, newest first. Official embeds will appear in the footer showcase. They **do not automatically refresh**.

Example:

```js
instagramPosts: [
  'https://www.instagram.com/p/POST_ID_1/',
  'https://www.instagram.com/p/POST_ID_2/',
  'https://www.instagram.com/reel/POST_ID_3/'
],
```

For live automatic updates, use a service offering an authorised Instagram feed widget or a server-side Instagram Graph API integration.

## Logo

Replace `assets/lb-beauty-logo.png` with a revised logo of the same filename if needed.


### Logo and Instagram follow banner
The site uses the two exact images provided by LB Beauty: `lb-beauty-logo.png` and `instagram-follow.png`. Upload both image files to the repository ROOT, alongside `index.html` (do not place them in another folder). The Instagram banner links to https://www.instagram.com/lily.b.beauty/. After publishing, hard refresh the website if an old version is cached.
