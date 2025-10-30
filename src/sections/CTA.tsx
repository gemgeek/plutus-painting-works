import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="bg-gray-100 py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="container mx-auto max-w-7xl px-6 text-center"
      >
        {/* Main Headline */}
        <h2 className="mb-4 text-3xl font-bold uppercase text-indigo-900 md:text-4xl">
          Ready to Transform Your Space?
        </h2>

        {/* Supporting Text */}
        <p className="mx-auto mb-8 max-w-2xl text-lg text-indigo-900">
          Let's bring your vision to life. Contact Plutus Painting Works
          today for a free, no-obligation consultation and let us add
          color to your world.
        </p>

        <a
          href="#contact" 
          className="inline-block rounded-md bg-orange-500 px-10 py-3 text-lg font-semibold text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
        >
          Get a Free Quote
        </a>
      </motion.div>
    </section>
  );
};

export default CTA;