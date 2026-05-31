// Single source of truth for Work projects.
// Edit a project here — the Work section + (future) case-study pages read from this.

export type ProjectStatus = "live" | "in-progress";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  status: ProjectStatus;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "contract-intelligence",
    title: "Contract Intelligence",
    tagline:
      "Reads hundred-page construction tenders and extracts the commercial terms and required bid submittals in a single upload.",
    description:
      "EPC and government tenders run to hundreds of pages, and pulling out the key commercial terms and the full checklist of bid submittals is slow and error-prone. This full-stack tool runs an uploaded tender through Google Gemini with structured-extraction prompts — one pass returns a 20-field commercial summary, another lists every document the bidder must submit with its page and reason. Results persist with a searchable history, and long documents process in the background so the interface never blocks. Tested on real CPWD and NHAI contracts.",
    tech: ["React", "Express", "MongoDB", "Google Gemini", "PDF parsing"],
    status: "live",
    links: [
      {
        label: "Live demo",
        href: "https://contract-extraction-client.vercel.app/",
      },
      // To add a Code link, uncomment and confirm the repo is public:
      // { label: "Code", href: "https://github.com/gargabhishek100/contract-extraction-client" },
    ],
  },
  {
    slug: "predictive-maintenance",
    title: "Predictive Maintenance for Water Infrastructure",
    tagline:
      "An ML framework to predict failures in water-network assets before they happen — M.Tech research, IIT Madras × L&T.",
    description:
      "In-progress M.Tech research building machine-learning models for predictive maintenance of water infrastructure, tied to L&T's Hubballi–Dharwad 24×7 water supply project. Details and results will land here as the work develops.",
    tech: ["Python", "Time-series ML", "SCADA data"],
    status: "in-progress",
    links: [],
  },
];
