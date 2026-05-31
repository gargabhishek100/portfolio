"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

type Status = "idle" | "sending" | "sent" | "error";

const directLinks = [
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    text: siteConfig.email,
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: LinkedinIcon,
    text: "LinkedIn",
  },
  {
    label: "GitHub",
    href: siteConfig.social.github,
    icon: GithubIcon,
    text: "GitHub",
  },
];

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30";

  return (
    <section
      id="contact"
      className="scroll-mt-16 border-t border-border bg-muted/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-accent-warm">
            04 — Contact
          </p>
          <h2 className="text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Let&apos;s build something
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            I&apos;m open to roles, research collaborations, and conversations
            where infrastructure engineering and ML meet. The fastest way to
            reach me is email — or use the form.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <div className="space-y-1">
            {directLinks.map(({ label, href, icon: Icon, text }) => {
              const external = href.startsWith("http");
              return (
                <a
                  key={label}
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center gap-3 py-3 text-foreground transition-colors hover:text-primary"
                >
                  <span className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary">
                    <Icon className="size-[18px]" />
                  </span>
                  <span className="text-sm">{text}</span>
                </a>
              );
            })}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
                disabled={status === "sending"}
              />
              <input
                type="email"
                required
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
                disabled={status === "sending"}
              />
            </div>
            <textarea
              required
              rows={5}
              placeholder="Your message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClass} resize-none`}
              disabled={status === "sending"}
            />
            <div className="flex flex-wrap items-center gap-4">
              <Button type="submit" size="lg" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send message"}
              </Button>
              {status === "sent" && (
                <p className="text-sm text-emerald-600">
                  Thanks — I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-muted-foreground">
                  Something went wrong — please email me directly at{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-primary underline"
                  >
                    {siteConfig.email}
                  </a>
                  .
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
