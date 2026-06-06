import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

// No "use client" needed — hero has no interactivity, server component is lighter.
// Entrance animation handled via tw-animate-css (already imported in globals.css).
// Motion stays in the project for interactive things like the nav mobile menu.

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col justify-center px-6 py-24"
    >
      <div className="max-w-4xl">
        <p className="mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 text-sm uppercase tracking-[0.2em] text-muted-foreground [animation-fill-mode:both] [animation-delay:350ms]">
          L&amp;T Engineer · IIT Madras M.Tech
        </p>

        <h1
          className="animate-in fade-in slide-in-from-bottom-4 duration-700 text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl [animation-fill-mode:both] [animation-delay:410ms]"
        >
          {siteConfig.name}
        </h1>

        <p
          className="mt-8 max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 text-balance text-xl leading-relaxed text-foreground/80 sm:text-2xl [animation-fill-mode:both] [animation-delay:470ms]"
        >
          Electrical engineer, Data science enthusiast —
          turning field experience in SCADA and infrastructure into models that
          see failures coming.
        </p>

        <div
          className="mt-10 flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 [animation-fill-mode:both] [animation-delay:410ms]"
        >
          <Button asChild size="lg">
            <a href="#work">See my work</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#contact">Get in touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
