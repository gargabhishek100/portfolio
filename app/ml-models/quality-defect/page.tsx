export default function QualityDefectModel() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[var(--accent-warm)]">
        ML Lab — 03
      </p>
      <h1 className="font-serif text-4xl tracking-tight text-foreground sm:text-5xl">
        Construction Quality Defect Flagger
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Flags potentially defective concrete batches using unsupervised anomaly
        detection (Isolation Forest / One-Class SVM) — trained on normal batches only,
        no defect labels required. Domain: Construction Quality · Logged to MongoDB.
      </p>
      <div className="mt-10 overflow-hidden rounded-xl border shadow-sm">
        <iframe
          src="https://garg98262-quality-defect-flagger.hf.space"
          title="Quality Defect Flagger"
          className="h-[920px] w-full border-0"
        />
      </div>
    </main>
  );
}
