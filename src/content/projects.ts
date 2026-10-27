export type Project = {
  slug: string;
  name: string;
  blurb: string;
  stack: string[];
  repo?: string;
  status?: string;
  featured?: boolean;
  ascii?: string;
};

export const talos: Project = {
  slug: "talos",
  name: "Talos",
  blurb:
    "A self-hosted AI operating system rather than a chat window. Memory and state stay on your machine; the model and speech run through APIs. Keeps everything it learns, exposes the same brain through two interfaces that share one state — close either and nothing is lost.",
  stack: ["Python", "ChromaDB", "SQLite", "Textual", "Streamlit", "EdgeTTS"],
  repo: "https://github.com/Perseus4674/Talos-AI-Os-showcase",
  featured: true,
  ascii: `talos - self-hosted, always on

terminal hud   \\
                 >-- orchestrator --> memory
web dashboard  /     tools            chroma + sqlite
                     gpt-4o-mini      survives restart`,
};

export const projects: Project[] = [
  talos,
  {
    slug: "insightiq",
    name: "InsightIQ",
    blurb:
      "Ask a spreadsheet a question in plain English. Works out which columns matter, runs the analysis, hands back the chart with the answer.",
    stack: ["Python", "Gemini", "Streamlit", "Pandas"],
    repo: "https://github.com/Perseus4674/InsightIQ",
  },
  {
    slug: "resume-screener",
    name: "Resume Screener",
    blurb:
      "Ranks resumes against a role and shows the reasoning behind every score, so a hiring manager can argue with a result instead of just accepting it.",
    stack: ["Python", "spaCy", "scikit-learn", "FastAPI"],
    repo: "https://github.com/Perseus4674/AI-resume-screener",
  },
  {
    slug: "investment-advisor",
    name: "Investment Advisor",
    blurb:
      "A research assistant for Indian equities. The first build was a monolith that collapsed under dependency conflicts; this one isolates every service, with four validation layers before any claim reaches the user. Ticker resolution built for Indian listings first. Includes an Account Aggregator co-pilot, a read-only tool-calling agent over sandboxed financial data.",
    stack: ["FastAPI", "LangChain", "ChromaDB", "Groq"],
    status: "In progress",
  },
  {
    slug: "exoscout",
    name: "ExoScout",
    blurb:
      "One network, shared trunk, two heads — predicting a continuous property and a classification from the same representation on NASA Kepler candidates, with explicit under/overfitting analysis.",
    stack: ["PyTorch", "scikit-learn"],
  },
  {
    slug: "predictive-maintenance",
    name: "Predictive Maintenance",
    blurb:
      "Failure prediction on industrial sensor data with heavily imbalanced classes, where accuracy is a meaningless metric and the real work is choosing what to measure instead.",
    stack: ["scikit-learn", "Pandas", "Python"],
  },
];

export const nonFeaturedProjects = projects.filter(
  (p) => !p.featured && p.slug !== "exoscout" && p.slug !== "predictive-maintenance"
);
