# Prompt for Sticklight (paste as-is, attach the files in this folder)

Build a private team portal for the ItHurts.com content team. It is a small internal website, not public: add a login so only two people can get in (an owner and a social media manager), with no public sign-up. Everything else is static pages.

Use the attached files as the design and the content, exactly:
- `index.html` is the start page: a header with the brand mark, a hero with the button "Open the studio" (link from `config.js` → `studioUrl`), and six cards (Every day, The routine, Credits at a glance, Rules that never change, Ask the owner for, Useful links).
- `handbook.html` is the full handbook, with a sticky table of contents on wide screens.
- `checklist.html` is the daily checklist: ticks are kept per day on the viewer's browser and reset the next day (`app.js` has the logic).
- `styles.css` holds the look: warm off-white background, brand rust #883621 for headings, rules and the main button, Montserrat for headings, Source Serif 4 for reading text. Keep the dark theme in the file.
- `config.js` holds the only settings: `studioUrl`, `ownerContact`, `links`. Keep them editable without touching the pages.

Rules:
- Do not change the wording in the pages; it has been reviewed.
- Keep the pages readable at phone width with no sideways scrolling.
- Add `noindex` so search engines never list it.
- The "Open the studio" button opens the studio in a new tab. Never embed the studio in an iframe.
- Publish at `team.ithurts.com` when asked; until then any private address is fine.
