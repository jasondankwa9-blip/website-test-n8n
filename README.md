# Colours Wood Works — Website

Multi-page marketing site for Colours Wood Works, a bespoke joinery and custom furniture
business based in Pokuase Mayera (Ga West Municipal, Greater Accra), serving customers
nationwide across Ghana.

Plain HTML/CSS/JS — no build step, no framework, no external dependencies.

## Pages
- `index.html` — Home (hero slideshow, quote heading, project carousel, category grid, finishes, magazine, testimonials)
- `kitchens.html`, `wardrobes.html`, `beds.html`, `furniture.html` — one gallery page per category
- `gallery.html` — overview linking to the four category pages
- `about.html` — brand story, values, find us
- `policy.html` — booking / payment / delivery policy
- `how-to-book.html` — step-by-step booking process + payment methods
- `faq.html` — frequently asked questions (accordion)
- `contact.html` — address, phone, WhatsApp, map

## Shared files
- `styles.css` — all styles, mobile-first (breakpoints at 640 / 1024 / 1440px)
- `script.js` — nav toggle, carousels, back-to-top, cookie consent banner

## Before going live, replace (search the code for `[Replace:` and `REPLACE`)
- All `placeholder-tile` images with real project/hero/finish photos
- Founder name + photo, real brand-story paragraphs (`about.html`)
- Exact building/plot number in the address (shown on every page footer + `contact.html`)
- Operating hours (`contact.html`)
- Mobile Money / bank payment details + account name (`how-to-book.html`)
- The Google Maps embed `src` with the real embed URL from your verified Google Business Profile (`contact.html`)
- Magazine article titles/images (`index.html`)
- Real client testimonials (`index.html`)
- Social links in the footer and About page
- `og:image` / `og:url` meta tags on every page
- The cookie consent copy and the CMP script slot in each page's `<head>` (e.g. CookieYes or Cookiebot)

## Local preview
```
python3 -m http.server
```
then open `http://localhost:8000`.
