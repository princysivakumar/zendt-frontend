import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    const entryIdx = Number(sessionStorage.getItem("dashboardEntryIdx") ?? 0);
    const currentIdx = window.history.state?.idx ?? 0;

    if (currentIdx > entryIdx) {
      navigate(-1);
    } else {
      navigate("/dashboard/home");
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white hover:border-white/40 focus-visible:outline-none"
    >
      <span className="text-xl">&#8592;</span>
    </button>
  );
}
