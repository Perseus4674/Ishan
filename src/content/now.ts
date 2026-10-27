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
    timeframe: "Paused",
    line: "Pipeline built and tested on synthetic data; paused until dataset access.",
  },
  {
    id: "university",
    label: "University",
    heading: "B.Tech, computer science with a data science specialisation",
    timeframe: "2024 — 2028",
    line: "Third year at Manipal University Jaipur, holding an 8.5 CGPA.",
  },
];
