import BackButton from "./BackButton";
import PageContainer from "./PageContainer";

const faqs = [
  {
    question: "How do I generate payment links?",
    answer: "Head to Collect → Payment links. You can share branded URLs or embed buttons on your site.",
  },
  {
    question: "When do payouts arrive?",
    answer: "Domestic payouts usually settle same day. International transfers land within 2 to 3 business days.",
  },
  {
    question: "Where can I talk to support?",
    answer: "Ping us anytime in the dashboard chat or write to success@zendt.com.",
  },
];

export default function HelpPage() {
  return (
    <PageContainer className="text-white space-y-6">
      <BackButton />

      <section className="rounded-[32px] bg-[#0f1115]/95 border border-white/5 shadow-[0_35px_65px_rgba(4,4,7,0.55)] p-6 space-y-6">
        <header>
          <h2 className="text-3xl font-semibold">Help &amp; support</h2>
          <p className="text-sm text-white/70">Quick answers for the most common Zendt questions.</p>
        </header>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-3xl border border-white/10 bg-white/5 p-4">
              <summary className="cursor-pointer list-none text-base font-medium">
                {faq.question}
                <span className="float-right text-white/60 transition group-open:rotate-90">&#8250;</span>
              </summary>
              <p className="mt-3 text-sm text-white/70">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
