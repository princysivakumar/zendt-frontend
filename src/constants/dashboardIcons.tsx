import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

/** Dashboard / Home */
export const DashboardIcon: React.FC<IconProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* roof */}
    <path d="M4 10L12 3L20 10" />
    {/* house body */}
    <path d="M6.5 10.5V19.5C6.5 20.0523 6.94772 20.5 7.5 20.5H16.5C17.0523 20.5 17.5 20.0523 17.5 19.5V10.5" />
  </svg>
);

/** Card */
export const CardIcon: React.FC<IconProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* outer rounded rect */}
    <rect x={4} y={4} width={16} height={16} rx={3.5} />
    {/* top stripe */}
    <line x1={4} y1={9} x2={20} y2={9} />
    {/* small “chip” / dot in top-right */}
    <circle cx={18.2} cy={6.4} r={0.9} />
  </svg>
);

/** Explore (overlapping circles) */
export const ExploreIcon: React.FC<IconProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* left circle */}
    <circle cx={9} cy={12} r={5} />
    {/* right circle */}
    <circle cx={15} cy={12} r={5} />
  </svg>
);

/** Profile */
export const ProfileIcon: React.FC<IconProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* head */}
    <circle cx={12} cy={7} r={3} />
    {/* shoulders / body */}
    <path d="M6.5 19C7.8 16.4 9.7 15 12 15C14.3 15 16.2 16.4 17.5 19" />
    <path d="M5.5 19.5H18.5" />
  </svg>
);

/** Virtual (two vertical bars + curve) */
export const VirtualIcon: React.FC<IconProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* left bar */}
    <path d="M6.5 4.5V18.5" />
    {/* right bar */}
    <path d="M13.5 4.5V18.5" />
    {/* curved “virtual” tail */}
    <path d="M13.5 18.5C13.5 18.5 13.8 20.5 15.8 20.5C17.8 20.5 18.5 18.5 18.5 18.5" />
  </svg>
);
