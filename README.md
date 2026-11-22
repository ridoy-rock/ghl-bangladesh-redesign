# GHL Bangladesh

The community website for people in Bangladesh building with HighLevel—connecting agency owners, marketers, developers, and entrepreneurs through meetups, shared learning, and local conversations.

**[Visit the website](https://ghlbangladesh.com)** · **[Join the community](https://www.facebook.com/groups/highlevelbangladesh)**

## About the site

- Responsive homepage with a community meetup video and locally hosted fonts.
- Event photo gallery with an accessible photo viewer and keyboard navigation.
- Community story and chapter-leader introduction.
- Members page with confirmed profiles and links to their public accounts.
- HighLevel learning resources and volunteer opportunity updates.
- Logo-based favicons for browser tabs and Apple home screens.

The homepage redesign was contributed through [ridoy-rock/ghl-bangladesh-redesign](https://github.com/ridoy-rock/ghl-bangladesh-redesign) and merged into this repository.

## Technology

Built with Astro 6, TypeScript, Tailwind CSS 4, and React integrations. The production build generates static files in `dist/`.

## Local development

Use Node.js 22.12 or newer and npm. Install the locked dependencies, then start the development server:

```bash
npm ci
npm run dev
```

Open the local URL printed in the terminal (normally `http://localhost:4321`). Astro selects another port if that port is occupied.

| Command           | Purpose                                 |
| ----------------- | --------------------------------------- |
| `npm run dev`     | Start the local development server      |
| `npm run check`   | Run Astro and TypeScript diagnostics    |
| `npm run build`   | Generate the production site in `dist/` |
| `npm run preview` | Preview the production build locally    |

## Project structure

| Path                                | Contents                                                          |
| ----------------------------------- | ----------------------------------------------------------------- |
| `src/pages/`                        | Homepage, members, resources, volunteers, and other routes        |
| `src/components/community/`         | Shared community sections, gallery, logo, and buttons             |
| `src/layouts/CommunityLayout.astro` | Navigation, metadata, favicon links, and page layout              |
| `src/styles/community.css`          | Shared design styles and responsive behavior                      |
| `src/data/community.ts`             | Community links, confirmed member profiles, and resource listings |
| `public/images/community/`          | Logos, optimized event photos, video, and fonts                   |
| `public/favicon.svg`                | Favicon using the Bangladesh map-and-arrows logo emblem           |
| `docs/redesign.md`                  | Detailed design and content notes                                 |

## Deployment

The production site is hosted on Cloudflare Pages at **https://ghlbangladesh.com**, with this repository as its main source codebase. Build using `npm run build` and publish `dist/`.

The inherited `.github/workflows/deploy.yml` workflow is for a separate GitHub Pages preview; it is not the production Cloudflare deployment. `public/v2/` retains an earlier design preview, and `public/v1/` redirects to the homepage.

## Community

GHL Bangladesh brings people together to exchange practical knowledge and meet the people behind the work. Visit the [Facebook community](https://www.facebook.com/groups/highlevelbangladesh) for updates, or see the [volunteers page](https://ghlbangladesh.com/volunteers) for opportunity announcements.

Photographs, logos, and third-party trademarks remain the property of their respective owners. This repository does not grant a license to reuse them.
