const projects = [
  { name: 'G Bazar', category: '3D E-Commerce Experience' },
  { name: 'Astra Studio', category: 'Brand Platform' },
  { name: 'Orbit Labs', category: 'Product Experience' },
];

export default function Projects() {
  return (
    <section className="section">
      <p className="uppercase tracking-[0.4em] text-[#00ff00] text-sm">Selected Work</p>
      <h2 className="mt-5 text-4xl md:text-6xl uppercase">Project Universe</h2>

      <div className="mt-16 space-y-8">
        {projects.map((project, index) => (
          <div key={project.name} className="glass rounded-[32px] p-8 relative overflow-hidden">
            <div className="absolute right-6 top-6 text-xs uppercase tracking-[0.3em] text-white/40">
              Project 0{index + 1}
            </div>
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
              <div>
                <div className="h-64 rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.2),_transparent_55%)]" />
              </div>
              <div>
                <h3 className="text-3xl md:text-5xl uppercase">{project.name}</h3>
                <p className="mt-4 text-white/70 uppercase tracking-[0.15em]">{project.category}</p>
                <button className="mt-8 inline-block border border-[#00ff00]/40 px-6 py-3 rounded-full uppercase tracking-[0.2em] text-[#00ff00]">
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
