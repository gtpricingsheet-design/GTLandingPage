interface LogoProps {
  className?: string;
  size?: number | string;
}

export default function Logo({ className = '', size = 20 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Connector lines & Brackets (purple accent) */}
      <path
        d="M 50 43 L 50 22 M 45 55 L 26 74 M 55 55 L 74 74 M 38 30 L 18 50 L 38 70 M 38 62 L 38 70 M 62 30 L 82 50 L 62 70 M 62 62 L 62 70"
        className="stroke-indigo-200"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Central Ring (white highlight) */}
      <circle
        cx="50"
        cy="50"
        r="8"
        className="stroke-white"
        strokeWidth="6"
        fill="none"
      />
      {/* Node Dots (white highlights) */}
      <circle cx="50" cy="22" r="5.5" className="fill-white" />
      <circle cx="26" cy="74" r="5.5" className="fill-white" />
      <circle cx="74" cy="74" r="5.5" className="fill-white" />
    </svg>
  );
}
