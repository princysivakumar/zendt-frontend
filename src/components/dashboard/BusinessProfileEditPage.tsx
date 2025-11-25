import BackButton from "./BackButton";
import PageContainer from "./PageContainer";
import BrandDetailsCard from "./BrandDetailsCard";
import AddressDetailsCard from "./AddressDetailsCard";

export default function BusinessProfileEditPage() {
  return (
    <PageContainer className="text-white space-y-6">
      <BackButton />
      <div>
        <h1 className="text-3xl font-semibold">Edit business details</h1>
        <p className="text-white/70 text-sm">
          Update the information shown on invoices and customer communications.
        </p>
      </div>
      <BrandDetailsCard />
      <AddressDetailsCard />
    </PageContainer>
  );
}
