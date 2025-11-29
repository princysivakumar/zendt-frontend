import BackButton from "./BackButton";
import PageContainer from "./PageContainer";
import EditableDetailsCard from "./EditableDetailsCard";

export default function BusinessProfileEditPage() {
  const addressFields = [{ label: "Address line 1", key: "line1" }];

  const initialAddress = {
    line1: "123 Paper Street",
    city: "Austin",
    postal: "78701",
    country: "United States",
  };

  const brandFields = [
    { label: "Brand name", key: "brandName" },
    { label: "Email", key: "email" },
    { label: "Mobile Number", key: "phone" },
    { label: "Website", key: "website" },
  ];

  const initialBrandData = {
    brandName: "Roberto Augustus",
    email: "robertoaugustus@gmail.com",
    phone: "+1 232 343 4545",
    website: "robertoaugustus.com",
  };

  return (
    <PageContainer className="text-white space-y-6">
      <div className="flex items-center justify-between px-4 pt-6 z-0">
        <div
          className="absolute opacity-60 blur-2xl -z-10"
          style={{
            right: "82px",
            top: "-20px",
            width: "321px",
            height: "262px",
            zIndex: "0",

            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(255,173,122,0.40) 0%, rgba(93,104,157,0.40) 58.08%, rgba(20,35,55,0.40) 200%)",
          }}
        ></div>
        <div className="flex justify-between w-full z-1">
          <BackButton />
        </div>
      </div>
      <div className="p-6 bg-black rounded-t-[32px]">
        <h1 className="text-[18px] font-semibold">Edit business details</h1>
        <p className="text-white/70 text-[10px] pb-6">
          Update the information shown on invoices and customer communications.
        </p>
        <EditableDetailsCard
          title="Brand name"
          fields={brandFields}
          initialValues={initialBrandData}
        />
        <EditableDetailsCard
          title="Business address"
          fields={addressFields}
          initialValues={initialAddress}
        />
      </div>
    </PageContainer>
  );
}
