export type NowEntry = {
  id: string;
  label: string;
  heading: string;
  timeframe: string;
  line: string;
};

export const nowEntries: NowEntry[] = [
  {
    id: "talos",
    label: "Talos",
    heading: "A self-hosted AI operating system",
    timeframe: "Ongoing",
    line: "Running as my own daily assistant while I tighten the loop between screen context and the tool-using agents.",
  },
  {
    id: "research",
    label: "Research",
    heading: "Early warning from intensive-care records",
    timeframe: "Ongoing",
    line: "Mostly validation rather than modelling — making sure nothing in the pipeline sees the future before it's allowed to.",
  },
  {
    id: "freelance",
    label: "Freelance",
    heading: "Made-to-order storefronts for craft businesses",
    timeframe: "Ongoing",
    line: "Two live builds so far, with admin panels designed for owners who've never run one before.",
  },
  {
    id: "university",
    label: "University",
    heading: "B.Tech, computer science with a data science specialisation",
    timeframe: "2024 — 2028",
    line: "Third year at Manipal University Jaipur, holding an 8.5 CGPA.",
  },
];
