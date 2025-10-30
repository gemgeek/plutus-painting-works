import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ColorSenseImage from '../assets/color-palette.png';

const ColorSense = () => {
  return (
    <section id="color-sense" className="overflow-hidden bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="h-[450px] md:h-[550px]"
          >
            <img
              src={ColorSenseImage}
              alt="A palette of paint colors"
              className="h-full w-full rounded-lg object-cover shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="h-full rounded-lg bg-gray-100 p-8 shadow-xl md:p-12 flex flex-col justify-center"
          >
            <h2 className="mb-4 text-3xl font-bold uppercase text-indigo-900 md:text-4xl">
              ColorSense Design™
            </h2>

            <p className="mb-6 text-base leading-relaxed text-gray-700">
              Painting is more than decoration, it shapes how you feel.
              Our signature approach merges artistic vision with the
              psychology of color to design environments that inspire
              calm, energy, and emotional harmony.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              Your walls shouldn't just look good, they should feel right.
            </p>

            <Link
              to="/services"
              className="mt-6 inline-block w-fit rounded-full bg-indigo-900 px-8 py-3 font-semibold text-white transition-colors hover:bg-indigo-700"
            >
              Learn Our Process
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ColorSense;