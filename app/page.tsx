import { Hero } from "@/components/sections/hero";
import { Work } from "@/components/sections/work";

const placeholders = [
  { id: "about", label: "02 — About" },
  { id: "skills", label: "03 — Skills" },
  { id: "contact", label: "04 — Contact" },
];

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Work />

      {/* SECTION PLACEHOLDERS — replaced one by one as we build each */}
      {placeholders.map((section, i) => (
        <section
          key={section.id}
          id={section.id}
          className={`scroll-mt-16 border-t border-border ${
            i % 2 === 0 ? "bg-muted/40" : ""
          }`}
        >
          <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-center px-6 py-24">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-accent-warm">
              {section.label}
            </p>
            <h2 className="text-3xl tracking-tight text-foreground sm:text-4xl">
              Coming next
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Scaffolded — we build this out in order.
            </p>
          </div>
        </section>
      ))}
    </main>
  );
}
