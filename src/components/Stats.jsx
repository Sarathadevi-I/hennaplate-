const STATS = [
  { value: "4+", label: "Years of experience" },
  { value: "100%", label: "Organic henna cones" },
  { value: "5–6", label: "Days the stain holds" },
  { value: "Pondy", label: "Based in Puducherry" },
];

export default function Stats() {
  return (
    <section className="bg-pastel border-b border-henna-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-2 sm:grid-cols-4">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`py-10 sm:py-14 px-2 text-center sm:text-left border-henna-100 ${
              i % 2 === 0 ? "border-r" : ""
            } sm:border-r sm:last:border-r-0`}
          >
            <p className="font-display italic text-4xl sm:text-5xl text-henna-800">
              {s.value}
            </p>
            <p className="font-body text-xs text-henna-700/70 mt-2 tracking-wide">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
