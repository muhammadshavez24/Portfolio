const services = [
  { title: 'Web Development', text: 'Modern responsive websites built for performance.' },
  { title: '3D Experiences', text: 'Interactive digital experiences using WebGL.' },
  { title: 'Business Websites', text: 'Professional websites designed to convert visitors.' },
  { title: 'Custom Digital Products', text: 'Tailored interfaces and web experiences.' },
];

export default function Services() {
  return (
    <section className="section">
      <p className="uppercase tracking-[0.4em] text-[#00ff00] text-sm">What I Build</p>
      <h2 className="mt-5 text-4xl md:text-6xl uppercase">Services</h2>

      <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="glass rounded-[28px] p-8 min-h-[280px] border border-white/10 hover:border-[#00ff00]/30 transition-all"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-[#00ff00]">0{index + 1}</div>
            <h3 className="mt-8 text-2xl uppercase">{service.title}</h3>
            <p className="mt-6 text-white/70">{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
