import { Link } from "react-router-dom";
import BackButton from "./BackButton";
import PageContainer from "./PageContainer";

const menuItems = [
  { label: "Business profile", to: "/dashboard/business-profile" },
  { label: "Settings", to: "/dashboard/settings" },
  { label: "Verification / KYC", to: "/dashboard/kyc" },
  { label: "Pricing", to: "/dashboard/pricing" },
  { label: "About Zendt", to: "/dashboard/about" },
  { label: "Help and Support", to: "/dashboard/help" },
  { label: "Privacy policy", to: "/dashboard/privacy-policy" },
  { label: "Terms of service", to: "/dashboard/terms" },
];

export default function ProfileHub() {
  return (
    <PageContainer>
      <BackButton />
      <div className="rounded-[40px] bg-[#0f0f11]/90 text-white shadow-[0_35px_65px_rgba(4,4,7,0.55)] border border-white/5 overflow-hidden">
        <div className="flex flex-col md:flex-row gap-6 p-6">
          <div className="h-28 w-28 rounded-[36px] overflow-hidden bg-black/70">
            <img
              src="/avatar-placeholder.svg"
              alt="Roberto Augustus"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1 space-y-3">
            <div>
              <h2 className="text-2xl font-semibold">Roberto Augustus</h2>
              <p className="text-sm text-white/70">E-mail : robertoaugustus@gmail.com</p>
              <p className="text-sm text-white/50">Customer id : 69014537892</p>
            </div>
            <Link
              to="/dashboard/profile-settings"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
            >
              Profile settings <span>&#8250;</span>
            </Link>
          </div>
        </div>

        <div className="px-6 pb-6 space-y-3">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="flex items-center justify-between rounded-2xl px-4 py-3 text-base text-white/80 hover:bg-white/5"
            >
              <span>{item.label}</span>
              <span className="text-white/60">&#8250;</span>
            </Link>
          ))}
          <Link
            to="/login"
            className="flex items-center justify-between rounded-2xl px-4 py-3 text-base text-red-300/80 hover:bg-white/5"
          >
            <span>Log out</span>
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}
