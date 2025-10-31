import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const servicesData = [
  {
    title: 'Space Planning & Interior Styling',
    image: '/assets/styling-space.png'
  },
  {
    title: 'Professional Interior & Exterior Painting',
    image: '/assets/painting-interior.png'
  },
  {
    title: 'Professional Interior & Exterior Decoration',
    image: '/assets/decoration-exterior.png'
  },
  {
    title: 'Color Consultation and Theme Design',
    image: '/assets/color-consult.png'
  },
  {
    title: 'Art-Inspired Wall Features & Murals',
    image: '/assets/mural-art.png'
  },
];

const ServiceCard = ({ image, title }: { image: string; title: string }) => (
  <div
    className="group relative h-80 w-full rounded-lg shadow-xl"
    style={{
      background: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 rounded-lg bg-black/40 transition-opacity group-hover:bg-black/60" />

    {/* Text content */}
    <div className="relative flex h-full items-end p-6">
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
  </div>
);

const Expertise = () => {
  return (
    <section id="services" className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-6">

        {/* Section Title */}
        <h2 className="mb-12 text-center text-3xl font-bold uppercase text-indigo-900 md:text-4xl">
          Our Expertise
        </h2>

        {/* Swiper.js Carousel */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          autoplay={{
            delay: 2000, 
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true, 
          }}
          navigation={true} 
          spaceBetween={30} 
          breakpoints={{
            
            640: {
              slidesPerView: 1, 
            },
            768: {
              slidesPerView: 2, 
            },
            1024: {
              slidesPerView: 3, 
            },
          }}
          className="!pb-12" 
        >
          {servicesData.map((service, index) => (
            <SwiperSlide key={index}>
              <ServiceCard image={service.image} title={service.title} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Expertise;