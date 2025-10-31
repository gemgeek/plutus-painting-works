import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

type TeamMember = {
  name: string;
  title: string;
  image: string;
  bio: string; 
};

const teamData: TeamMember[] = [
  {
    name: 'Emmanuel O. Mensah',
    title: 'Chief Executive Officer',
    image: '/assets/team-member-1.png',
    bio: 'Emmanuel is a visionary leader with over 10 years of experience in the painting and design industry, driving Plutus Painting Works with a passion for quality and innovation.',
  },
  {
    name: 'Matilda Esenam Gbeve',
    title: 'Brand & Strategy Director',
    image: '/assets/team-member-2.png',
    bio: 'Matilda shapes the identity of the brand, ensuring every project reflects our core values. Her creative direction is the guiding force behind our unique aesthetic.',
  },
  {
    name: 'Kingsley Donkor',
    title: 'Business Development Director',
    image: '/assets/team-member-3.png',
    bio: 'Kingsley builds lasting relationships with our clients, architects, and partners. He is dedicated to expanding our services and ensuring client satisfaction.',
  },
  {
    name: 'Nancy Frimpomaa',
    title: 'Interior Design Lead',
    image: '/assets/team-member-4.png',
    bio: 'Nancy leads our design team, blending artistry with functionality. Her expertise in color psychology and space planning transforms any environment.',
  },
];

const TeamModal = ({
  member,
  onClose,
}: {
  member: TeamMember;
  onClose: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="relative w-full max-w-lg rounded-lg bg-white p-8 shadow-xl"
      onClick={(e) => e.stopPropagation()} 
    >
      <button
        onClick={onClose}
        className="absolute -right-2 -top-2 z-10 rounded-full bg-white p-1 text-gray-700 shadow-md"
        aria-label="Close"
      >
        <FaTimes size={20} />
      </button>
      <div className="flex flex-col items-center text-center">
        <img
          src={member.image}
          alt={member.name}
          className="mb-4 h-32 w-32 rounded-full border-4 border-orange-500 object-cover"
        />
        <h2 className="mb-1 text-2xl font-bold text-indigo-900">
          {member.name}
        </h2>
        <h3 className="mb-4 text-lg font-medium text-orange-600">
          {member.title}
        </h3>
        <p className="text-base text-gray-700">{member.bio}</p>
      </div>
    </motion.div>
  </motion.div>
);

const TeamMemberCard = ({
  image,
  name,
  title,
  onClick,
}: {
  image: string;
  name: string;
  title: string;
  onClick: () => void;
}) => (
  <div
    onClick={onClick}
    className="team-card flex cursor-pointer flex-col items-center rounded-lg bg-white p-8 shadow-lg transition-all duration-300"
  >
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
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(
    null,
  );

  return (
    <>
      <section id="team" className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold uppercase text-indigo-900 md:text-4xl">
            Our Team
          </h2>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            loop={true}
            autoplay={{
              delay: 2000,
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
                  onClick={() => setSelectedMember(member)} 
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <AnimatePresence>
        {selectedMember && (
          <TeamModal
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Team;