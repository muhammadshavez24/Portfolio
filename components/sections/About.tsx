export default function About() {
  return (
    <section id="about" className="section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <p className="uppercase tracking-[0.3em] text-[#00ff00] text-xs sm:text-sm mb-4 sm:mb-6">01 / Introduction</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase leading-tight">
            I don&apos;t just build websites.
            <span className="block text-white/70">I build digital experiences.</span>
          </h2>
          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-white/70">
            I&apos;m Muhammad Shavez, a web developer focused on creating modern,
            interactive, high-performing digital experiences.
          </p>
        </div>

        <div className="order-1 lg:order-2 glass rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 min-h-[280px] sm:min-h-[360px] relative">
          <div className="absolute inset-6 sm:inset-8 border border-white/10 rounded-[20px] sm:rounded-[28px]" />
          <div className="absolute left-1/2 top-1/2 h-32 sm:h-52 w-32 sm:w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00ff00]/40 bg-white/[0.02]" />
          <div className="absolute left-1/2 top-1/2 h-20 sm:h-32 w-20 sm:w-32 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-white/[0.04]" />
        </div>
      </div>
    </section>
  );
}
