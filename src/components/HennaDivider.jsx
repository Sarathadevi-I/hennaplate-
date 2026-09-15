export default function HennaDivider({ flip = false, className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`w-full flex justify-center py-2 ${className}`}
    >
      <svg
        width="220"
        height="28"
        viewBox="0 0 220 28"
        fill="none"
        className={`text-henna-600/60 ${flip ? "rotate-180" : ""}`}
      >
        <path
          d="M2 14C22 2 34 26 54 14C74 2 86 26 106 14C126 2 138 26 158 14C178 2 190 26 210 14"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <circle cx="4" cy="14" r="2" fill="currentColor" />
        <circle cx="216" cy="14" r="2" fill="currentColor" />
      </svg>
    </div>
  );
}
