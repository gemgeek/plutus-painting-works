import { motion } from 'framer-motion';
import Team from '../sections/Team';
import AboutHeroImage from '../assets/plutus-hero.png'; 

const AboutPage = () => {
  return (
    <div className="bg-white">
      <section
        className="relative flex h-[300px] items-center justify-center bg-cover bg-center md:h-[400px]"
        style={{ backgroundImage: `url(${AboutHeroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-10 text-center text-4xl font-bold uppercase tracking-tight text-white md:text-6xl"
        >
          About Us
        </motion.h1>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="mb-4 text-3xl font-bold uppercase text-indigo-900 md:text-4xl">
              Our Passion, Your Space
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Plutus Painting Works was founded on a simple passion: to
              transform spaces with color and craftsmanship. We believe a coat
              of paint is more than just a color; it's a change of mood, a
              boost in productivity, and a reflection of personality.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              We specialize in transforming both commercial and residential
              spaces through expert craftsmanship, modern aesthetics, and a deep
              understanding of how color influences human emotion and
              perception. Our mission is to bring your vision to life,
              creating environments that don't just look beautiful, but feel
              right.
            </p>
          </motion.div>
        </div>
      </section>

      <Team />

      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-8 text-3xl font-bold uppercase text-indigo-900 md:text-4xl">
            Come Visit Us
          </h2>
          <p className="mb-2 text-xl font-semibold text-gray-800">
            Plutus Painting Works
          </p>
          <p className="mb-2 text-lg text-gray-700">Tema, Ghana</p>
          <p className="mb-2 text-lg text-gray-700">
            +233 54 279 2537 / 020 350 8629
          </p>
          <p className="text-lg text-gray-700">
            <a
              href="mailto:plutuspaintingworks23@gmail.com"
              className="text-orange-600 transition-colors hover:text-orange-700"
            >
              plutuspaintingworks23@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;