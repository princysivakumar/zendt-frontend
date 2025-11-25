import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import AuthBackground from "./AuthBackground";

const tabs = [
  { to: "home", label: "Dashboard", icon: "/icon-summary.svg" },
  { to: "card-management", label: "Cards", icon: "/icon-clipcards.svg" },
  { to: "profile", label: "Profile", icon: "/icon-activity.svg" },
  { to: "virtual-account", label: "Virtual", icon: "/icon-documents.svg" },
  { to: "explore", label: "Explore", icon: "/icon-questionnaire.svg" },
];

function DashboardDesktopNav() {
  return (
    <nav className="flex items-center gap-1">
      {tabs.map((tab) => (
        <NavLink
          key={tab.to}
          to={`/dashboard/${tab.to}`}
          className={({ isActive }) =>
            [
              "flex items-center gap-2 text-sm px-3 py-2 rounded-[20px] transition focus-visible:outline-none",
              isActive ? "bg-white/10 text-white" : "text-slate-300 hover:text-white",
            ].join(" ")
          }
        >
          <img src={tab.icon} alt="" className="w-5 h-5" />
          <span>{tab.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

function DashboardMobileNav() {
  return (
    <div className="fixed bottom-4 left-1/2 z-40 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 md:hidden">
      <div className="pointer-events-auto flex justify-center items-center h-auto gap-1 p-1 bg-[#242424]/95 rounded-full font-normal whitespace-nowrap shadow-[0_24px_45px_rgba(6,6,9,0.4)] backdrop-blur">
        {tabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={`/dashboard/${tab.to}`}
            className={({ isActive }) =>
              [
                "inline-flex justify-center items-center px-3 py-2 gap-1 rounded-full border border-transparent transition focus-visible:outline-none",
                "hover:bg-[#484848] hover:text-white",
                isActive ? "bg-[#484848] text-white active-tab" : "text-slate-500",
              ].join(" ")
            }
          >
            <img src={tab.icon} alt="" className="w-5 h-5" />
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default function Dashboard() {
  useEffect(() => {
    const idx = window.history.state?.idx ?? 0;
    sessionStorage.setItem("dashboardEntryIdx", String(idx));
    return () => {
      sessionStorage.removeItem("dashboardEntryIdx");
    };
  }, []);

  return (
    <AuthBackground navigationContent={<DashboardDesktopNav />}>
      <div className="relative flex min-h-screen flex-col w-full items-center">
        <DashboardMobileNav />
        <div className=" mt-6 w-full flex-1">
          <Outlet />
        </div>
      </div>
    </AuthBackground>
  );
}
