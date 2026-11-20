# GHL Bangladesh — community site

The GHL Bangladesh homepage (design "Home v1"), built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com) on the folder structure of the [Astroplate](https://github.com/zeon-studio/astroplate) boilerplate.

## Run it

Needs Node.js 22.12 or newer and pnpm.

```bash
pnpm install
pnpm dev        # local preview at http://localhost:4321
pnpm build      # production files in dist/
pnpm preview    # serve the built dist/ folder
```

## Where things live

| What you want to change | File |
|---|---|
| Homepage text, photos, captions, links | `src/content/homepage/-index.md` |
| "Great things start with a connection" block | `src/content/sections/call-to-action.md` |
| Menu, footer columns, legal links | `src/config/menu.json` |
| Site title, logo, header button, meta tags, light/dark default | `src/config/config.json` |
| Colours and fonts | `src/config/theme.json` (turned into `src/styles/generated-theme.css` on every build) |
| Page sections | `src/layouts/partials/` (`Banner`, `AudienceStrip`, `Community`, `EventGallery`, `Story`, `ChapterLeader`, `CallToAction`, `Header`, `Footer`) |
| Shared pieces | `src/layouts/components/` (`Button`, `Logo`, `ScrollProgress`, `ThemeSwitcher`) |
| Styles | `src/styles/` (`base`, `components`, `buttons`, `navigation`, `utilities`) |
| Images and video | `public/images/community/` |

In any `title` field of the content files, `**bold**` text becomes the green-blue-yellow gradient and `*italic*` text the green accent.

**Light and dark mode:** `settings.default_theme` in `src/config/config.json` is `"system"` (follows each visitor's device). Set it to `"dark"` or `"light"` to use one mode for everyone.

**Extra pages:** a Markdown file in `src/content/pages/` becomes a page at the same name, for example `privacy-policy.md` → `/privacy-policy`. The folder is empty for now, so the build prints a notice that the `pages` collection is empty.

## Other addresses

- `/v1/` forwards to the homepage (this design used to live there).
- `/v2/` is the second design, kept unchanged as a static page in `public/v2/`.

## Deploy

`.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages on every push to `main`. In the repository settings, **Pages → Build and deployment → Source** must be set to **GitHub Actions**.

On GitHub Pages the site sits in a sub-folder, which the workflow handles through the `BASE_PATH` and `SITE_URL` environment variables. Canonical and social-sharing links always use `base_url` from `src/config/config.json` (`https://ghlbangladesh.com`).

## Credits

Folder structure, theme generator and content shortcodes from Astroplate by Zeon Studio, MIT licence (`LICENSE-ASTROPLATE`).
