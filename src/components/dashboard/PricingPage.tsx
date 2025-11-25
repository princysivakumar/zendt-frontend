import BackButton from "./BackButton";
import PageContainer from "./PageContainer";

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Best for testing and small volumes.",
    features: ["2 payment methods", "Email support", "3 team seats"],
  },
  {
    name: "Growth",
    price: "$49",
    description: "Preferred tier for scaling brands.",
    features: ["All payment rails", "Priority support", "Unlimited team seats"],
  },
];

export default function PricingPage() {
  return (
    <PageContainer className="max-w-4xl text-white space-y-6">
      <BackButton />

      <section className="rounded-[40px] bg-[#0b0b0f]/95 border border-white/5 shadow-[0_35px_65px_rgba(4,4,7,0.55)] p-6 space-y-6">
        <header className="text-center space-y-2">
          <h2 className="text-3xl font-semibold">Pricing</h2>
          <p className="text-white/70">Choose a plan that matches your payout volume.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">{plan.name}</p>
                <p className="text-4xl font-semibold">{plan.price}</p>
                <p className="text-sm text-white/70">{plan.description}</p>
              </div>
              <ul className="space-y-2 text-sm text-white/90">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="text-emerald-300">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="w-full rounded-2xl border border-white/20 px-4 py-2 text-sm hover:border-white/50"
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
