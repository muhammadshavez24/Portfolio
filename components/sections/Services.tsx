const services = [
  { title: 'Web Development', text: 'Modern responsive websites built for performance.' },
  { title: '3D Experiences', text: 'Interactive digital experiences using WebGL.' },
  { title: 'Business Websites', text: 'Professional websites designed to convert visitors.' },
  { title: 'Custom Digital Products', text: 'Tailored interfaces and web experiences.' },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <p className="uppercase tracking-[0.4em] text-[#00ff00] text-xs sm:text-sm">What I Build</p>
      <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase">Services</h2>

      <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="glass rounded-[24px] p-6 sm:p-8 min-h-[240px] sm:min-h-[280px] border border-white/10 hover:border-[#00ff00]/30 transition-all flex flex-col justify-start"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-[#00ff00]">0{index + 1}</div>
            <h3 className="mt-6 sm:mt-8 text-lg sm:text-2xl uppercase">{service.title}</h3>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-white/70">{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
