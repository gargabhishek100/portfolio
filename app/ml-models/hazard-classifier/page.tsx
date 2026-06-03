export default function HazardClassifierModel() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[var(--accent-warm)]">
        ML Lab — 04
      </p>
      <h1 className="font-serif text-4xl tracking-tight text-foreground sm:text-5xl">
        Hazard Image Classifier
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        A convolutional neural network that classifies the safety-hazard type in a
        construction scene — none, fall, electrical, or fire. Domain: Construction
        Safety. Trained on synthetic hazard-pattern images; logged to MongoDB.
      </p>
      <div className="mt-10 overflow-hidden rounded-xl border shadow-sm">
        <iframe
          src="https://garg98262-hazard-classifier.hf.space"
          title="Hazard Image Classifier"
          className="h-[920px] w-full border-0"
        />
      </div>
    </main>
  );
}
