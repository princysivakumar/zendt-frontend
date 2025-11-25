import BackButton from "./BackButton";
import PageContainer from "./PageContainer";
import PaymentAccordion from "./PaymentAccordion";

export default function SettlementDetailsPage() {
  return (
    <PageContainer className="text-white space-y-6">
      <BackButton />
      <div>
        <h1 className="text-2xl font-semibold">Settlement details</h1>
        <p className="text-sm text-white/70">Available payout options</p>
      </div>
      <PaymentAccordion />
    </PageContainer>
  );
}
