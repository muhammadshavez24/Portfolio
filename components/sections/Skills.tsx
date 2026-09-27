const skills = [
  'React',
  'JavaScript',
  'Node.js',
  'HTML',
  'CSS',
  'Three.js',
  'Git',
  'Next.js',
];

export default function Skills() {
  return (
    <section className="section">
      <div className="text-center mb-12 sm:mb-16">
        <p className="uppercase tracking-[0.4em] text-[#00ff00] text-xs sm:text-sm">My Stack</p>
        <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase">Creative Technology</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {skills.map((skill, idx) => (
          <div
            key={skill}
            className="glass rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 text-center hover:border-[#00ff00]/40 transition-all"
            style={{ transform: `translateY(${idx % 2 === 0 ? 0 : 12}px)` }}
          >
            <div className="text-lg sm:text-xl uppercase tracking-[0.2em] text-white/90">{skill}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
