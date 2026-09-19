
import img1 from "../assets/img1.jpeg";

const FACTS = [
  { label: "Location", value: "Puducherry" },
  { label: "Experience", value: "2+ years" },
  { label: "Cones", value: "100% organic" },
  { label: "Stain", value: "Holds 5–6 days" },
];

export default function About() {
  return (
    
    <section id="about" className="pt-24 sm:pt-32 pb-14 sm:pb-16 bg-pastel overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 grid lg:grid-cols-12 gap-16 lg:gap-10 items-center">
        <div className="lg:col-span-7">
        <p
  className="text-lg sm:text-xl text-black mb-6 italic"
  style={{ fontFamily: "'Cormorant Garamond', serif" }}
>
  The Artist
</p>
<h2
  className="leading-[1.1] text-3xl sm:text-5xl text-henna-800 italic"
  style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
>
  Steady Hands,
  <br />
  Honest Henna.
</h2>
          <p className="font-body text-black mt-6 max-w-lg leading-relaxed">
            Every design starts fresh that morning — 100% organic cones mixed
            by hand, priced fairly, with no rush to finish it right.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 mt-12 border-t border-henna-200">
            {FACTS.map((f) => (
              <div
                key={f.label}
                className="py-6 pr-4 border-r border-henna-200 last:border-r-0"
              >
                <p className="font-body text-[10px] tracking-[0.2em] text-henna-600 uppercase mb-2">
                  {f.label}
                </p>
                <p className="font-display text-xl text-henna-900">{f.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div
            className="absolute -top-5 -left-5 w-full h-full border border-henna-400"
            aria-hidden="true"
          />
          <img
            src={img1}
            alt="Artist at work"
            className="relative aspect-[4/5] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
