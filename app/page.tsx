import { Hero } from "@/components/sections/hero";
import { Work } from "@/components/sections/work";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Work />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
