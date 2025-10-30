import { motion } from 'framer-motion';
import {
  FaPalette,
  FaHome,
  FaPaintRoller,
  FaLightbulb,
  FaComments,
  FaMagic,
} from 'react-icons/fa';
import ServicesHeroImage from '../assets/plutus-hero.png'; 

const ServicesPage = () => {
  const servicesList = [
    {
      icon: <FaHome size={32} />,
      title: 'Space Planning & Interior Styling',
      desc: 'We design layouts that optimize flow, function, and aesthetics.',
    },
    {
      icon: <FaPaintRoller size={32} />,
      title: 'Professional Interior & Exterior Painting',
      desc: 'Flawless finishes with premium materials for lasting beauty.',
    },
    {
      icon: <FaMagic size={32} />,
      title: 'Professional Interior & Exterior Decoration',
      desc: 'Curating furniture, art, and decor to create a cohesive look.',
    },
    {
      icon: <FaPalette size={32} />,
      title: 'Art-Inspired Wall Features & Murals',
      desc: 'Custom-designed murals and features that turn walls into art.',
    },
    {
      icon: <FaComments size={32} />,
      title: 'Design Consultation',
      desc: 'Expert advice to help you discover your style and plan your project.',
    },
    {
      icon: <FaLightbulb size={32} />,
      title: 'Color Consultation',
      desc: 'Our signature ColorSense Design™ approach to find your perfect palette.',
    },
  ];

  const colorMeanings = [
    { color: 'Blue', desc: 'Calm, trust, and relaxation, ideal for hospitals, bedrooms, and offices.' },
    { color: 'Green', desc: 'Balance, renewal, and connection with nature great for recovery areas.' },
    { color: 'Yellow', desc: 'Optimism, clarity, and creativity perfect for lobbies and studios.' },
    { color: 'White', desc: 'Purity and openness beautiful when paired with warm tones for comfort.' },
    { color: 'Gray', desc: 'Sophisticated and neutral excellent for modern spaces, balanced with accents.' },
    { color: 'Pastel Hues', desc: 'Emotional balance and inner peace soothing for therapy rooms.' },
  ];

  const processSteps = [
    {
      name: 'Consultation & Discovery',
      desc: 'We begin by understanding your goals, the people who use your space, and the emotions you want to evoke.',
    },
    {
      name: 'Mood Mapping',
      desc: 'Our experts recommend color palettes that match your desired atmosphere — calming, energizing, or restorative.',
    },
    {
      name: 'Design & Visualization',
      desc: 'We plan layouts, accent walls, and art features to bring your space to life.',
    },
  ];

  return (
    <div className="bg-white">
      <section
        className="relative flex h-[300px] items-center justify-center bg-cover bg-center md:h-[400px]"
        style={{ backgroundImage: `url(${ServicesHeroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-10 text-center text-4xl font-bold uppercase tracking-tight text-white md:text-6xl"
        >
          Our Services
        </motion.h1>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold uppercase text-indigo-900 md:text-4xl">
            What We Do
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicesList.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg bg-gray-50 p-6 shadow-lg"
              >
                <div className="mb-4 text-orange-500">{service.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-indigo-900">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-indigo-900 py-16 text-white md:py-24">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="mb-4 text-3xl font-bold uppercase text-white md:text-4xl">
              ColorSense Design™
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-200">
              Our journey began with a simple passion: to make every wall a
              story of beauty, quality, and care. Over time, we discovered
              that painting goes beyond decoration—it shapes how people feel,
              think, and heal within their spaces.
            </p>
            <p className="text-lg leading-relaxed text-gray-200">
              That realization inspired our signature approach: ColorSense
              Design™ — a creative method that merges artistic vision with the
              psychology of color to design environments that inspire calm,
              energy, and emotional harmony.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold uppercase text-indigo-900 md:text-4xl">
            The Science of Color
          </h2>
          <p className="mb-12 text-center text-lg text-gray-700 max-w-3xl mx-auto">
            Color is more than an aesthetic choice; it&rsquo;s a language. It
            speaks to our emotions, influencing how we feel, behave, and even
            recover. At Plutus Painting Works, we study how color
            psychology can enhance well-being and performance in various
            settings.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {colorMeanings.map((color, index) => (
              <div key={index} className="rounded-lg bg-gray-50 p-6 shadow-md">
                <h3 className="mb-2 text-xl font-bold text-orange-600">
                  {color.color}
                </h3>
                <p className="text-gray-700">{color.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold uppercase text-indigo-900 md:text-4xl">
            Why Color Matters in Spaces
          </h2>
          <h3 className="mb-4 text-center text-2xl font-semibold text-gray-800">
            Beyond Paint: Designing for Emotion
          </h3>
          <p className="mb-8 text-center text-lg text-gray-700">
            Research shows that environments influence mood, recovery, and
            productivity. Our surroundings can either calm us or heighten
            our stress. That&rsquo;s why Plutus Painting Works designs with
            intention, every color, texture, and finish serves a purpose.
          </p>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h4 className="mb-2 text-xl font-bold text-indigo-800">In hospitals and healthcare:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Reduce stress and anxiety</li>
                <li>Encourage relaxation and healing</li>
                <li>Boost staff focus and morale</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-xl font-bold text-indigo-800">In homes and offices:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Increase creativity and productivity</li>
                <li>Support mental clarity</li>
                <li>Promote happiness and harmony</li>
              </ul>
            </div>
          </div>
          
          <p className="mt-8 text-center text-xl font-semibold italic text-gray-900">
            Your walls should not only look good, they should feel right.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold uppercase text-indigo-900 md:text-4xl">
            Our Approach: The Plutus Process
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-2xl font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="mb-2 text-xl font-bold text-indigo-900">
                  {step.name}
                </h3>
                <p className="text-gray-700">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 border-t border-gray-200 pt-12 md:grid-cols-2">
            <div>
              <h3 className="mb-2 text-xl font-bold text-indigo-900">
                Professional Execution
              </h3>
              <p className="text-gray-700">
                Our skilled painters use premium materials and precision
                techniques to deliver long-lasting, flawless results.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold text-indigo-900">
                Aftercare & Maintenance
              </h3>
              <p className="text-gray-700">
                We offer support and repainting services to keep your space
                beautiful and balanced over time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;