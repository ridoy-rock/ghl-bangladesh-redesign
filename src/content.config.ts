import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const commonFields = {
  title: z.string(),
  description: z.string(),
  meta_title: z.string().optional(),
  // z.coerce.date() handles both Date objects and ISO string dates from frontmatter (Zod 4)
  date: z.coerce.date().optional(),
  image: z.string().optional(),
  draft: z.boolean(),
};

const button = z.object({
  enable: z.boolean(),
  label: z.string(),
  link: z.string(),
  // arrow character the original button text ended with; kept in the markup, visually replaced by the icon
  glyph: z.string().optional(),
});

// Pages collection schema: plain markdown pages such as /privacy-policy
const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/pages" }),
  schema: z.object({
    ...commonFields,
  }),
});

// Homepage collection schema
const homepageCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/homepage" }),
  schema: z.object({
    banner: z.object({
      label: z.string(),
      title: z.string(),
      content: z.string(),
      video: z.string(),
      image: z.string(),
      button,
      scroll_cue: z.string().optional(),
    }),
    audience: z.object({
      label: z.string(),
      list: z.array(z.string()),
    }),
    community: z.object({
      kicker: z.string(),
      title: z.string(),
      lead: z.string(),
      content: z.string(),
      benefits: z.array(
        z.object({
          label: z.string(),
          title: z.string(),
          content: z.string(),
        }),
      ),
    }),
    events: z.object({
      kicker: z.string(),
      title: z.string(),
      gallery: z.object({
        title: z.string(),
        photo_alt: z.string(),
        photos: z.array(
          z.object({
            image: z.string(),
            image_large: z.string(),
            caption: z.string(),
            alt: z.string(),
            size: z.enum(["big", "wide", "tall"]).optional(),
            width: z.number().default(1800),
            height: z.number().default(1201),
          }),
        ),
      }),
    }),
    story: z.object({
      kicker: z.string(),
      title: z.string(),
      organisers_label: z.string(),
      organisers: z.array(
        z.object({
          name: z.string(),
          image: z.string(),
          alt: z.string(),
          link: z.string().optional(),
          link_label: z.string().optional(),
        }),
      ),
      content: z.string(),
    }),
    chapter_leader: z.object({
      badge: z.string(),
      name: z.string(),
      image: z.string(),
      image_alt: z.string(),
      lead: z.string(),
      content: z.string(),
      links: z.array(
        z.object({
          label: z.string(),
          link: z.string(),
          aria_label: z.string().optional(),
        }),
      ),
    }),
  }),
});

// Call to Action collection schema
const ctaSectionCollection = defineCollection({
  loader: glob({
    pattern: "call-to-action.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    button,
  }),
});

// Export collections
export const collections = {
  // Pages
  homepage: homepageCollection,
  pages: pagesCollection,

  // sections
  ctaSection: ctaSectionCollection,
};
