import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import teamImg1 from '../assets/team-member-1.png'; 
import teamImg2 from '../assets/team-member-2.png'; 
import teamImg3 from '../assets/team-member-3.png';
import teamImg4 from '../assets/team-member-4.png'; 

const teamData = [
  {
    name: 'Emmanuel O. Mensah',
    title: 'Chief Executive Officer',
    image: teamImg1, 
  },
  {
    name: 'Matilda Esenam Gbeve',
    title: 'Brand & Strategy Director',
    image: teamImg2, 
  },
  {
    name: 'Kingsley Donkor',
    title: 'Business Development Director',
    image: teamImg3, 
  },
  
  {
    name: 'Nancy Frimpomaa',
    title: 'Interior Design Lead',
    image: teamImg4, 
  },
];


const TeamMemberCard = ({
  image,
  name,
  title,
}: {
  image: string;
  name: string;
  title: string;
}) => (
  <div className="team-card flex flex-col items-center rounded-lg bg-white p-8 shadow-lg transition-all duration-300">
    <img
      src={image}
      alt={name}
      className="mb-4 h-32 w-32 rounded-full border-4 border-transparent object-cover"
    />
    <h3 className="mb-1 text-xl font-bold text-indigo-900">{title}</h3>
    <p className="text-base text-gray-700">{name}</p>
  </div>
);


const Team = () => {
  return (
    <section id="team" className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-6">

        {/* Section Title */}
        <h2 className="mb-12 text-center text-3xl font-bold uppercase text-indigo-900 md:text-4xl">
          Our Team
        </h2>

        {/* Swiper.js Carousel */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          centeredSlides={true} 
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }, 
          }}
          className="!pb-12"
        >
          {teamData.map((member, index) => (
            <SwiperSlide key={index}>
              <TeamMemberCard
                image={member.image}
                name={member.name}
                title={member.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Team;