# Polish fixes

Five issues from reviewing the live site. Work through them in order, commit each separately.

Work on a branch, not main:

```
git checkout -b polish
```

---

## 1. The glass isn't reading

No backdrop gradient is visible through any card — they render as flat opaque panels. This is the main one.

Diagnose before changing values. In devtools, inspect a card and check whether `backdrop-filter` is actually in the computed styles or being dropped. The usual causes:

- An ancestor with `transform`, `filter`, `perspective`, `will-change`, or `contain` creates a containing block that silently kills `backdrop-filter` on descendants.
- The gradient layer sits at a `z-index` above the cards, or inside a stacking context the cards can't sample from.
- The gradients are positioned outside the content column, so there's genuinely nothing behind the cards to show through.

Fix the actual cause. Only once `backdrop-filter` is confirmed working, tune:

- Gradients anchored to the centre 1100px of the viewport, not the full width, so at least two sit directly behind the card grid
- Gradient opacity high enough to be plainly visible on bare background — if you can't see them with no cards on screen, they're too weak to see through glass
- Card background alpha around 0.28
- Lighter top and left borders than bottom and right, plus `inset 0 1px 0 rgba(255,255,255,0.05)` — the edge is what actually sells it

Report what the root cause turned out to be.

---

## 2. The right half of the page is empty

Text lines run about 470px inside a ~970px column, so About, Now and Contact all have a dead column on the right. The Now entries are worst — heading and body hard left, "Ongoing" floated hard right, nothing in between.

Widen the text measure to roughly 62ch, or narrow the content column so the empty space falls outside it rather than inside. Whichever reads better — but the page should not have a visibly unused half.

Check Contact too: heading, paragraph and button all sit in the left third of a wide column.

---

## 3. Card heights leave holes

In the Systems grid, InsightIQ and Resume Screener have a large gap between their description and their stack line, because the grid row is sized to Investment Advisor's longer text and content is top-aligned.

Make each card a flex column with `margin-top: auto` on the footer row, so the stack line and link sit at the bottom. The extra height becomes even spacing instead of a hole.

---

## 4. The Contact heading is nearly invisible

"Contact" renders far darker than "Worlds", "Now" or "Systems" — it reads as a bug rather than a choice. Find out why it's picking up a different colour and make it consistent with the other section headings.

---

## 5. Card descriptions are uneven

Investment Advisor runs five lines, Resume Screener runs three. Trim the longer descriptions so every card in the grid sits at three lines or fewer. Keep the specific detail and cut the connective tissue — don't make them generic.

Show me the rewrites before applying them.

---

## Afterwards

- Re-run the contrast audit against the brightest point the backdrop produces
- `npm run build` must pass
- Screenshot the homepage at desktop width and at 390px

Then push the branch so Vercel builds a preview:

```
git push -u origin polish
```

Don't merge to main — I'll compare the preview against the live site first.
