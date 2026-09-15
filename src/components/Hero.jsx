import { useEffect, useState } from "react";
import hero1 from "../assets/hero1.jpeg";
import hero2 from "../assets/hero2.jpeg";
import hero3 from "../assets/hero3.jpeg";

const SLIDES = [hero1, hero2, hero3];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative h-[92vh] min-h-[600px] w-full overflow-hidden bg-henna-900">
      {SLIDES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt="Henna work by Henna Palettes"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-henna-950/90 via-henna-950/30 to-henna-950/50" />

      <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 flex gap-2 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Show photo ${i + 1}`}
            className={`h-1.5 rounded-full transition-all focus-ring ${
              i === active ? "w-8 bg-pastel" : "w-3 bg-pastel/40"
            }`}
          />
        ))}
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-6 sm:px-10 flex flex-col justify-end pb-16 sm:pb-24">
        <p className="font-body text-[12px] tracking-[0.3em] text-henna-200 mb-5">
          PUDUCHERRY, TAMIL NADU
        </p>
        <h1 className="font-display font-light text-pastel text-5xl sm:text-7xl lg:text-8xl leading-[0.95] max-w-3xl">
          Henna,
          <br />
          <span className="italic font-normal">drawn slow.</span>
        </h1>
        <p className="font-body text-pastel/70 mt-7 max-w-md leading-relaxed">
          Two-plus years of hand-drawn mehandi with organic cones and a stain
          that holds for five to six days — from a quick festive palm to a
          full bridal sitting.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href="tel:+919345822082"
            className="font-body text-sm text-henna-950 bg-pastel px-8 py-3.5 rounded-full hover:bg-henna-100 transition-colors focus-ring"
          >
            Call to book
          </a>
          <a
            href="https://wa.me/919345822082"
            target="_blank"
            rel="noreferrer"
            className="font-body text-sm text-pastel border-b border-pastel/50 pb-1 hover:border-pastel transition-colors focus-ring"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}