import { motion } from 'framer-motion';
import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import ContactHeroImage from '../assets/plutus-hero.png'; 

const ContactPage = () => {
  const whatsappLink =
    'https://wa.me/233542792537'; 

  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section
        className="relative flex h-[300px] items-center justify-center bg-cover bg-center md:h-[400px]"
        style={{ backgroundImage: `url(${ContactHeroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-10 text-center text-4xl font-bold uppercase tracking-tight text-white md:text-6xl"
        >
          Contact Us
        </motion.h1>
      </section>

      {/* 3. Main Content (Text + Form) */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            
            {/* Column 1: Info & WhatsApp Button */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="mb-4 text-3xl font-bold uppercase text-indigo-900 md:text-4xl">
                Let's Talk
              </h2>
              <p className="mb-6 text-lg text-gray-700">
                We're based in Ghana, but our vision is global. We are
                fully equipped and excited to bring our expertise in
                transformative design and painting to projects anywhere in
                the world.
              </p>
              <p className="mb-8 text-lg text-gray-700">
                Have a question or want to start a project? Send us a message
                or connect with us directly.
              </p>
              
              {/* WhatsApp Button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-12 inline-flex items-center gap-3 rounded-lg bg-green-500 px-8 py-4 text-lg font-bold text-white transition-transform hover:scale-105"
              >
                <FaWhatsapp size={24} />
                Get in Touch on WhatsApp
              </a>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaPhone className="text-orange-500" size={20} />
                  <span className="text-gray-700">
                    +233 54 279 2537 / +233 53 502 7439
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-orange-500" size={20} />
                  <a
                    href="mailto:plutuspaintingworks23@gmail.com"
                    className="text-gray-700 hover:text-orange-600"
                  >
                    plutuspaintingworks23@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-orange-500" size={20} />
                  <span className="text-gray-700">Tema, Ghana</span>
                </div>
              </div>
            </motion.div>

            {/* Column 2: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="mb-4 text-3xl font-bold uppercase text-indigo-900 md:text-4xl">
                Get a Free Quote
              </h2>
              <form
                action="https://formspree.io/f/xyzbplao" 
                method="POST"
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="mb-1 block font-medium text-gray-700">Full Name</label>
                  <input type="text" id="name" name="name" required className="w-full rounded-md border border-gray-300 p-3 focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block font-medium text-gray-700">Email Address</label>
                  <input type="email" id="email" name="email" required className="w-full rounded-md border border-gray-300 p-3 focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1 block font-medium text-gray-700">Phone Number (Optional)</label>
                  <input type="tel" id="phone" name="phone" className="w-full rounded-md border border-gray-300 p-3 focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1 block font-medium text-gray-700">Subject</label>
                  <input type="text" id="subject" name="subject" required className="w-full rounded-md border border-gray-300 p-3 focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block font-medium text-gray-700">Your Message</label>
                  <textarea id="message" name="message" rows={5} required className="w-full rounded-md border border-gray-300 p-3 focus:border-indigo-500 focus:ring-indigo-500"></textarea>
                </div>
                <div>
                  <button type="submit" className="rounded-lg bg-indigo-800 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-indigo-900">
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;