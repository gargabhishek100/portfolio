// Edit the `skillGroups` array to update this section.

const skillGroups = [
  {
    category: "Machine Learning & Data Science",
    items: [
      "Python",
      "scikit-learn",
      "TensorFlow / Keras",
      "LSTM networks",
      "Time-series modeling",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Jupyter",
    ],
  },
  {
    category: "Infrastructure & Domain",
    items: [
      "SCADA & industrial control (DNP3, IEC 60870)",
      "Power systems (EMS, State Estimation)",
      "Electrical substations",
      "Smart grids",
      "Water infrastructure",
      "Predictive maintenance",
      "Construction planning & control",
      "Contract management",
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Git & GitHub",
      "Revit & Dynamo (BIM)",
      "Next.js / React",
      "MongoDB",
      "Google Gemini API",
      "Vercel",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-accent-warm">
            03 — Skills
          </p>
          <h2 className="text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl">
            What I work with
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="mb-5 font-sans text-sm font-semibold uppercase tracking-[0.15em] text-foreground">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
