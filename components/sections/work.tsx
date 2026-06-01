import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, type ProjectStatus } from "@/lib/projects";

function StatusBadge({ status }: { status: ProjectStatus }) {
  const isLive = status === "live";
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
      <span
        className={`size-2 rounded-full ${
          isLive ? "bg-emerald-500" : "bg-accent-warm"
        }`}
      />
      {isLive ? "Live" : "In progress"}
    </span>
  );
}

export function Work() {
  return (
    <section id="work" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-accent-warm">
            01 — Selected Work
          </p>
          <h2 className="text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Things I&apos;ve built
          </h2>
        </div>

        <div className="flex flex-col">
          {projects.map((project, i) => (
            <article
              key={project.slug}
              className="grid grid-cols-1 gap-6 border-t border-border py-12 md:grid-cols-[8rem_1fr] md:gap-12"
            >
              <div className="flex flex-row items-center justify-between md:flex-col md:items-start md:justify-start md:gap-3">
                <span className="font-heading text-2xl text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <StatusBadge status={project.status} />
              </div>

              <div className="max-w-2xl">
                <h3 className="text-2xl tracking-tight text-foreground sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-3 text-lg text-foreground/80">
                  {project.tagline}
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                {project.links.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                    {project.links.map((link) => {
                      // External links (http/https) open in a new tab.
                      // Internal routes (/ml-models etc.) use Next.js Link
                      // for client-side navigation — no full page reload.
                      const isExternal = link.href.startsWith("http");
                      const cls =
                        "group inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-accent-warm";
                      const icon = (
                        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      );

                      return isExternal ? (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cls}
                        >
                          {link.label}
                          {icon}
                        </a>
                      ) : (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={cls}
                        >
                          {link.label}
                          {icon}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
