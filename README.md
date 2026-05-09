# Bineesh B S — Embedded Engineer Portfolio

A clean, professional portfolio with dynamic effects. Pure HTML/CSS/JS, no frameworks, free to host.

## Latest changes

- **New professional headline** — "Building reliable hardware for industrial IoT."
- **Removed AWS IoT** from skills and work history
- **Redesigned board gallery** — boards now grouped by project with numbered headers (01, 02, 03...) and a smarter layout: one large featured image + smaller renders arranged beside it for the 3-image projects, side-by-side pairs for the 2-image projects
- Each gallery group has its own header showing the project name and key spec
- Cleaner separation between projects with section dividers

## Folder structure

```
bineesh-portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── images/  (your PCB images — keep next to index.html)
```

## How to test locally

Double-click `index.html` — it runs in your browser.

## Deploy free with GitHub Pages

1. Sign up at https://github.com (free)
2. Create a new public repo named `yourusername.github.io`
3. Upload all files (including the `images` folder) → Commit changes
4. Settings → Pages → Source: "Deploy from a branch" → main → Save
5. Live at `https://yourusername.github.io` in ~1 minute

## Customizing

- **Project data:** edit the `PROJECTS` array in `script.js`
- **Colors:** edit `:root` variables at top of `style.css` (`--accent` is the copper)
- **Stats:** edit `data-count` numbers in `index.html`
- **Hero text:** edit the `.hero-title` block in `index.html`

## Other free hosts

Netlify, Vercel, and Cloudflare Pages all work the same way — drag-drop or connect GitHub, all free.
