import type { ReactNode } from "react";

interface DoubleBgBoxProps {
  variant?: "small" | "medium" | "wide";
  className?: string;
  backgroundImage?: string;
  flagImage?: string;
  topLeft?: ReactNode;
  topRight?: ReactNode;
  bottomLeft?: ReactNode;
  bottomRight?: ReactNode;
  children?: ReactNode;
}

export default function DoubleBgBox({
  variant = "medium",
  className,
  backgroundImage,
  flagImage,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  children,
}: DoubleBgBoxProps) {
  const baseClasses =
    "relative overflow-hidden rounded-[32px] bg-[#262626] text-gray-100 shadow-[0_25px_45px_rgba(0,0,0,0.45)] border border-white/5";

  let sizeClass = "w-full";
  if (variant === "small") {
    sizeClass += " min-h-[170px]";
  } else if (variant === "wide") {
    sizeClass += " min-h-[170px] md:min-h-[190px]";
  } else {
    sizeClass += " min-h-[180px]";
  }

  const containerClass = [baseClasses, sizeClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClass}>
      <svg
        className="absolute inset-0 w-full h-full z-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 185 134"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M185 114V44.8713C185 39.1693 180.378 34.5469 174.676 34.5469C171.88 34.5469 169.203 33.413 167.259 31.4044L142.744 6.08736C138.976 2.19652 133.792 0 128.376 0H20C8.95431 0 0 8.9543 0 20V114C0 125.046 8.9543 134 20 134H165C176.046 134 185 125.046 185 114Z"
          fill="#161616"
        />
      </svg>
      {flagImage && (
        <img
          src={flagImage}
          alt=""
          className="absolute z-0 right-0 top-0 h-14 w-18 object-cover rounded-bl-3xl"
        />
      )}

      <div className="relative z-10 flex h-full w-full flex-col justify-between p-4">
        {children ? (
          children
        ) : (
          <>
            {(topLeft || topRight) && (
              <div className="flex items-start justify-between text-[10px] uppercase tracking-[0.35em] text-gray-400">
                <span>{topLeft}</span>
                <span className="ml-4">{topRight}</span>
              </div>
            )}

            {backgroundImage && (
              <div className="flex flex-1 items-center justify-center">
                <img
                  src={backgroundImage}
                  alt=""
                  className="max-h-[60%] max-w-[60%] object-contain"
                />
              </div>
            )}

            {(bottomLeft || bottomRight) && (
              <div className="flex flex-col gap-1 text-left text-white">
                {bottomLeft && (
                  <div className="text-lg font-semibold leading-tight">
                    {bottomLeft}
                  </div>
                )}
                {bottomRight && (
                  <div className="text-xs uppercase tracking-[0.3em] text-gray-400">
                    {bottomRight}
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
