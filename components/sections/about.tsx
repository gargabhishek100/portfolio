// Edit the narrative paragraphs and the `timeline` array below to update this section.

const timeline = [
  {
    period: "2025 — 2027",
    role: "M.Tech, Construction Technology & Management",
    org: "IIT Madras",
    detail:
      "Predictive-maintenance ML research, in collaboration with L&T (Hubballi–Dharwad 24×7 water supply).",
  },
  {
    period: "2023 — Present",
    role: "Graduate Engineering Trainee",
    org: "Larsen & Toubro",
    detail:
      "Electrical planning and SCADA commissioning on the SMCB water-supply scheme.",
  },
  {
    period: "B.Tech",
    role: "Electrical Engineering",
    org: "Jabalpur Engineering College",
    detail: "Foundation in power systems and electrical engineering.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-16 border-t border-border bg-muted/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-accent-warm">
            02 — About
          </p>
          <h2 className="text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl">
            The combination is the point
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              I sit at the seam between physical infrastructure and software. My
              base is electrical engineering, but the work hasn&apos;t stayed in
              one lane: at L&amp;T I&apos;ve helped plan electrical systems and
              commission the SCADA controls behind a major water-supply scheme,
              and at IIT Madras I&apos;m researching machine-learning models that
              predict infrastructure failures before they happen.
            </p>
            <p>
              Large infrastructure projects generate enormous amounts of data
              that mostly goes unused. What interests me is turning it into
              decisions — which asset to service first, which clause in a
              300-page tender actually matters, which failure is coming next. My
              Contract Intelligence and predictive-maintenance work both come
              from that same instinct.
            </p>
            <p>
              I&apos;m doing my M.Tech at IIT Madras while still on
              L&amp;T&apos;s rolls, which keeps me close to real projects as I
              build. I&apos;m drawn to roles and collaborations where engineering
              domain knowledge and ML actually meet — not one or the other.
            </p>
          </div>

          <div>
            <ul className="space-y-8">
              {timeline.map((item) => (
                <li key={item.role} className="border-l-2 border-border pl-6">
                  <p className="text-xs uppercase tracking-[0.15em] text-accent-warm">
                    {item.period}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold tracking-tight text-foreground">
                    {item.role}
                  </h3>
                  <p className="text-sm text-foreground/70">{item.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
