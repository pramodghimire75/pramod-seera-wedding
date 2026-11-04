# Pramod & Seera — Wedding Invitation Website

A mobile-friendly bilingual (English/Nepali) wedding invitation for Pramod Ghimire and Seera Sedhai. The design uses a traditional maroon, cream and gold palette with decorative Ganesha artwork.

## Dates and invitation details

- **15 February 2027:** Wedding ceremony (the couple will marry on this date).
- **16 February 2027:** Wedding reception — this is the main guest invitation date.
- **Parents:** Tika Ram Ghimire & Mina Kafle (groom); Ram Chandra Sedhai & Shiva Devi Bhattrai (bride). Names are displayed in English and Nepali.
- **Location:** Jhapa, Nepal. Exact venue and start time are placeholders until confirmed.

## Files

- `index.html` — invitation page, schedule and RSVP form
- `style.css` — responsive styling
- `script.js` — live countdown and English/Nepali language toggle
- `ganesha-art.png` — decorative Ganesha artwork
- `thank-you.html` — RSVP confirmation page
- `netlify.toml` — Netlify publish directory and basic response headers

## Deploy to Netlify from GitHub (free hosting option)

1. Sign in to [GitHub](https://github.com/) and create a **New repository** (for example `pramod-seera-wedding`). You can make it Public or Private.
2. In the new repository choose **Add file → Upload files**. Upload the *contents* of this folder (not the ZIP file itself), including `index.html`, `style.css`, `script.js`, `ganesha-art.png`, `thank-you.html`, `netlify.toml`, and this README. Commit the upload.
3. Sign in to [Netlify](https://app.netlify.com/) and choose **Add new project → Import an existing project**.
4. Choose **GitHub**, authorise Netlify if prompted, and select your `pramod-seera-wedding` repository.
5. Leave the build command blank. Set the publish directory to `.` if Netlify does not detect it automatically. Click **Deploy**.
6. Netlify will provide a public `*.netlify.app` URL. You can change the site name in the site's domain settings.
7. Future commits pushed to the connected GitHub branch will automatically trigger a new Netlify deployment.

## RSVP form setup and testing

The form uses Netlify Forms (`data-netlify="true"`). After deploying, open the site's **Forms** area in Netlify. If form detection is not enabled, enable it and redeploy. Submit a test RSVP using the public website and verify that it appears in the Netlify dashboard. Check the current Netlify plan limits before relying on the form for a large guest list.

## Customise later

Edit `index.html` for names, dates, venue, times and invitation wording. Edit `style.css` for appearance. Edit `script.js` for countdown or language behaviour. Replace `ganesha-art.png` with another image using the same filename if you want to change the artwork. Commit and push changes to GitHub; Netlify will redeploy automatically.

Before sharing widely, replace the exact venue and time placeholders and test the RSVP form on a phone. The countdown is set to Nepal time (UTC+05:45).
