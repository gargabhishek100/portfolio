export default function CreditRiskModel() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[var(--accent-warm)]">
        ML Lab — 02
      </p>
      <h1 className="font-serif text-4xl tracking-tight text-foreground sm:text-5xl">
        Credit Risk Classifier
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Predicts loan-default probability from an applicant&#39;s financial profile.
        Ensemble model (Random Forest / XGBoost / SVM) trained with SMOTE to handle
        class imbalance. Domain: DSAI in Finance · Every prediction logged to MongoDB.
      </p>
      <div className="mt-10 overflow-hidden rounded-xl border shadow-sm">
        <iframe
          src="https://garg98262-credit-risk-classifier.hf.space"
          title="Credit Risk Classifier"
          className="h-[920px] w-full border-0"
        />
      </div>
    </main>
  );
}
