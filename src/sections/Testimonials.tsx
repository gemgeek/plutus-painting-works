import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const testimonialsData = [
  {
    quote:
      'The painting work transformed our school environment. The vibrancy and creativity in their work has greatly uplifted our space!',
    name: 'Head of Burma Camp Junior High School',
  },
  {
    quote:
      'A truly talented artist! The finishes were immaculate and delivered on time. I’m extremely satisfied with the work.',
    name: 'Mr. Gameli',
  },
  {
    quote:
      'Fantastic job! Plutus Painting Works exceeded my expectations!',
    name: 'Issah Nurudeen',
  },
  {
    quote:
      "We couldn't be happier with the results. Attention to detail was impeccable. Highly recommend!",
    name: 'Head of St. Paul Methodist Junior High',
  },
  {
    quote:
      "It was a pleasure collaborating with PPW. The professionalism and quality of work are commendable!",
    name: 'Mr. George Ayisi',
  },
  {
    quote:
      "Impressive craftsmanship and creativity! ",
    name: 'Representative of Seidag Limited',
  },   
];

const StarRating = () => (
  <div className="flex justify-center text-indigo-500">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-orange-600 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-6">

        <h2 className="mb-12 text-center text-3xl font-bold uppercase text-white md:text-4xl">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          slidesPerView={1} 
          spaceBetween={30}
          className="!pb-12" 
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="mx-auto max-w-2xl text-center">

                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gray-200" />

                <StarRating />

                <blockquote className="my-4 text-lg italic leading-relaxed text-gray-100">
                  "{testimonial.quote}"
                </blockquote>

                <p className="font-bold text-white">
                  — {testimonial.name}
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Testimonials;