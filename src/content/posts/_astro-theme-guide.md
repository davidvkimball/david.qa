---
title: Astro Theme Guide
date:
---
david.qa is based on Chiri, is a minimal blog theme built with [Astro](https://astro.build), offering customization options while preserving its clean aesthetic.

## References

- [[_formatting-reference|Formatting Reference]]: see markdown, embedded, and other formatting examples 
- [[_mdx-example.mdx|MDX Example]]: mdx file example
- [[_astro-suite-vault-minimal-guide|Obsidian Guide]]: how the bundled Obsidian vault is set up

---

## Basic Commands

- `pnpm new <title>` - Create a new post (use `_title` for drafts)

Draft posts will only appear in a dev environment like running locally.

## Main Files & Directories

- `src/content/about/about.md` - Edit the about section of the index page. Leave it empty if you don't want any content.
- `src/content/posts/` - All blog posts are stored here
- `src/config.ts` - Configure main site info and settings

```ts
// Site Info
site: {
  website: 'https://david.qa/', // Site domain
  title: 'david.qa', // Site title
  author: 'David V. Kimball', // Author name
  description: 'Questions asked and answered by me, David.', // Site description
  language: 'en-US' // Default language
},
```

```ts
// General Settings
general: {
  contentWidth: '35rem', // Content area width
  centeredLayout: true, // Use centered layout (false for left-aligned)
  themeToggle: true, // Show theme toggle button (uses system theme by default)
  postListDottedDivider: false, // Show dotted divider in post list
  footer: true, // Show footer
  fadeAnimation: false // Enable fade animations
},
```

```ts
// Date Settings
date: {
  dateFormat: 'MM-DD-YYYY', // Date format: YYYY-MM-DD, MM-DD-YYYY, DD-MM-YYYY, MONTH DAY YYYY, DAY MONTH YYYY
  dateSeparator: '.', // Date separator: . - / (except for MONTH DAY YYYY and DAY MONTH YYYY)
  dateOnRight: true // Date position in post list (true for right, false for left)
},
```

```ts
// Post Settings
post: {
  readingTime: false, // Show reading time in posts
  toc: false, // Show table of contents (when there is enough page width)
  imageViewer: true, // Enable image viewer
  copyCode: true, // Enable copy button in code blocks
  linkCard: true // Enable link card
}
```

## Post Frontmatter

Only `title` and `date` are required fields

```ts
---
title: 'Post Title'
date: '2025-07-10'
---
```

If either field is invalid or blank, the post won't show up.
## Syntax Highlighting

You can configure the theme via `shikiConfig` in `astro.config.ts`.

More details: [Syntax Highlighting | Astro Docs](https://docs.astro.build/en/guides/syntax-highlighting/)

```ts
import { defineConfig } from 'astro/config'

export default defineConfig({
  markdown: {
    shikiConfig: {
      light: 'github-light',
      dark: 'github-dark',
      wrap: false
    }
  }
})
```