import { Hero } from "@/components/sections/hero";
import { Work } from "@/components/sections/work";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ML Lab | Abhishek Garg",
  description:
    "Six end-to-end ML models across Construction Economics, Finance, Quality, Safety, Smart Power Grid and EMS SCADA — from logistic regression through LSTM autoencoder anomaly detection.",
};

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
