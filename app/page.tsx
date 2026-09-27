import Navigation from '@/components/Navigation';
import LoadingScreen from '@/components/LoadingScreen';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="bg-[#050505] text-white min-h-screen overflow-x-hidden">
      <LoadingScreen />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
