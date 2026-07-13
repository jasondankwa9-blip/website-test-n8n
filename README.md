# Colours Wood Works — Website

Single-page marketing site for Colours Wood Works, a bespoke joinery and custom furniture
business based in Pokuase Mayera, serving customers nationwide.

Plain HTML/CSS/JS — no build step, no framework, no external dependencies.

## Files
- `index.html` — page structure and content
- `styles.css` — mobile-first styles (breakpoints at 640px / 1024px / 1440px)
- `script.js` — mobile nav toggle + cookie consent banner logic

## Before going live, replace:
- All `placeholder-tile` images with real project photos (search `[Replace:` in `index.html`)
- The exact street address, operating hours, and `og:image` / `og:url` meta tags
- The Google Maps embed `src` with the real embed URL from your verified Google Business Profile
- The cookie consent copy and the CMP script slot in `<head>` (e.g. CookieYes or Cookiebot)
- Social links in the footer

## Local preview
```
python3 -m http.server
```
then open `http://localhost:8000`.
