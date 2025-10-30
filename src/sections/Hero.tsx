import { Link } from 'react-router-dom';
import HeroBackgroundImage from '../assets/plutus-hero.png';

const Hero = () => {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroBackgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-3xl text-center text-white">
        <h1 className="mb-6 text-4xl font-bold uppercase tracking-tight leading-snug md:text-6xl">
          Need a new splash of color? Call us today!
        </h1>
        <p className="mb-10 text-lg leading-relaxed md:text-xl">
          Quality Painting Services for Your Home & Business
        </p>
        <Link
          to="/contact"
          className="rounded-full bg-orange-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-orange-700"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default Hero;