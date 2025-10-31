import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="overflow-hidden bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-6">
        
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            
            className="h-full rounded-lg bg-orange-500 p-8 shadow-xl md:p-12 flex flex-col justify-center"
          >
            {/* Heading */}
            <h2 className="mb-4 text-3xl font-bold uppercase text-indigo-900 md:text-4xl">
              About Plutus
            </h2>
            
            {/* Paragraph text */}
            <p className="text-base leading-relaxed text-gray-800">
  We specialize in transforming both commercial and residential spaces
  through expert craftsmanship, modern aesthetics, and a deep
  understanding of how color influences human emotion and perception.
</p>

<p className="text-base leading-relaxed text-gray-800 mt-4">
  Our mission is to transform everyday spaces into meaningful environments
  that promote comfort, creativity, and emotional balance through the
  intelligent use of paint, color, and design.
</p>
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }} 
            className="h-[450px] md:h-[550px]" 
          >
            <img
              src="/assets/plutus-about.png" 
              alt="Beautifully painted modern interior"
              className="h-full w-full rounded-lg object-cover shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;