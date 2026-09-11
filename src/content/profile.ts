export const profile = {
  name: "Ishan Jain",
  handle: "Perseus",
  role: "Computer science, data science specialisation",
  university: "Manipal University Jaipur",
  years: "2024–2028",
  year: "Third-year",
  cgpa: "8.5",
  location: "Gurugram, India",
  openTo: "AI, ML, and backend internships for Summer 2027 — plus freelance full-stack builds",
  links: {
    github: "https://github.com/Perseus4674",
    linkedin: "https://linkedin.com/in/ishan-jain-cs",
    email: "ishanjain202@gmail.com",
  },
} as const;

export const aboutCopy = {
  paragraphs: [
    "I'm a third-year computer science student at Manipal University Jaipur, specialising in data science. Most of what I build comes back to the same idea: state. Most AI tooling forgets you the moment you close it — I build the kind that doesn't.",
    "I name my systems after Greek myth — Talos, Pantheon; my handle is Perseus. That's not decoration. Deciding what to call a system is how I decide what it's supposed to be.",
    "Long-term, I want to build products, start a company, and do research worth remembering. Right now that means shipping systems that keep their memory, and freelance work for people who need a real product, not a template.",
  ],
  atAGlance: [
    { label: "Based in", value: profile.location },
    { label: "Studying", value: `${profile.role}` },
    { label: "Year", value: `${profile.year} · ${profile.years}` },
    { label: "CGPA", value: profile.cgpa },
    { label: "Open to", value: profile.openTo },
  ],
  coreTech: [
    ["Python", "TypeScript", "Next.js", "FastAPI", "PyTorch", "scikit-learn"],
    ["LangChain", "ChromaDB", "PostgreSQL", "Prisma", "Pandas", "SQLite"],
  ],
};
