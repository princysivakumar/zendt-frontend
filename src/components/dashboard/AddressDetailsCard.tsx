import EditableDetailsCard from "./EditableDetailsCard";

const addressFields = [
  { label: "Address line 1", key: "line1" },
  { label: "City / Town", key: "city" },
  { label: "Postal / Zip", key: "postal" },
  { label: "Country", key: "country" },
];

const initialAddress = {
  line1: "123 Paper Street",
  city: "Austin",
  postal: "78701",
  country: "United States",
};

export default function AddressDetailsCard() {
  return (
    <EditableDetailsCard
      title="Business address"
      description="Used on invoices, receipts, and tax documents."
      fields={addressFields}
      initialValues={initialAddress}
    />
  );
}
