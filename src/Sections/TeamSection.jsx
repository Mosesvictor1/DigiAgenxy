import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample team members data
const teamMembers = [
  {
    id: 1,
    name: "Moses Victor",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description: "Expert in crafting stunning user interfaces with React and Tailwind CSS.",
  },
  {
    id: 2,
    name: "Sophia Grace",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    description: "Creates smooth user journeys through modern, clean interfaces.",
  },
  {
    id: 3,
    name: "Daniel Kings",
    role: "Mobile Developer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    description: "Builds performant cross-platform apps using React Native.",
  },
  {
    id: 4,
    name: "Linda Osei",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    description: "Coordinates the team and ensures timely project delivery.",
  },
];

export default function TeamSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-gray-100 py-16" id="team">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-purple-800">
          Meet Our Team
        </h2>

        <Slider {...settings}>
          {teamMembers.map((member) => (
            <div key={member.id} className="px-3">
              <div className="bg-white rounded-lg border-4 border-purple-800 shadow-lg p-6 h-ful flex flex-col items-center text-center w-[90%] h-[300px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-sm text-purple-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
