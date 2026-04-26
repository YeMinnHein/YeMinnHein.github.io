// ============================================================
//  PORTFOLIO CONFIG — edit this file to update your portfolio
//  No coding knowledge required. Just change the values below.
// ============================================================

const PORTFOLIO_CONFIG = {

  // ── IDENTITY ──────────────────────────────────────────────
  name: "Ye Min Hein",
  role: "Full-Stack Developer",
  email: "yeminheinymh1@gmail.com",
  initials: "YMH",
  location: "Yangon, Myanmar",

  // ── HERO ──────────────────────────────────────────────────
  tagline: "I build fast, accessible, and thoughtful web experiences from database to interface.",

  // ── ABOUT ─────────────────────────────────────────────────
  about: [
    "I'm a full-stack developer with a passion for building products that are clean, performant, and genuinely useful or fun. I care deeply about the craft — whether that's architecting a scalable backend, designing a pixel-perfect UI, or shaving 200ms off a load time.",
    "When I'm not coding, I am experimenting with LLMs or AI and new tools. I'm currently open to new opportunities."
  ],

  // ── SOCIAL LINKS ──────────────────────────────────────────
  links: {
    github: "https://github.com/YeMinnHein",
    linkedin: "",
    twitter: "",
    resume: "",
  },

  // ── EXPERIENCE ────────────────────────────────────────────
  experience: [
    {
      date: "2026 — Now",
      role: "Freelance",
      company: "",
      desc: "Developing and building fun open source projects.",
    },
    {
      date: "2025 — 2026",
      role: "Junior Web Developer",
      company: "Mysol Tech",
      desc: "Maintained and optimized core legacy systems using Zend PHP. Developed internal tooling and modern web apps using Next.js and Laravel.",
    },
    {
      date: "2025",
      role: "Intern",
      company: "Mysol Tech",
      desc: "Built and deployed internal project features using Next.js, Laravel, and TypeScript.",
    },
  ],

  // ── SKILLS ────────────────────────────────────────────────
  skills: [
    { group: "Frontend", tags: ["React", "Next.js", "TypeScript", "CSS / Sass", "Tailwind", "Vite"] },
    { group: "Backend", tags: ["Node.js", "Express", "Laravel", "REST APIs"] },
    { group: "Databases", tags: ["PostgreSQL", "MySQL", "Redis", "Prisma"] },
    { group: "DevOps & Tools", tags: ["Docker", "AWS", "GitHub Actions", "Vercel", "Linux"] },
  ],

  // ── GITHUB INTEGRATION ────────────────────────────────────
  github: {
    username: "YeMinnHein",

    // Set to true to auto-fetch repos from the GitHub API.
    // Your public repos will be displayed and sorted by stars.
    autoFetch: true,

    // Max number of repos to show (ignored if manualPins is set below)
    limit: 6,

    // (Optional) Pin specific repo names to always show them first.
    // Leave as [] to show top repos by stars automatically.
    manualPins: [],
    // Example: manualPins: ["my-saas-app", "cli-toolkit", "portfolio"],

    // Repos to always hide (forks, old projects, etc.)
    exclude: ["yourusername.github.io"],
  },

  // ── MANUAL PROJECTS ───────────────────────────────────────
  // Shown ONLY when github.autoFetch is false, or as a fallback.
  manualProjects: [
    {
      num: "01",
      name: "Project Alpha",
      desc: "A full-stack SaaS application with real-time collaboration features, user authentication, and a subscription billing system.",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      live: "#",
      repo: "#",
    },
  ],

  // ── FOOTER ────────────────────────────────────────────────
  footerNote: "",

};
