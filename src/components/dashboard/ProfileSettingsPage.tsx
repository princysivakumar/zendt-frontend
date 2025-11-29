import { useAvatar } from "../../context/AvatarContext";
import BackButton from "./BackButton";
import EditableDetailsCard from "./EditableDetailsCard";
import PageContainer from "./PageContainer";

export default function ProfileSettingsPage() {
  const avatarSrc = useAvatar();
  const initialAddress = {
    line1: "123 Paper Street",
    city: "Austin",
    postal: "78701",
    country: "United States",
  };
  const addressFields = [
    { label: "Address line 1", key: "line1" },
    { label: "City / Town", key: "city" },
    { label: "Postal / Zip", key: "postal" },
    { label: "Country", key: "country" },
  ];
  const brandFields = [
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
  ];
  const initialProfileData = {
    name: "Roberto Augustus",
    email: "robertoaugustus@gmail.com",
  };

  return (
    <PageContainer className="text-white space-y-6">
      <div className="flex items-center justify-between px-4 pt-12 z-0">
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
      <div className="p-6 bg-black rounded-t-[32px] pb-18">
        <div className="relative mb-4 mx-auto flex justify-center">
          <div className="h-[140px] w-[140px] rounded-full overflow-hidden bg-black/60 relative ">
            <img
              src={avatarSrc}
              alt="Roberto Augustus"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <EditableDetailsCard
          title="Brand name"
          fields={brandFields}
          initialValues={initialProfileData}
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
