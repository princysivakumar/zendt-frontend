interface PrimaryActionButtonProps {
  direction?: "right" | "down";
  onClick?: () => void;
}

export default function PrimaryActionButton({ direction = "right", onClick }: PrimaryActionButtonProps) {
  const icon =
    direction === "down" ? (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 7L9 11L13 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ) : (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 4L12 9L7 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );

  return (
    <button
      type="button"
      onClick={onClick}
      className="h-14 w-14 rounded-[25px] bg-gradient-to-br from-white/5 to-black/60 border border-white/10 flex items-center justify-center text-white transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
    >
      {icon}
    </button>
  );
}
