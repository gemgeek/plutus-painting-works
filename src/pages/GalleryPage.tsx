import { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from '../components/Lightbox';
import { FaPlayCircle, FaImage } from 'react-icons/fa';

const galleryItems = [
  {
    type: 'image' as const,
    thumbnail: '/assets/plutus-2.jpg',
    src: '/assets/plutus-2.jpg',
  },
  {
    type: 'video' as const,
    thumbnail: '/assets/plutus-work.jpg',
    src: '/assets/plutus-vid-1.mp4',
  },
  {
    type: 'image' as const,
    thumbnail: '/assets/plutus-3.jpg',
    src: '/assets/plutus-3.jpg',
  },
  {
    type: 'image' as const,
    thumbnail: '/assets/plutus-4.jpg',
    src: '/assets/plutus-4.jpg',
  },
  {
    type: 'image' as const,
    thumbnail: '/assets/plutus-5.jpg',
    src: '/assets/plutus-5.jpg',
  },
  {
    type: 'video' as const,
    thumbnail: '/assets/plutus-work-2.jpg',
    src: '/assets/plutus-vid-2.mp4',
  },
  {
    type: 'image' as const,
    thumbnail: '/assets/plutus-6.jpg',
    src: '/assets/plutus-6.jpg',
  },
  {
    type: 'image' as const,
    thumbnail: '/assets/plutus-7.jpg',
    src: '/assets/plutus-7.jpg',
  },
  {
    type: 'video' as const,
    thumbnail: '/assets/plutus-work-2.jpg',
    src: '/assets/plutus-vid-3.mp4',
  },
  {
    type: 'image' as const,
    thumbnail: '/assets/plutus-8.jpg',
    src: '/assets/plutus-8.jpg',
  },
  {
    type: 'image' as const,
    thumbnail: '/assets/plutus-9.jpg',
    src: '/assets/plutus-9.jpg',
  },
  {
    type: 'image' as const,
    thumbnail: '/assets/plutus-10.jpg',
    src: '/assets/plutus-10.jpg',
  },
  {
    type: 'image' as const,
    thumbnail: '/assets/plutus-11.jpg',
    src: '/assets/plutus-11.jpg',
  },
  {
    type: 'image' as const,
    thumbnail: '/assets/plutus-12.jpg',
    src: '/assets/plutus-12.jpg',
  },
  {
    type: 'video' as const,
    thumbnail: '/assets/plutus-11.jpg',
    src: '/assets/plutus-vid-4.mp4',
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
        style={{ backgroundImage: `url('/assets/plutus-1.jpg')` }}
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