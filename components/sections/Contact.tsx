export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="glass rounded-[24px] sm:rounded-[40px] p-6 sm:p-12 md:p-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,0,0.12),_transparent_50%)]" />
        <div className="relative z-10">
          <p className="uppercase tracking-[0.4em] text-[#00ff00] text-xs sm:text-sm">Start a Project</p>
          <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-7xl uppercase leading-tight">
            Let&apos;s
            <br />
            Build
            <br />
            Something
            <br />
            Digital.
          </h2>

          <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg text-white/70">
            Have a project in mind? Let&apos;s turn the idea into an experience.
          </p>

          <button className="mt-8 sm:mt-10 inline-block glass px-6 sm:px-8 py-3 sm:py-4 rounded-full uppercase tracking-[0.2em] neon text-white text-sm sm:text-base hover:border-[#00ff00]/60 transition-all">
            Start a Project →
          </button>
        </div>
      </div>
    </section>
  );
}
