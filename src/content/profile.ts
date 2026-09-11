export const profile = {
  name: "Ishan Jain",
  handle: "Perseus",
  role: "computer science, data science specialisation",
  university: "Manipal University Jaipur",
  years: "2024–2028",
  year: "third-year",
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
    "i'm a third-year computer science student at Manipal University Jaipur, specialising in data science. most of what i build comes back to the same idea: state. most AI tooling forgets you the moment you close it — i build the kind that doesn't.",
    "i name my systems after Greek myth — Talos, Pantheon; my handle is Perseus. that's not decoration. deciding what to call a system is how i decide what it's supposed to be.",
    "long-term, i want to build products, start a company, and do research worth remembering. right now that means shipping systems that keep their memory, and freelance work for people who need a real product, not a template.",
  ],
  atAGlance: [
    { label: "based in", value: profile.location },
    { label: "studying", value: `${profile.role}` },
    { label: "year", value: `${profile.year} · ${profile.years}` },
    { label: "cgpa", value: profile.cgpa },
    { label: "open to", value: profile.openTo },
  ],
  coreTech: [
    ["Python", "TypeScript", "Next.js", "FastAPI", "PyTorch", "scikit-learn"],
    ["LangChain", "ChromaDB", "PostgreSQL", "Prisma", "Pandas", "SQLite"],
  ],
};
