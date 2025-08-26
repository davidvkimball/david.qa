---
title: Formatting Reference
date: 2025-07-01
---
This theme does not define more levels of headlines. If needed, you can define them in `src/styles/post.css`.

---

## Paragraph

Here's a practical example of a paragraph in Markdown. This text demonstrates how content flows naturally in a blog post.

You can use various formatting options like **bold**, _italic_, ~~strikethrough~~, and `code` within your paragraphs.

## Blockquotes

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

- Item
  - Subitem
  - Subitem

## Task List

- [ ] First item
- [ ] Second item
- [x] Third item

## Image

To hide the caption, start it with an underscore `_` or leave the alt text empty.

![HIKARI](./_assets/hikari.jpg)

## Tables

| Style    | Weight   | Other  |
| -------- | -------- | ------ |
| Normal   | Regular  | Text   |
| _Italic_ | **Bold** | `Code` |

## Code Blocks

```jsx
// Button.jsx

const Button = ({ text, onClick }) => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
    onClick?.()
  }

  return (
    <button className="btn" onClick={handleClick}>
      {text} ({count})
    </button>
  )
}
```

## Other Elements — sub, sup, abbr, kbd, mark

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

Press <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.

---


This theme includes built-in KaTeX support for rendering mathematical expressions in your content.

---

## Examples

- Inline math: $E = mc^2$
- Block math:

$$
\begin{equation}
\sum_{i=1}^{k+1} i = \left(\sum_{i=1}^{k} i\right) + (k+1)
\end{equation}
$$

$$
\begin{equation}
= \frac{k(k+1)}{2} + k + 1
\end{equation}
$$

$$
\begin{equation}
= \frac{k(k+1) + 2(k+1)}{2}
\end{equation}
$$

$$
\begin{equation}
= \frac{(k+1)(k+2)}{2}
\end{equation}
$$

$$
\begin{equation}
= \frac{(k+1)((k+1)+1)}{2}
\end{equation}
$$

---

## Ref

- [KaTeX Documentation](https://katex.org/docs/supported.html)

---


Use these directives to embed media:

```
::link{url="https://xxxxx.xxx"}

::spotify{url="https://open.spotify.com/type/xxxxx"}

::youtube{url="https://www.youtube.com/watch?v=xxxxx"}

::bilibili{url="https://www.bilibili.com/video/xxxxx"}

::github{repo="username/repo"}

::x{url="https://x.com/username/status/xxxxx"}

::neodb{url="https://neodb.social/category/xxxxx"}
```

```
🟡

When embedded content is still loading,
the table of contents positioning may be inaccurate.
```

## Link Card

::link{url="https://pitchfork.com/reviews/albums/ichiko-aoba-luminescent-creatures/"}

```
🟡

If you don’t need Link Card,
you can set `linkCard` to `false` in `src/config.ts`,
then you don't need to set adapter before building.
```

## Spotify

::spotify{url="https://open.spotify.com/track/41Y0ch6R3jzpJOZv6nhf9Z?si=6c82dbed65ab4853"}

::spotify{url="https://open.spotify.com/album/1kBPEN3NIVwjdmIjjNk9vB?si=Lz29MvjwRnKX9y3dhxlbaQ"}

## YouTube

::youtube{url="https://www.youtube.com/embed/GlhV-OKHecI?si=KdB4rRPLAMEK-ozf"}

## BiliBili

::bilibili{url="https://www.bilibili.com/video/BV1Vm421W7pX/?vd_source=c0bc2746a6d2b23de50d26376498b2ff"}

## GitHub

::github{repo="the3ash/astro-chiri"}

## X Post

::x{url="https://x.com/DAVID_LYNCH/status/1174367510893752321"}

## NeoDB (CN Only)

::neodb{url="https://neodb.social/album/5nD3R8gmnVlsoOBdyO8PA3"}

::neodb{url="https://neodb.social/movie/1bhogjXkNnlWWM0bf6aj8P"}

::neodb{url="https://neodb.social/book/4BqQ5mhfKMHPND3L6hf0Qh"}

::neodb{url="https://neodb.social/game/1hl18l0qD5UN93k8ZkCZ7Q"}