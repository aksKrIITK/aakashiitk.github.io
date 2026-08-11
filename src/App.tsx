import { Nav } from './components/sections/Nav';
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Projects } from './components/sections/Projects';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

export default function App() {
  return (
    <div className="bg-bg min-h-screen">
      <Nav />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
