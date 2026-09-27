export default function Footer() {
  return (
    <footer className="section pt-0 pb-10">
      <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <div className="text-3xl font-black uppercase">Muhammad Shavez</div>
          <div className="mt-2 text-white/60 uppercase tracking-[0.2em] text-sm">
            Web Developer
          </div>
        </div>

        <div className="flex gap-8 uppercase text-sm tracking-[0.2em] text-white/70 flex-wrap">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
          <a href="#">Email</a>
        </div>
      </div>
    </footer>
  );
}
