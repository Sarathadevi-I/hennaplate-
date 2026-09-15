export default function ImagePlaceholder({
  label = "Add photo",
  className = "",
  dark = false,
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 border border-dashed rounded-[1.25rem] overflow-hidden ${
        dark
          ? "bg-henna-800/60 border-pastel/25"
          : "bg-henna-100 border-henna-300"
      } ${className}`}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        className={dark ? "text-pastel/50" : "text-henna-500/70"}
      >
        <rect x="2.5" y="4.5" width="19" height="15" rx="2" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="8" cy="10" r="1.7" stroke="currentColor" strokeWidth="1.3" />
        <path d="M3 17L8.5 12.5L12 15.5L16 11L21 16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span
        className={`font-body text-[11px] tracking-[0.15em] uppercase ${
          dark ? "text-pastel/60" : "text-henna-600/80"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
