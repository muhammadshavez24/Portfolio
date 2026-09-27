export default function Footer() {
  return (
    <footer className="section pt-0 pb-6 sm:pb-10">
      <div className="border-t border-white/10 pt-6 sm:pt-10 flex flex-col sm:flex-row justify-between gap-6 sm:gap-8">
        <div>
          <div className="text-2xl sm:text-3xl font-black uppercase">Muhammad Shavez</div>
          <div className="mt-2 text-white/60 uppercase tracking-[0.2em] text-xs sm:text-sm">
            Web Developer
          </div>
        </div>

        <div className="flex flex-wrap gap-4 sm:gap-8 uppercase text-xs sm:text-sm tracking-[0.2em] text-white/70">
          <a href="#" className="hover:text-[#00ff00] transition-colors">GitHub</a>
          <a href="#" className="hover:text-[#00ff00] transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-[#00ff00] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[#00ff00] transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
