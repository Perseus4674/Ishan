# Build my portfolio site

Build a personal portfolio site from scratch. Read this whole spec before writing any code, then set up the project and build it section by section.

---

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** for the few animations that need it
- Deployed to **Vercel**, no database, no CMS, no auth — all content lives in typed files under `src/content/`
- `next/font` for fonts, not `<link>` tags

Keep the code simple. If something works well in 10 lines, don't write 50. No state management library, no component library, no abstraction layers I didn't ask for. I will read every file you write.

Do **not** create a `CLAUDE.md`, and do **not** add `Co-Authored-By` trailers or any AI attribution to commits.

---

## Who I am (use this content — don't invent details)

**Ishan Jain** — third-year B.Tech student, Computer Science with a Data Science specialisation, at **Manipal University Jaipur** (2024–2028). CGPA **8.5**. Based in **Gurugram, India**.

- GitHub: `https://github.com/Perseus4674`
- LinkedIn: `https://linkedin.com/in/ishan-jain-cs`
- Email: `ishanjain202@gmail.com`

Open to AI, ML, and backend internships for Summer 2027. Also takes freelance full-stack builds. Long-term intent: build products, start a company, and do research worth remembering.

The thread through all my work is **state** — most AI tooling forgets you the moment you close it, and I build the kind that doesn't.

I name my systems after Greek myth (Talos, Pantheon; my handle is Perseus). That's not decoration — deciding what to call a system is how I decide what it's supposed to be.

---

## Site structure

Single-page scroll with a sticky nav and scroll-spy, **plus** one real sub-route:

| Route | Contents |
|---|---|
| `/` | hero → about → now → systems → research → worlds → contact |
| `/projects` | full archive of every project as a filterable table or list |

Nav links: `about · now · systems · research · worlds · contact`, plus GitHub / LinkedIn / email icons.

### Hero
Lowercase, conversational. Big line: **"hi, ishan here."** with a blinking cursor. Short intro paragraph. One CTA button ("say hi" → mailto).

Left side (or above on mobile) is an **interactive canvas showing the constellation Perseus** — real star positions, lines between them, ambient dust stars twinkling. Stars scatter away from the pointer and spring back to their true positions. Must be a `<canvas>` with `requestAnimationFrame`, DPR-aware, resize-aware, and **completely static if `prefers-reduced-motion: reduce`**. Give it an `aria-label` describing what it is.

### About
Two columns: prose on the left, a small "at a glance" card on the right (based in, studying, year, CGPA, open to). Under the prose, a two-column list of core technologies.

### Now — "what i'm doing now"
Vertical tabs (horizontal scroll on mobile), keyboard-navigable with arrow keys, proper `role="tablist"` / `role="tab"` / `role="tabpanel"` wiring. Four tabs: **Talos**, **Research**, **Freelance**, **University**.

### Systems
One large featured card for **Talos**, then a responsive grid of smaller project cards. Cards lift slightly on hover. Cards with a repo link to GitHub; cards without one show a small status flag instead ("in progress", "two builds").

### Research
One featured-style card. No grid.

### Worlds
Two cards. This section is about mythology, game design, and where my project names come from.

### Contact
Centred. Short heading, one paragraph, one big mailto button.

---

## Content

### Talos — featured, private source, showcase repo at `github.com/Perseus4674/Talos-AI-Os-showcase`
A self-hosted AI operating system rather than a chat window. Runs locally, keeps everything it learns, exposes the same brain through two interfaces that share one state — close either and nothing is lost.
- Long-term memory in ChromaDB, retrieved and injected into context before every reply
- Tool-using agents that launch applications and control the system, inside a bounded loop
- Real-time screen analysis feeding the same context everything else reads
- Local voice through EdgeTTS, so speech never leaves the machine

Stack: Python, ChromaDB, SQLite, Textual, Streamlit, EdgeTTS

For the featured card's visual, render a small monospace ASCII architecture diagram on a soft radial-gradient background:
```
talos — self-hosted, always on

terminal hud ─┐
              ├─► orchestrator ──► memory
web dashboard ┘     tools           chroma + sqlite
                    gpt-4o-mini     survives restart
```

### InsightIQ — `github.com/Perseus4674/InsightIQ`
Ask a spreadsheet a question in plain English. Works out which columns matter, runs the analysis, hands back the chart with the answer.
Stack: Python, Gemini, Streamlit, Pandas

### Resume Screener — `github.com/Perseus4674/AI-resume-screener`
Ranks resumes against a role and shows the reasoning behind every score, so a hiring manager can argue with a result instead of just accepting it.
Stack: Python, spaCy, scikit-learn, Streamlit

### Investment Advisor — no repo, flag "in progress"
A research assistant for Indian equities. The first build was a monolith that collapsed under dependency conflicts; this one isolates every service, with four validation layers before any claim reaches the user. Ticker resolution built for Indian listings first.
Stack: FastAPI, LangChain, ChromaDB, Groq

### Made-to-Order Commerce — no repo, flag "two builds"
Storefronts for craft businesses whose stock is produced rather than held, which breaks most off-the-shelf e-commerce assumptions. Admin panels built for owners who have never used one. Full source handed over, no lock-in. Case studies go up when the sites do. **Do not name the clients.**
Stack: Next.js, TypeScript, Prisma, PostgreSQL, Auth.js

### ExoScout — no repo
One network, shared trunk, two heads — predicting a continuous property and a classification from the same representation on NASA Kepler candidates, with explicit under/overfitting analysis.
Stack: PyTorch, scikit-learn

### Predictive Maintenance — no repo
Failure prediction on industrial sensor data with heavily imbalanced classes, where accuracy is a meaningless metric and the real work is choosing what to measure instead.
Stack: scikit-learn, Pandas, Python

### Research: Early warning from intensive-care records — unpublished
Transformer architectures on irregular, heavily missing clinical time-series. The interesting problem isn't the model — the standard preprocessing conveniences leak information from the future into the past, and most published results are inflated by some version of that.
- Strict temporal validation, no imputation drawing on data after the prediction point
- Architecture and preprocessing decisions documented for reproduction, not just for the headline number

Stack: PyTorch, MIMIC-IV, temporal fusion architectures, pytest
End with: "Methodology and current results available on request."

**Important: do not name this project, do not write "sepsis" anywhere on the site, and do not link a repo.** Method and framing only.

### Worlds — card 1: Pantheon
An original game concept built around gods, inheritance, and consequence. Design pillars first, mechanics second — the world has to hold together before anything is playable.

### Worlds — card 2: Talos, Perseus, Pantheon
Talos was the bronze automaton that guarded Crete and never slept, which is a reasonable name for an assistant meant to always be on. Perseus is the handle. The naming isn't decoration; it's how I decide what a system is supposed to be before I build it.

---

## Design

Dark, navy rather than pure black. Soft mint accent. Restrained.

```
--bg      #080D14
--bg-2    #0D1420
--panel   #111A26
--panel-h #16212F
--line    #1D2938
--line-2  #2A3849
--text    #D3DEEA
--head    #EAF2FA
--muted   #8496AA
--dim     #647689
--mint    #5CE1C8   /* accent */
--gold    #E8C87A   /* secondary, worlds section only */
```

Type:
- **Space Grotesk** — headings, nav brand, card titles
- **Inter** — body
- **JetBrains Mono** — small labels, stack lines, tab labels, the ASCII diagram

Section headings render as `/ about me` with the slash in mint, followed by a thin horizontal rule filling the remaining width.

Body copy is lowercase-leaning and conversational, never corporate. Sentence case for headings. No ALL-CAPS labels. No `→` glued onto button text.

Max content width around 1080px.

---

## Quality bar

- Fully responsive, mobile-first, working down to 360px. Real hamburger or slide-in menu on mobile — not just hidden nav links.
- `prefers-reduced-motion: reduce` disables the canvas animation, the cursor blink, and all transitions.
- Visible keyboard focus everywhere. Skip-to-content link. Tabs reachable and operable by keyboard.
- Semantic HTML — `<main>`, `<section>`, `<article>`, real heading hierarchy.
- Lighthouse accessibility 100, performance 95+.
- Proper metadata: title, description, Open Graph tags, `theme-color`, and a generated OG image.
- No layout shift on load.

---

## How to work

1. Scaffold the project, get it running, commit.
2. Build the shared layout — nav, scroll-spy, footer, fonts, tokens. Commit.
3. Build the hero including the canvas. Commit.
4. Build remaining sections one at a time, committing each.
5. Build `/projects`. Commit.
6. Accessibility and responsive pass. Commit.

Show me the file tree before you start writing components. After each section, tell me what you built and what you'd change — I'd rather hear your reservations than have you quietly pick for me.

If something in this spec is ambiguous or you think it's a bad idea, say so before building it rather than after.
