import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-pastel border-t border-henna-100 py-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="h-9 w-9 rounded-full bg-white overflow-hidden inline-block">
            <img
              src={logo}
              alt="Henna Palettes logo"
              className="h-full w-full object-cover scale-125"
            />
          </span>
          <span className="font-display italic text-lg text-henna-900">Henna Palettes</span>
        </div>
        <p className="font-body text-xs text-henna-700/70">
          © {new Date().getFullYear()} Henna Palettes Magic, Puducherry. All rights reserved.
        </p>
      </div>
    </footer>
  );
}