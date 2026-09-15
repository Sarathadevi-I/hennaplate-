import review1 from "../assets/review-1.jpeg";
import review2 from "../assets/review-2.jpeg";
import review3 from "../assets/review-3.jpeg";
import review4 from "../assets/review-4.jpeg";

const REVIEWS = [
  { src: review1, rotate: "-rotate-3", offset: "sm:translate-y-4" },
  { src: review2, rotate: "rotate-2", offset: "" },
  { src: review3, rotate: "-rotate-2", offset: "sm:translate-y-6" },
  { src: review4, rotate: "rotate-3", offset: "sm:translate-y-2" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="pt-12 sm:pt-16 pb-6 sm:pb-8 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <p className="font-body text-xs tracking-[0.25em] text-henna-600 mb-4 text-center">
          TESTIMONIALS
        </p>
        <h2 className="font-display font-light text-4xl sm:text-5xl text-henna-900 text-center mb-4">
          Straight from Instagram
        </h2>
        <p className="font-body text-henna-800/70 text-center max-w-md mx-auto mb-16">
          Real messages from clients, screenshotted and unedited.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 place-items-center">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className={`${r.rotate} ${r.offset} hover:rotate-0 hover:scale-105 transition-transform duration-300 shadow-xl shadow-henna-900/15 rounded-xl overflow-hidden border-4 border-white max-w-[280px]`}
            >
              <img
                src={r.src}
                alt={`Client review ${i + 1}`}
                className="w-full h-auto block"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}