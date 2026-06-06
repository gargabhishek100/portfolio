import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power Load Forecaster | ML Lab",
  description:
    "LSTM network that forecasts 24 hours of electricity demand from 48-hour history, learning daily peaks and weekday patterns. ~5% mean error. Domain: Smart Power Grid.",
};

export default function LoadForecasterModel() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[var(--accent-warm)]">
        ML Lab — 05
      </p>
      <h1 className="font-serif text-4xl tracking-tight text-foreground sm:text-5xl">
        Power Load Forecaster
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        An LSTM network that forecasts the next 24 hours of electricity demand from
        the last 48 hours. Domain: Smart Power Grid. ~5% mean error on held-out data;
        every forecast logged to MongoDB.
      </p>
      <div className="mt-10 overflow-hidden rounded-xl border shadow-sm">
        <iframe
          src="https://garg98262-load-forecaster.hf.space"
          title="Power Load Forecaster"
          className="h-[920px] w-full border-0"
        />
      </div>
    </main>
  );
}
