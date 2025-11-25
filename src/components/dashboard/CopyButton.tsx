import { useState } from "react";

interface CopyButtonProps {
  value: string;
}

export default function CopyButton({ value }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="h-8 w-6 rounded-lg border border-white/20 text-white flex items-center justify-center hover:border-white/40 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
      aria-label={copied ? "Copied" : "Copy to clipboard"}
    >
      {copied ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 8L7 11L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="3" width="8" height="10" rx="2" stroke="currentColor" strokeWidth="1.2" />
          <rect x="3" y="5" width="8" height="10" rx="2" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
        </svg>
      )}
    </button>
  );
}
