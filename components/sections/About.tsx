export default function About() {
  return (
    <section className="section">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="uppercase tracking-[0.3em] text-[#00ff00] text-sm mb-6">01 / Introduction</p>
          <h2 className="text-4xl md:text-6xl uppercase leading-none">
            I don&apos;t just build websites.
            <span className="block text-white/70">I build digital experiences.</span>
          </h2>
          <p className="mt-8 text-lg text-white/70">
            I&apos;m Muhammad Shavez, a web developer focused on creating modern,
            interactive, high-performing digital experiences.
          </p>
        </div>

        <div className="glass rounded-[32px] p-8 min-h-[360px] relative">
          <div className="absolute inset-8 border border-white/10 rounded-[28px]" />
          <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00ff00]/40 bg-white/[0.02]" />
          <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-white/[0.04]" />
        </div>
      </div>
    </section>
  );
}
