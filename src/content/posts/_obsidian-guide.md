---
title: Obsidian Guide
date:
---
## Overview

All plugins, key bindings, and the theme can be customized to your liking, but this is what's on by default.

## Philosophy 

1. Minimalism first. 
2. Emphasis on focus and keeping things distraction-free. 
3. Little-to-no clickable UI elements - reliance on keyboard shortcuts instead.

## Theme

Fittingly, the [Minimal](https://minimal.guide/home) theme is used. It uses an understated color scheme with high contract options and a focus mode that helps immerse you in your content. 

The [Minimal Theme Settings](https://github.com/kepano/obsidian-minimal-settings) and [Hider](https://github.com/kepano/obsidian-hider) community plugins are also installed by default, giving you complete control over your experience. 

## CSS Snippets

A custom CSS snippet called `custom-draggable-top-area.css` is active so moving your window is easier when the window frame is hidden and there's no tab bar. 

`hide-add-properties-button.css` simply removes the button at the end of the list of properties. 

## Important Hotkeys

Because Obsidian's interface has been stripped down to its bare essence, relying on hotkeys is imperative. Here's a guide:
- New note: `CTRL + N`
- Open settings: `CTRL + ,`
- Command palette: `CTRL + P`
- Search vault: `CTRL + O`
- Open a new tab: `CTRL + T`
- Close current tab: `CTRL + W`
- Toggle left side panel: `CTRL + ALT + Z`
- Toggle right side panel: `CTRL + ALT + X`
- Toggle tab bar: `CTRL + ALT + S`
- Open homepage: `CTRL + M` 
- Add a new property: `CTRL + ;`
- Toggle reading view: `CTRL + E`

If you're on Mac, `CTRL` = `CMD`.

## Plugins 

Disabled default core plugins: 
- Backlinks
- Canvas
- Daily Notes

Community plugins enabled: 
- Astro Composer
- Default New Tab Page
- Disable Tabs
- Hider
- Homepage
- Minimal Theme Settings
- Paste image rename

### Astro Composer 

Handy for easily creating new notes as Astro blog posts. Just create a new note with `CTRL + N`, type in a title in Title case or with special characters, and the note or folder name generated is a kebab-case version of the title without special characters. This is ideal for automating post slugs. 

You can also define and set default frontmatter that can be generated automatically or manually set for any open note as well.

Once you've used Wikilinks or markdown links, you can also convert those automatically to internal links for Astro with the "Convert internal links for Astro" command. 

### Homepage and Default New Tab Page

Both of these work together so you're default screen is a `.base` file that's a directory of all of your blog posts, listed in reverse-chronological order. You're able to customize the note properties in the views to your liking. 

### Minimal Theme Settings, Disable Tabs, and Hider

As mentioned earlier, these plugins keep you focused and distraction-free while allowing for customization of your experience. 

Should you need to reveal any of the main hidden panels, you can use `CTRL + ALT Z` for the left side panel, `CTRL + ALT + X` for the right side panel, or `CTRL + ALT + S` for the tab bar. Pressing it again will hide it. 

### Paste Image Rename 

Quickly drag and drop image files or paste directly from your clipboard and give them proper, SEO-ready names. 

### Disable Tabs

This effectively makes it so opening any new tab replaces the current one only. Especially nice for when you're hiding the tab bar and don't want multiple tabs. When combined with the Homepage and New Default Tab plugins, `CTRL + T`, `CTRL + W`, and `CTRL + M` essentially all do the same thing.