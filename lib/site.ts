export const siteConfig = {
  name: "Abhishek Garg",
  role: "Engineer · ML · Infrastructure",
  // TODO: replace these three with your real values
  email: "ce25m104@smail.iitm.ac.in",
  social: {
    github: "https://github.com/gargabhishek100",
    linkedin: "https://www.linkedin.com/in/abhishek-garg-b6636a231/",
  },
  resumeUrl: "/resume.pdf", // TODO: drop resume.pdf into /public, or this 404s
  nav: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
} as const;