# Revision: replace the borrowed visual language

The structure, content, and Perseus canvas stay exactly as they are. What changes is the surface — the current design borrows too heavily from gazijarin.com and reads as a reskin of it.

Work through these one at a time. Commit each. Don't touch the section order, the copy content, or `/projects`.

---

## Principle for this pass

The constellation canvas is the only genuinely original thing on the site. Build the visual identity **outward from it** — night sky, deep time, star catalogue — instead of from the dark-terminal-portfolio kit. Everything below follows from that.

Restraint matters more than novelty. One memorable element (the canvas), everything else quiet.

---

## 1. Palette — replace navy + mint

Remove `--mint` (#5CE1C8) entirely. The teal-on-navy combination is the single most recognisable borrowed element.

```
--void    #05060B   /* page background */
--deep    #0A0C16   /* alternating section background */
--panel   #101322   /* cards */
--line    #1C2033
--line-2  #2A3050
--text    #C8CEDF
--head    #F2F4FB
--muted   #8189A3
--amber   #E4B363   /* the only accent — starlight, used sparingly */
```

One accent, not two. Use `--amber` for links, focus rings, the active nav item, and small emphasis only. It should never fill a large area. Card backgrounds and borders stay neutral.

Update the canvas to match: stars render warm white to pale amber rather than mint, and the constellation lines become `rgba(228,179,99,.18)`.

---

## 2. Hero — remove the greeting formula

Delete `hi, ishan here.` and the blinking cursor. Both are lifted directly.

Replace with a full-bleed treatment: the constellation canvas spans the section behind the content rather than sitting beside it, at low opacity, with the text overlaid left-aligned. Name in large type, then a single declarative line about what I build, then the intro paragraph, then the one CTA.

```
Ishan Jain

I build systems that don't forget.

[intro paragraph]

[say hi]
```

The canvas stays interactive — pointer repulsion still works through the overlay. On mobile it drops to a contained block above the text rather than a background, because full-bleed behind text at 360px is unreadable.

---

## 3. Section headings — remove the slash device

Delete `/ about me` and the trailing rule entirely.

Replace with: a hairline rule **above** the heading spanning the content width, then the heading below it in sentence case, left-aligned, no accent colouring on any part of it. No eyebrow labels above headings.

Section names become plain: `About`, `Now`, `Systems`, `Research`, `Worlds`, `Contact`.

---

## 4. Bullets — remove `▹`

Replace every `▹` with a short horizontal hairline (a 6px `--line-2` rule, vertically centred against the first line of text). Quiet, structural, not a glyph.

---

## 5. Project cards — remove the folder icon

Delete the folder SVG from every card. It's the most recognisable single element of this template lineage.

Rebuild each card as: title, description, then a footer separated by a hairline containing the stack line on the left and a small GitHub link on the right. No icon at the top. No lift-on-hover — replace with a border colour change to `--line-2` only.

For cards with no repo, the footer shows the status text in `--muted` where the link would be.

---

## 6. Now section — remove the vertical tabs

Four tabs with a left accent border is the same borrowed pattern. Replace with four stacked entries, each showing its label, heading, timeframe, and bullets — all visible at once, no interaction. There are only four; hiding three of them behind tabs was never earning anything.

This removes the tablist ARIA wiring and the keyboard handler. Delete that code rather than leaving it unused.

---

## 7. Typography

Keep Inter for body. Replace Space Grotesk for headings with a face that carries more character at display size — try **Instrument Serif** or **Newsreader** for the name and section headings, keeping Inter for everything else. A serif against the night-sky palette moves this away from the tech-portfolio default entirely.

If the serif reads wrong once you see it, fall back to Inter Tight rather than back to Space Grotesk.

Keep JetBrains Mono, but only for the ASCII architecture diagram. Remove it from stack lines, labels, and timeframes — those become Inter at small size. A monospace face on every small label is template chrome.

---

## 8. Navigation

Lowercase nav links are part of the borrowed voice. Sentence case them.

Keep the scroll-spy. The active item is marked with `--amber` text only — no underline, no border.

---

## After each change

Tell me what you changed and show me the section. If any of these instructions makes the site worse when you see it rendered, say so instead of implementing it — I'd rather reject one item than ship something I have to undo.

Accessibility bar from the original spec still applies in full. Re-check contrast after the palette change — `--muted` on `--void` and `--amber` on `--panel` both need verifying at small sizes.
