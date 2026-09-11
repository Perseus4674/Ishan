export type NowEntry = {
  id: string;
  label: string;
  heading: string;
  timeframe: string;
  bullets: string[];
};

export const nowEntries: NowEntry[] = [
  {
    id: "talos",
    label: "Talos",
    heading: "A self-hosted AI operating system",
    timeframe: "Ongoing",
    bullets: [
      "keeping Talos running as my own daily assistant, which is the real test suite — if a memory bug survives a week of actual use, it gets fixed that week.",
      "current focus is tightening the loop between the real-time screen context and the tool-using agents, so the system reacts to what's on screen instead of waiting to be asked.",
    ],
  },
  {
    id: "research",
    label: "Research",
    heading: "Early warning from intensive-care records",
    timeframe: "Ongoing",
    bullets: [
      "working through an early-warning problem on intensive-care time-series data — the kind that's irregular, heavily missing, and easy to accidentally cheat on with a careless preprocessing step.",
      "most of the current effort is validation, not modelling: making sure nothing in the pipeline sees the future before it's allowed to.",
    ],
  },
  {
    id: "freelance",
    label: "Freelance",
    heading: "Made-to-order storefronts for craft businesses",
    timeframe: "Ongoing",
    bullets: [
      "building made-to-order storefronts for craft businesses — two live builds so far, with admin panels designed for owners who've never run one before.",
      "full source handed over on every build, no lock-in. case studies go up when the sites do.",
    ],
  },
  {
    id: "university",
    label: "University",
    heading: "B.Tech, computer science with a data science specialisation",
    timeframe: "2024 — 2028",
    bullets: [
      "third year of a B.Tech in computer science with a data science specialisation at Manipal University Jaipur, holding an 8.5 CGPA.",
      "using coursework as a baseline and spending the rest of the time on the systems above — that's where the actual learning happens.",
    ],
  },
];
