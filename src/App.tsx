import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Expertise from './sections/Expertise';
import ColorSense from './sections/ColorSense';
import Testimonials from './sections/Testimonials';
import Team from './sections/Team';
import CTA from './sections/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <ColorSense />
      <Testimonials />
      <Team />
      <CTA />
      <Footer />
    </main>
  );
}

export default App;