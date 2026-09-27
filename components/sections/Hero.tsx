export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,0,0.12),_transparent_30%)]" />
      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-2 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-[#00ff00] mb-6">Digital Developer</p>
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] text-glow">
            Muhammad
            <br />
            Shavez
          </h1>
          <h2 className="mt-6 text-3xl md:text-5xl uppercase tracking-wide text-white/80">
            Web Developer
          </h2>
          <p className="mt-8 max-w-xl text-lg text-white/70">
            I build digital experiences that move, engage, and convert.
          </p>

          <div className="mt-10 flex gap-5 flex-wrap">
            <button className="glass px-7 py-3 rounded-full uppercase tracking-[0.2em] neon text-white">
              View My Work
            </button>
            <button className="px-7 py-3 rounded-full uppercase tracking-[0.2em] border border-white/15 text-white">
              Let&apos;s Build
            </button>
          </div>
        </div>

        <div className="relative h-[500px]">
          <div className="absolute inset-0 rounded-full border border-white/10 bg-[radial-gradient(circle,_rgba(168,85,247,0.2),_transparent_60%)]" />
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00ff00]/50 bg-white/5 backdrop-blur-xl shadow-[0_0_80px_rgba(0,255,0,0.15)]" />
          <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a855f7]/40" />
        </div>
      </div>
    </section>
  );
}
