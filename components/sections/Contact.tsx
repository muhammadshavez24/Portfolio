export default function Contact() {
  return (
    <section className="section">
      <div className="glass rounded-[40px] p-8 md:p-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,0,0.12),_transparent_50%)]" />
        <div className="relative z-10">
          <p className="uppercase tracking-[0.4em] text-[#00ff00] text-sm">Start a Project</p>
          <h2 className="mt-5 text-4xl md:text-7xl uppercase leading-none">
            Let&apos;s
            <br />
            Build
            <br />
            Something
            <br />
            Digital.
          </h2>

          <p className="mt-8 max-w-xl text-lg text-white/70">
            Have a project in mind? Let&apos;s turn the idea into an experience.
          </p>

          <button className="mt-10 inline-block glass px-8 py-4 rounded-full uppercase tracking-[0.2em] neon text-white">
            Start a Project →
          </button>
        </div>
      </div>
    </section>
  );
}
