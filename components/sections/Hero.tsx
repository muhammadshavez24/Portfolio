export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 pt-20 sm:pt-32 pb-8 sm:pb-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,0,0.12),_transparent_30%)]" />
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-xs sm:text-sm uppercase tracking-[0.5em] text-[#00ff00] mb-4 sm:mb-6">Digital Developer</p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] text-glow mb-4 sm:mb-6">
              Muhammad
              <br />
              Shavez
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide text-white/80 mb-6 sm:mb-8">
              Web Developer
            </h2>
            <p className="text-base sm:text-lg text-white/70 mb-6 sm:mb-8">
              I build digital experiences that move, engage, and convert.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
              <button className="glass px-6 sm:px-7 py-2.5 sm:py-3 rounded-full uppercase tracking-[0.2em] neon text-white text-sm sm:text-base whitespace-nowrap">
                View My Work
              </button>
              <button className="px-6 sm:px-7 py-2.5 sm:py-3 rounded-full uppercase tracking-[0.2em] border border-white/15 text-white text-sm sm:text-base whitespace-nowrap">
                Let&apos;s Build
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative h-64 sm:h-80 md:h-96 lg:h-[500px] w-full">
            <div className="absolute inset-0 rounded-full border border-white/10 bg-[radial-gradient(circle,_rgba(168,85,247,0.2),_transparent_60%)]" />
            <div className="absolute left-1/2 top-1/2 h-40 w-40 sm:h-52 sm:w-52 md:h-64 md:w-64 lg:h-72 lg:w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00ff00]/50 bg-white/5 backdrop-blur-xl shadow-[0_0_80px_rgba(0,255,0,0.15)]" />
            <div className="absolute left-1/2 top-1/2 h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-52 lg:w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a855f7]/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
