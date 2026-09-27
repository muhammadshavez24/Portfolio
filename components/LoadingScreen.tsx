'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] text-white flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative z-10 text-center">
        <div className="text-[10px] uppercase tracking-[0.8em] text-white/80 mb-5">MS</div>
        <div className="text-2xl md:text-4xl uppercase tracking-[0.3em] text-glow mb-8">
          Loading Digital Experience
        </div>
        <div className="text-5xl md:text-7xl font-black tracking-[0.1em] mb-8">{progress}%</div>
        <div className="mx-auto h-px w-[260px] max-w-[70vw] bg-white/20 overflow-hidden">
          <div
            className="h-full bg-[#00ff00] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
