import { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from '../components/Lightbox';
import { FaPlayCircle, FaImage } from 'react-icons/fa';

import GalleryHeroImage from '../assets/plutus-1.jpg';
import img1 from '../assets/plutus-2.jpg';
import img3 from '../assets/plutus-3.jpg';
import img4 from '../assets/plutus-4.jpg';
import img5 from '../assets/plutus-5.jpg';
import img6 from '../assets/plutus-6.jpg';
import img7 from '../assets/plutus-7.jpg';
import img8 from '../assets/plutus-8.jpg';

import myVideo1 from '../assets/plutus-vid-1.mp4';
import myVideo2 from '../assets/plutus-vid-2.mp4';
import myVideo3 from '../assets/plutus-vid-3.mp4';

import videoThumb1 from '../assets/plutus-work.jpg';
import videoThumb2 from '../assets/plutus-work-2.jpg';

const galleryItems = [
  {
    type: 'image' as const,
    thumbnail: img1,
    src: img1,
  },
  {
    type: 'video' as const,
    thumbnail: videoThumb1,
    src: myVideo1,
  },
  {
    type: 'image' as const,
    thumbnail: img3,
    src: img3,
  },
  {
    type: 'image' as const,
    thumbnail: img4,
    src: img4,
  },
  {
    type: 'image' as const,
    thumbnail: img5,
    src: img5,
  },
  {
    type: 'video' as const,
    thumbnail: videoThumb2,
    src: myVideo2,
  },
  {
    type: 'image' as const,
    thumbnail: img6,
    src: img6,
  },
  {
    type: 'image' as const,
    thumbnail: img7,
    src: img7,
  },
  {
    type: 'video' as const,
    thumbnail: videoThumb2,
    src: myVideo3,
  },
  {
    type: 'image' as const,
    thumbnail: img8,
    src: img8,
  },
];

const GalleryPage = () => {
  const [selectedItem, setSelectedItem] = useState<{
    src: string;
    type: 'image' | 'video';
  } | null>(null);

  return (
    <div className="bg-white">
      <section
        className="relative flex h-[300px] items-center justify-center bg-cover bg-center md:h-[400px]"
        style={{ backgroundImage: `url(${GalleryHeroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-10 text-center text-4xl font-bold uppercase tracking-tight text-white md:text-6xl"
        >
          Our Gallery
        </motion.h1>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <p className="mb-12 text-center text-lg text-gray-700 max-w-3xl mx-auto">
            A picture is worth a thousand words. Here’s a look at some of the
            spaces we’ve had the privilege to transform.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
                onClick={() => setSelectedItem(item)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={item.thumbnail}
                  alt="Gallery item"
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.type === 'video' ? (
                    <FaPlayCircle size={60} />
                  ) : (
                    <FaImage size={60} />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedItem && (
        <Lightbox
          src={selectedItem.src}
          type={selectedItem.type}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
};

export default GalleryPage;