import { useNavigate } from "react-router-dom";
import PrimaryActionButton from "./PrimaryActionButton";

interface PaymentCardProps {
  title: string;
  to?: string;
  onClick?: () => void;
}

export default function PaymentCard({ title, to, onClick }: PaymentCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    if (to) {
      navigate(to);
    }
  };

  return (
    <div className="flex items-center justify-between rounded-[36px] bg-gradient-to-br from-[#121217] via-[#0b0c10] to-[#040507] border border-white/5 px-6 py-5 text-white shadow-[0_22px_35px_rgba(4,4,7,0.5)]">
      <p className="text-lg text-white/90">{title}</p>
      <PrimaryActionButton onClick={handleClick} />
    </div>
  );
}
