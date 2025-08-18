# david.qa

A minimal blog based on [Chiri](https://github.com/the3ash/astro-chiri) (an [Astro](https://astro.build) theme) with a preconfigured minimal [Obsidian](https://obsidian.md) vault.

Check the [website](https://david.qa/) to see it in action.

## Features

- Built with Astro
- Works with Obsidian
- Responsive
- Light / Dark mode
- MDX
- KaTeX
- Sitemap
- OpenGraph
- RSS
- Preview Drafts

## Getting Started

1. [Fork](https://github.com/davidvkimball/david.qa/fork) this repository.

2. Run the following commands:

   ```bash
   git clone <your-repo-url>

   cd <your-repo-name>

   pnpm install

   pnpm dev
   ```

3. Edit `src/config.ts` and `src/content/about/about.md` to your liking.

4. Use `pnpm new <title>` to create new posts, or add your posts to `src/content/posts` with Obsidian.

5. You need to set adapter as follows before deploying to Netlify, Vercel, or other platforms, but you can set `linkCard` to `false` in `src/config.ts` to skip this step:
   - **Netlify**: `pnpm add @astrojs/netlify` and add `adapter: netlify()` in `astro.config.ts`.
   - **Vercel**: `pnpm add @astrojs/vercel` and add `adapter: vercel()` in `astro.config.ts`.
   - **Cloudflare Pages**: `pnpm add @astrojs/cloudflare` and add `adapter: cloudflare()` in `astro.config.ts`.
   - **Static (e.g. GitHub Pages)**: `pnpm add @astrojs/static` and add `adapter: static()` in `astro.config.ts`.
   - Refer to [Astro Deployment Guides](https://docs.astro.build/en/guides/deploy/) for more details.

&emsp;[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/davidvkimball/david.qa)

## Commands

- `pnpm new <title>` - Create a new post (use `_title` for drafts)

## References

- https://paco.me/
- https://benji.org/
- https://shud.in/
- https://retypeset.radishzz.cc/

## License

MIT
