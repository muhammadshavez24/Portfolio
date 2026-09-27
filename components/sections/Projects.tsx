const projects = [
  { name: 'G Bazar', category: '3D E-Commerce Experience' },
  { name: 'Astra Studio', category: 'Brand Platform' },
  { name: 'Orbit Labs', category: 'Product Experience' },
];

export default function Projects() {
  return (
    <section id="work" className="section">
      <p className="uppercase tracking-[0.4em] text-[#00ff00] text-xs sm:text-sm">Selected Work</p>
      <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase">Project Universe</h2>

      <div className="mt-12 sm:mt-16 space-y-6 sm:space-y-8">
        {projects.map((project, index) => (
          <div key={project.name} className="glass rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute right-4 sm:right-6 top-4 sm:top-6 text-xs uppercase tracking-[0.3em] text-white/40">
              Project 0{index + 1}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 sm:gap-8 lg:gap-10 items-center mt-6 lg:mt-0">
              <div>
                <div className="h-40 sm:h-48 md:h-56 lg:h-64 rounded-[16px] sm:rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.2),_transparent_55%)]" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase">{project.name}</h3>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-white/70 uppercase tracking-[0.15em]">{project.category}</p>
                <button className="mt-6 sm:mt-8 inline-block border border-[#00ff00]/40 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full uppercase tracking-[0.2em] text-[#00ff00] text-xs sm:text-sm hover:border-[#00ff00]/60 transition-colors">
                  View Project →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
