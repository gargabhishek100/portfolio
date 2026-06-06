import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Cost-Overrun Predictor | ML Lab",
  description:
    "Predicts budget-overrun severity from project parameters using Logistic Regression, KNN, and Decision Tree. Domain: Construction Economics. Live on HuggingFace with MongoDB logging.",
};

export default function CostOverrunModel() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[var(--accent-warm)]">
        ML Lab — 01
      </p>
      <h1 className="font-serif text-4xl tracking-tight text-foreground sm:text-5xl">
        Construction Cost-Overrun Predictor
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Predicts budget-overrun severity from a project&#39;s economic and
        contractual parameters. Model: Logistic Regression · Domain:
        Construction Economics · Every prediction logged to MongoDB.
      </p>
      <div className="mt-10 overflow-hidden rounded-xl border shadow-sm">
        <iframe
          src="https://garg98262-cost-overrun-predictor.hf.space"
          title="Construction Cost-Overrun Predictor"
          className="h-[920px] w-full border-0"
        />
      </div>
    </main>
  );
}
