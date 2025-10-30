import HeroBackgroundImage from '../assets/plutus-hero.png';

const Hero = () => {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroBackgroundImage})` }}
    >
      {/* Transparent overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Text content */}
      <div className="relative z-10 max-w-3xl text-center text-white">
        <h1 className="mb-4 text-4xl font-bold uppercase tracking-tight md:text-6xl">
          Need a new splash of color? Call us today!
        </h1>
        <p className="mb-8 text-lg md:text-xl">
          Quality Painting Services for Your Home & Business
        </p>
        <a
          href="#contact" 
          className="rounded-full bg-orange-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-orange-700"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;