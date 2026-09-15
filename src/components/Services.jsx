
import bridal from "../assets/services-1.jpeg";
import party from "../assets/services-2.jpeg";
import arabic from "../assets/services-3.jpeg";
import custom from "../assets/services-4.jpeg";

const SERVICES = [
  {
    title: "Bridal mehandi",
    detail: "Full hand and foot sittings, designed around your outfit.",
    img: bridal,
    className: "sm:row-span-2 aspect-[4/5] sm:aspect-auto",
  },
  {
    title: "Party & festive",
    detail: "Palm, wrist and arm designs for every celebration.",
    img: party,
    className: "aspect-[4/5]",
  },
  {
    title: "Arabic & Indo-Arabic",
    detail: "Bold, flowing patterns for a statement look.",
    img: arabic,
    className: "aspect-[4/5]",
  },
  {
    title: "Custom designs",
    detail: "Bring a reference — it's drawn to fit your request.",
    img: custom,
    className: "sm:col-span-2 aspect-[16/8]",
  },
];

export default function Services() {
  return (
    <section id="services" className="pt-14 sm:pt-16 pb-12 sm:pb-16 bg-henna-900 text-pastel">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="font-body text-xs tracking-[0.25em] text-henna-300 mb-4">
              SERVICES
            </p>
            <h2 className="font-display font-light text-4xl sm:text-5xl">
              What's drawn here
            </h2>
          </div>
          <p className="font-body text-pastel/60 max-w-xs leading-relaxed">
            Every design starts as a conversation — occasion, skin tone, and
            how bold you want it.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className={`group relative overflow-hidden ${s.className}`}
            >
              <img
                src={s.img}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-henna-950/90 via-henna-950/10 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-6">
                <h3 className="font-display italic text-2xl text-white mb-1">
                  {s.title}
                </h3>
                <p className="font-body text-pastel/75 text-sm leading-relaxed max-w-xs">
                  {s.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
