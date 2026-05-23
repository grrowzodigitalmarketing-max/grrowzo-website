export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <div>
          <h3 className="text-2xl font-bold">
            GRROWZO
          </h3>

          <p className="text-gray-400 mt-2">
            Premium Digital Growth Agency
          </p>
        </div>

        <div className="flex items-center gap-6 text-gray-400 text-sm">
          <a href="#" className="hover:text-white transition">
            Instagram
          </a>

          <a href="#" className="hover:text-white transition">
            LinkedIn
          </a>

          <a href="#" className="hover:text-white transition">
            Facebook
          </a>

          <a href="#" className="hover:text-white transition">
            YouTube
          </a>
        </div>

      </div>
    </footer>
  );
}