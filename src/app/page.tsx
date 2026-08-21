import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Projects } from '../components/Projects';
import { Resume } from '../components/Resume';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { ExperienceTimeline } from '../components/ExperienceTimeline';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <ExperienceTimeline />
        <Services />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
