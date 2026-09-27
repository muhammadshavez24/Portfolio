export default function Navigation() {
  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <nav className="glass px-6 py-3 rounded-full">
        <ul className="flex items-center gap-8 text-sm uppercase tracking-[0.2em] text-white/80">
          <li className="text-white">MS</li>
          <li>Work</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
