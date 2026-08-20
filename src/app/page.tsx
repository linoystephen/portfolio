import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#080b12] text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <ExperienceTimeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
