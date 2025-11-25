import EditableDetailsCard from "./EditableDetailsCard";

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

export default function BrandDetailsCard() {
  return (
    <EditableDetailsCard
      title="Brand name"
      fields={brandFields}
      initialValues={initialBrandData}
    />
  );
}
