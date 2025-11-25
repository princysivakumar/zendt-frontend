import BackButton from "./BackButton";
import PageContainer from "./PageContainer";

export default function AddVirtualAccountPage() {
  return (
    <PageContainer className="text-white">
      <BackButton />
      <section className="rounded-[32px] bg-[#0f0f12]/95 border border-white/5 shadow-[0_35px_65px_rgba(4,4,7,0.55)] p-6 space-y-4">
        <h1 className="text-3xl font-semibold">Add virtual account</h1>
        <p className="text-white/70">
          Placeholder page – awaiting design details.
        </p>
      </section>
    </PageContainer>
  );
}
