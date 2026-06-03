export default function ScadaAnomalyModel() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[var(--accent-warm)]">
        ML Lab — 06
      </p>
      <h1 className="font-serif text-4xl tracking-tight text-foreground sm:text-5xl">
        SCADA Anomaly Detector
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        An LSTM autoencoder that flags abnormal pump behaviour from multivariate SCADA
        signals — trained on normal operation only, no fault labels. This is the core
        architecture behind my M.Tech thesis. Domain: EMS SCADA; logged to MongoDB.
      </p>
      <div className="mt-10 overflow-hidden rounded-xl border shadow-sm">
        <iframe
          src="https://garg98262-scada-anomaly-detector.hf.space"
          title="SCADA Anomaly Detector"
          className="h-[920px] w-full border-0"
        />
      </div>
    </main>
  );
}
