
import g1 from "../assets/gallery-1.jpeg";
import g2 from "../assets/gallery-2.jpeg";
import g3 from "../assets/gallery-3.jpeg";
import g4 from "../assets/gallery-4.jpeg";
import g5 from "../assets/gallery-5.jpeg";
import g6 from "../assets/gallery-6.jpeg";
import g7 from "../assets/gallery-7.jpeg";
import g8 from "../assets/gallery-8.jpeg";
import g9 from "../assets/gallery-9.jpeg";

const PHOTOS = [g1, g2, g3, g4, g5, g6, g7, g8, g9];

export default function Gallery() {
  return (
    <section id="gallery" className="pt-12 sm:pt-16 pb-12 sm:pb-16 bg-pastel">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="font-body text-xs tracking-[0.25em] text-henna-600 mb-4">
            GALLERY
          </p>
          <h2 className="font-display font-light text-4xl sm:text-5xl text-henna-900">
            Recent work
          </h2>
        </div>

        <div className="columns-2 sm:columns-3 gap-3 space-y-3">
          {PHOTOS.map((src, i) => (
            <div
              key={i}
              className="group relative break-inside-avoid overflow-hidden"
            >
              <img
                src={src}
                alt={`Henna design ${i + 1}`}
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-henna-900/0 group-hover:bg-henna-900/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
