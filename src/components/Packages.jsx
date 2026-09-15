
const TIERS = [
  {
    name: "Basic",
    tag: "For everyday",
    rows: [
      ["Palm & Arabic", "₹50 – ₹500"],
      ["Mandala", "₹100 – ₹500"],
      ["Indian", "₹250 – ₹500"],
      ["Indo Arabic", "₹200 – ₹500"],
    ],
  },
  {
    name: "Elegant",
    tag: "Bridesmaid",
    rows: [
      ["Palm length", "₹100 – ₹700"],
      ["Wrist length", "₹500 – ₹800"],
      ["Bangle length", "₹1000 – ₹2500"],
      ["Elbow length", "₹2000 – ₹6000"],
    ],
  },
  {
    name: "Premium",
    tag: "Bride package",
    rows: [
      ["Bridal", "₹2500 – ₹6000"],
      ["Engagement", "₹1500 – ₹4000"],
    ],
    note: "Book the bride's mehandi and get an offer on bridesmaids' designs.",
    highlight: true,
  },
];

export default function Packages() {
  return (
   <section id="packages" className="pt-14 sm:pt-16 pb-12 sm:pb-16 bg-pastel-dim">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-14">
          <p className="font-body text-xs tracking-[0.25em] text-henna-600 mb-3">
            PACKAGES
          </p>
          <h2 className="font-display font-light text-4xl sm:text-5xl text-henna-900">
            Pricing, by occasion
          </h2>
          <p className="font-body text-henna-800/70 mt-4 max-w-md mx-auto">
            Per hand/design, varying with size and detail. Custom work is
            quoted after a quick chat.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 items-stretch">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`rounded-[1.75rem] p-8 flex flex-col ${
                t.highlight
                  ? "bg-henna-900 text-pastel md:-translate-y-3 shadow-xl shadow-henna-900/15"
                  : "bg-pastel text-henna-900 border border-henna-200"
              }`}
            >
              <span
                className={`h-1.5 w-10 rounded-full mb-6 ${
                  t.highlight ? "bg-henna-300" : "bg-henna-600"
                }`}
              />
              <h3 className="font-display italic text-3xl mb-1">{t.name}</h3>
              <p
                className={`font-body text-[11px] tracking-[0.2em] uppercase mb-7 ${
                  t.highlight ? "text-henna-300" : "text-henna-600"
                }`}
              >
                {t.tag}
              </p>

              <ul className="space-y-2.5 flex-1">
                {t.rows.map(([label, price]) => (
                  <li
                    key={label}
                    className={`flex items-center justify-between gap-3 rounded-xl px-4 py-3 font-body text-sm ${
                      t.highlight ? "bg-white/10" : "bg-henna-100"
                    }`}
                  >
                    <span className={t.highlight ? "text-pastel/90" : "text-henna-800"}>
                      {label}
                    </span>
                    <span className="font-medium whitespace-nowrap">{price}</span>
                  </li>
                ))}
              </ul>

              {t.note && (
                <p className="font-body text-xs italic text-henna-200/90 mt-6">
                  {t.note}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[1.75rem] border border-dashed border-henna-300 px-8 py-7 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center sm:text-left">
          <h3 className="font-display italic text-2xl text-henna-900 shrink-0">
            Other requests
          </h3>
          <p className="font-body text-henna-800/70 text-sm">
            A theme, a large group, or something that doesn't fit the list
            above — send a message and we'll work out a fair quote together.
          </p>
        </div>
      </div>
    </section>
  );
}
