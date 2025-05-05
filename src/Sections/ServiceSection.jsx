import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaGlobe,
  FaMobileAlt,
  FaPaintBrush,
  FaLayerGroup,
} from "react-icons/fa";

export default function ServiceSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section className="py-16 relative sm:py-20 md:py-24 b-purple-950 bg-[#26024df5] border-t-2">
      {/* Decorative Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-0 right-0 w-[300px] sm:w-[450px] md:w-[400px] h-[300px] sm:h-[450px] md:h-[400px] bg-[#16fff3]  rounded-full mix-blend-multiply filter blur-[90px] opacity-100 animate-blob"></div>
        <div className="absolute top-0 left-0 w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] bg-[rgb(219,196,236)] rounded-full mix-blend-multiply filter blur-2xl opacity-100 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-5 sm:left-10 md:left-20 w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] bg-[#ffffffd3] rounded-full mix-blend-multiply filter blur-xl sm:blur-2xl md:blur-9xl opacity-160 animate-blob animation-delay-4000"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <p className="text-xs sm:text-sm uppercase tracking-wider text-white font-medium mb-2">
            WHAT WE DO
          </p>
          <h2 className="text-3xl text-white sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Our <span className="text-white">Services</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-200 text-sm sm:text-base md:text-lg">
            We deliver comprehensive digital solutions with expertise across
            multiple domains, helping businesses achieve their goals through
            technology and design.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Website Development */}
          <ServiceCard
            icon={<FaGlobe className="w-10 h-10 text-purple-600 mb-5" />}
            title="Website Development"
            color="purple"
            delay={100}
            features={[
              "React & Next.js",
              "E-commerce solutions",
              "CMS integration",
              "Performance optimization",
            ]}
            description="Custom websites built with modern technologies like React, focusing on performance, SEO, and responsive design."
          />

          {/* Mobile App Development */}
          <ServiceCard
            icon={<FaMobileAlt className="w-10 h-10 text-cyan-500 mb-5" />}
            title="Mobile App Development"
            color="purple"
            delay={200}
            features={[
              "React Native",
              "Native iOS/Android",
              "App Store optimization",
              "Offline capabilities",
            ]}
            description="Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences."
          />

          {/* Graphics Design */}
          <ServiceCard
            icon={<FaPaintBrush className="w-10 h-10 text-pink-500 mb-5" />}
            title="Graphics Design"
            color="purple"
            delay={300}
            features={[
              "Brand identity",
              "Marketing materials",
              "Social media graphics",
              "Print design",
            ]}
            description="Eye-catching visual designs that strengthen your brand identity and communicate your message effectively."
          />

          {/* UI/UX Product Design */}
          <ServiceCard
            icon={<FaLayerGroup className="w-10 h-10 text-cyan-500 mb-5" />}
            title="UI/UX Product Design"
            color="purple"
            delay={400}
            features={[
              "User research",
              "Wireframing",
              "Prototyping",
              "Usability testing",
            ]}
            description="User-centered design processes that create intuitive, engaging, and accessible digital products."
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description, features, delay }) {
  return (
    <div
      className=" rounded-2xl shadow-m hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8 flex flex-col h-full  bg-purple-950 shadow-purple-400 shadow-[inset_0_4px_20px_rgba(139,92,246,0.8)]"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {icon}
      <h3 className="text-lg sm:text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-100 text-sm sm:text-base mb-5 flex-1">
        {description}
      </p>
      <ul className="space-y-3 mt-auto">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center text-sm sm:text-base text-gray-200"
          >
            <span className="w-2 h-2 rounded-full bg-orange-600 mr-3 shrink-0"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
