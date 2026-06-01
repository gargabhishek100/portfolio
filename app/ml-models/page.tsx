import Link from "next/link";

/* ─── model data ─────────────────────────────────────────────────────────── */
type Status = "live" | "building" | "upcoming";

const MODELS = [
  {
    number: "01",
    title: "Construction Cost-Overrun Predictor",
    domain: "Construction Economics",
    algorithms: "Logistic Regression · KNN · Naive Bayes · Decision Tree",
    tier: "Tier 1 — Foundations",
    status: "live" as Status,
    href: "/ml-models/cost-overrun",
    description:
      "Predicts budget-overrun severity from project economic and contractual parameters. Every prediction is logged to MongoDB.",
  },
  {
    number: "02",
    title: "Credit Risk Classifier",
    domain: "DSAI in Finance",
    algorithms: "Random Forest · XGBoost · SVM",
    tier: "Tier 2 — Ensembles",
    status: "building" as Status,
    href: null,
    description:
      "Classifies loan applicants by default risk using ensemble methods. Includes SMOTE for class imbalance.",
  },
  {
    number: "03",
    title: "Construction Quality Defect Flagger",
    domain: "Construction Quality",
    algorithms: "Isolation Forest · One-Class SVM",
    tier: "Tier 3 — Anomaly Detection",
    status: "upcoming" as Status,
    href: null,
    description:
      "Unsupervised anomaly detection on quality inspection data — no labelled defects required to train.",
  },
  {
    number: "04",
    title: "Hazard Image Classifier",
    domain: "Construction Safety",
    algorithms: "Convolutional Neural Network",
    tier: "Tier 4 — Deep Learning",
    status: "upcoming" as Status,
    href: null,
    description:
      "Detects safety-hazard categories in construction site images using a CNN trained on labelled examples.",
  },
  {
    number: "05",
    title: "Power Load Forecaster",
    domain: "Smart Power Grid",
    algorithms: "LSTM",
    tier: "Tier 5 — Sequence Models",
    status: "upcoming" as Status,
    href: null,
    description:
      "Forecasts electricity demand using an LSTM that learns the temporal patterns in historical load data.",
  },
  {
    number: "06",
    title: "SCADA Anomaly Detector",
    domain: "EMS SCADA",
    algorithms: "LSTM Autoencoder",
    tier: "Tier 6 — Unsupervised Deep",
    status: "upcoming" as Status,
    href: null,
    description:
      "Detects deviations from normal SCADA operating behaviour using reconstruction error from a trained autoencoder.",
  },
];

/* ─── badge ──────────────────────────────────────────────────────────────── */
function StatusBadge({ status }: { status: Status }) {
  const styles: Record<Status, string> = {
    live: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    building: "bg-amber-50 text-amber-700 border border-amber-200",
    upcoming: "bg-muted text-muted-foreground",
  };
  const labels: Record<Status, string> = {
    live: "Live",
    building: "Building",
    upcoming: "Upcoming",
  };
  return (
    <span
      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}

/* ─── card ───────────────────────────────────────────────────────────────── */
function ModelCard({ model }: { model: (typeof MODELS)[number] }) {
  const inner = (
    <div
      className={`group flex h-full flex-col rounded-xl border bg-background p-6 transition-all duration-200 ${
        model.href
          ? "hover:border-foreground/25 hover:shadow-md cursor-pointer"
          : "opacity-60"
      }`}
    >
      {/* header row */}
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-sm text-muted-foreground/70">
          {model.number}
        </span>
        <StatusBadge status={model.status} />
      </div>

      {/* title */}
      <h2 className="mt-4 font-serif text-[1.2rem] leading-snug tracking-tight text-foreground">
        {model.title}
      </h2>

      {/* domain */}
      <p className="mt-1.5 text-sm font-medium text-[var(--accent-warm)]">
        {model.domain}
      </p>

      {/* description */}
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {model.description}
      </p>

      {/* footer */}
      <div className="mt-auto flex items-end justify-between pt-6">
        <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground/50">
          {model.tier}
        </p>
        {model.href && (
          <span className="text-sm font-medium text-foreground opacity-0 transition-opacity group-hover:opacity-100">
            View →
          </span>
        )}
      </div>
    </div>
  );

  return model.href ? (
    <Link href={model.href} className="flex">
      {inner}
    </Link>
  ) : (
    <div className="flex">{inner}</div>
  );
}

/* ─── page ───────────────────────────────────────────────────────────────── */
export default function MLModelsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      {/* eyebrow */}
      <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[var(--accent-warm)]">
        ML Lab
      </p>

      {/* title */}
      <h1 className="font-serif text-4xl tracking-tight text-foreground sm:text-5xl">
        Machine Learning Models
      </h1>

      {/* subtitle */}
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Six end-to-end models, each applied to a different domain from my IIT
        Madras coursework — classical classification through deep-learning
        anomaly detection. Every model is trained in Python, deployed on
        HuggingFace Spaces, and logs predictions to MongoDB.
      </p>

      {/* stack tags */}
      <div className="mt-6 flex flex-wrap gap-2">
        {["Python · scikit-learn · TensorFlow", "HuggingFace Spaces", "MongoDB Atlas", "Gradio"].map(
          (tag) => (
            <span
              key={tag}
              className="rounded-md border bg-muted/40 px-3 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ),
        )}
      </div>

      {/* grid */}
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {MODELS.map((model) => (
          <ModelCard key={model.number} model={model} />
        ))}
      </div>
    </main>
  );
}
