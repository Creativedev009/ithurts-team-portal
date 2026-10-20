# ItHurts team portal

A small private website for the content team: the front door to the ItHurts Studio, the handbook, and a daily checklist. Three pages, no server, nothing to install.

## Files

| File | What it is |
|---|---|
| `index.html` | Start page: "Open the studio" button, the daily mix, routine, credits, rules, links |
| `handbook.html` | The full Social Media Manager handbook |
| `checklist.html` | Daily tick-off list (kept per day on the viewer's browser) |
| `styles.css` | The look (brand rust, Montserrat + Source Serif, light and dark) |
| `config.js` | The only settings: the studio address, owner contact, useful links |
| `app.js` | Fills the pages from `config.js` and runs the checklist |
| `PROMPT.md` | The prompt to give Sticklight, with the files attached |

## Before you import

Open `config.js` and set:
- `studioUrl` to the studio's online address (for example `https://studio.ithurts.com`). Until the studio is hosted, the button has nowhere to go.
- `ownerContact` to how she should reach you (a name and a channel; never a password).

## Importing into Sticklight

1. Start a new project in Sticklight.
2. Paste the text of `PROMPT.md` into the prompt box and attach every file in this folder (or the zip).
3. Ask it to add a login for two people (you and her) with no public sign-up, then publish.
4. Connect the domain `team.ithurts.com` in Publish, and add that address to Cloudflare Access if you want a second gate.

The same folder also works anywhere that serves static files (Netlify, Cloudflare Pages, a folder on any web host), and as a private WordPress page if you paste the pages into Elementor's HTML widget.

## What it is not

It is not the studio. The studio (videos, posts, approvals, credits) stays its own app and needs its own hosting (see `../hosting.md`). The portal only links to it.
