'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);

    const move = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      <div className="h-6 w-6 rounded-full border border-[#00ff00]/80 bg-[#00ff00]/10" />
    </div>
  );
}
