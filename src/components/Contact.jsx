export default function Contact() {
  return (
    <section id="contact" className="py-10 sm:py-12 bg-henna-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 grid md:grid-cols-2 gap-10 md:gap-6 items-center">
        <div className="text-center md:text-left">
          <p className="font-body text-xs tracking-[0.25em] text-henna-300 mb-3">
            CONTACT
          </p>
          <h2 className="font-display font-light text-3xl sm:text-4xl text-pastel mb-3">
            Let's plan your <span className="italic">henna.</span>
          </h2>
          <p className="font-body text-pastel/70 max-w-sm mx-auto md:mx-0 leading-relaxed">
            Tell us your date, occasion and design idea — over a call, on
            WhatsApp, or a DM on Instagram.
          </p>
          <p className="font-body text-xs text-pastel/50 mt-5 tracking-wide">
            Puducherry, Tamil Nadu
          </p>
        </div>

        <div className="flex flex-col gap-3 max-w-xs mx-auto md:ml-auto md:mr-0 w-full">
          <a
            href="tel:+919345822082"
            className="font-body text-sm text-henna-950 bg-pastel px-6 py-3.5 rounded-full text-center hover:bg-henna-100 transition-colors focus-ring flex items-center justify-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.4 21 3 13.6 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.24 1.02z" />
            </svg>
            Call +91 93458 22082
          </a>
          <a
            href="https://wa.me/919345822082"
            target="_blank"
            rel="noreferrer"
            className="font-body text-sm text-pastel border border-pastel/40 px-6 py-3.5 rounded-full text-center hover:bg-white/5 transition-colors focus-ring flex items-center justify-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.47 14.38c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.9 1.12-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.32-1.44-.86-.76-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.15-.15.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.34-.03-.48-.08-.14-.68-1.65-.94-2.26-.25-.6-.5-.51-.68-.52-.17-.01-.38-.01-.58-.01-.19 0-.51.07-.78.34-.27.27-1.05 1.03-1.05 2.52 0 1.49 1.08 2.93 1.23 3.13.15.19 2.05 3.13 4.98 4.27 2.93 1.14 2.93.76 3.46.71.53-.05 1.7-.7 1.94-1.37.24-.68.24-1.26.17-1.37-.07-.12-.26-.19-.54-.34z" />
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.63 1.44 5.13L2 22l5.13-1.55a9.9 9.9 0 0 0 4.91 1.32h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.4 17.5 2 12.04 2zm0 18.09h-.01a8.16 8.16 0 0 1-4.15-1.13l-.3-.18-3.05.92.92-2.98-.19-.31a8.17 8.17 0 0 1-1.24-4.5c0-4.53 3.68-8.21 8.22-8.21a8.16 8.16 0 0 1 8.2 8.21c0 4.54-3.68 8.18-8.4 8.18z" />
            </svg>
            Chat on WhatsApp
          </a>
          <a
          
  href="https://www.instagram.com/henna_palettes_magic/"
  target="_blank"
  rel="noreferrer"
  className="font-body text-sm text-pastel/80 px-6 py-2 hover:text-pastel transition-colors focus-ring flex items-start justify-center gap-2 text-left"
>
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mt-0.5 flex-shrink-0">
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.24 2.22.4a3.7 3.7 0 0 1 1.37.9 3.7 3.7 0 0 1 .9 1.37c.16.42.35 1.05.4 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.8-.4 2.22a3.7 3.7 0 0 1-.9 1.37 3.7 3.7 0 0 1-1.37.9c-.42.16-1.05.35-2.22.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.24-2.22-.4a3.7 3.7 0 0 1-1.37-.9 3.7 3.7 0 0 1-.9-1.37c-.16-.42-.35-1.05-.4-2.22C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.24-1.8.4-2.22a3.7 3.7 0 0 1 .9-1.37 3.7 3.7 0 0 1 1.37-.9c.42-.16 1.05-.35 2.22-.4C8.42 2.17 8.8 2.16 12 2.16zm0 1.8c-3.14 0-3.5.01-4.73.07-1 .05-1.54.21-1.9.35a1.9 1.9 0 0 0-.72.47 1.9 1.9 0 0 0-.47.72c-.14.36-.3.9-.35 1.9-.06 1.23-.07 1.59-.07 4.73s.01 3.5.07 4.73c.05 1 .21 1.54.35 1.9.11.28.25.5.47.72.22.22.44.36.72.47.36.14.9.3 1.9.35 1.23.06 1.59.07 4.73.07s3.5-.01 4.73-.07c1-.05 1.54-.21 1.9-.35.28-.11.5-.25.72-.47.22-.22.36-.44.47-.72.14-.36.3-.9.35-1.9.06-1.23.07-1.59.07-4.73s-.01-3.5-.07-4.73c-.05-1-.21-1.54-.35-1.9a1.9 1.9 0 0 0-.47-.72 1.9 1.9 0 0 0-.72-.47c-.36-.14-.9-.3-1.9-.35-1.23-.06-1.59-.07-4.73-.07z" />
    <path d="M12 6.87a5.13 5.13 0 1 0 0 10.26 5.13 5.13 0 0 0 0-10.26zm0 8.46a3.33 3.33 0 1 1 0-6.66 3.33 3.33 0 0 1 0 6.66z" />
    <circle cx="17.5" cy="6.5" r="1.2" />
  </svg>
  @henna_palettes_magic on Instagram
</a>
        </div>
      </div>
    </section>
  );
}