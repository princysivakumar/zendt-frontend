interface ToggleCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  size?: "sm" | "md";
}

export default function ToggleCheckbox({ checked, onChange, size = "md" }: ToggleCheckboxProps) {
  const isSmall = size === "sm";
  const trackClasses = isSmall ? "h-6 w-10 rounded-[18px]" : "h-8 w-14 rounded-[21px]";
  const knobClasses = isSmall ? "h-5 w-5" : "h-7 w-7";

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={[
        "relative border border-white/15 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
        trackClasses,
        checked ? "bg-emerald-400/70" : "bg-white/20",
      ].join(" ")}
    >
      <span
        className={[
          "absolute inset-y-0 my-auto bg-white transition-all rounded-full",
          knobClasses,
          checked ? "right-0" : "left-0",
        ].join(" ")}
      />
    </button>
  );
}
