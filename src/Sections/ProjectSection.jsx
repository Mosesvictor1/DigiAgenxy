import { useState, useEffect } from 'react';
import { FaCode, FaMobileAlt, FaPalette, FaDesktop, FaUtensils, FaHome, FaShoppingCart, FaChartLine } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Project data
const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Websites",
    image: "https://picsum.photos/id/1011/600/400",
    icon: <FaShoppingCart className="text-purple-500" />,
    description: "A fully responsive e-commerce solution with integrated payment systems.",
    bgColor: "bg-indigo-100",
  },
  {
    id: 2,
    title: "Fitness Tracking App",
    category: "Mobile",
    image: "https://picsum.photos/id/1025/600/400",
    icon: <FaMobileAlt className="text-blue-500" />,
    description: "Mobile application for tracking workouts and health metrics.",
    bgColor: "bg-blue-100",
  },
  {
    id: 3,
    title: "Banking Dashboard",
    category: "UI/UX",
    image: "https://picsum.photos/id/1040/600/400",
    icon: <FaChartLine className="text-green-500" />,
    description: "User-friendly interface for banking operations and analytics.",
    bgColor: "bg-green-100",
  },
  {
    id: 4,
    title: "Brand Identity",
    category: "Graphics",
    image: "https://picsum.photos/id/1060/600/400",
    icon: <FaPalette className="text-yellow-500" />,
    description: "Complete brand identity design including logo and visual guidelines.",
    bgColor: "bg-yellow-100",
  },
  {
    id: 5,
    title: "Real Estate Platform",
    category: "Websites",
    image: "https://picsum.photos/id/1074/600/400",
    icon: <FaHome className="text-red-500" />,
    description: "Property listing and management system for real estate agents.",
    bgColor: "bg-red-100",
  },
  {
    id: 6,
    title: "Restaurant Ordering App",
    category: "Mobile",
    image: "https://picsum.photos/id/1080/600/400",
    icon: <FaUtensils className="text-orange-500" />,
    description: "Mobile application for food ordering and delivery tracking.",
    bgColor: "bg-orange-100",
  }
];


const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [isAnimating, setIsAnimating] = useState(false);

  // Categories for filter tabs
  const categories = ["All", "Websites", "Mobile Apps", "UI/UX", "Graphics"];

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  // Filter projects based on selected category
  useEffect(() => {
    setIsAnimating(true);
    
    setTimeout(() => {
      if (activeFilter === "All") {
        setFilteredProjects(projectsData);
      } else if (activeFilter === "Mobile Apps") {
        setFilteredProjects(projectsData.filter(project => project.category === "Mobile"));
      } else {
        setFilteredProjects(projectsData.filter(project => project.category === activeFilter));
      }
      setIsAnimating(false);
    }, 500);
  }, [activeFilter]);

  // Handle filter button click
  const handleFilterClick = (category) => {
    setActiveFilter(category);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-2">OUR WORK</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Featured <span className="text-purple-600">Projects</span></h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise 
            and commitment to delivering outstanding digital solutions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2" data-aos="fade-up" data-aos-delay="100">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleFilterClick(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`bg-white rounded-xl overflow-hidden border-4 border-purple-500 shadow-md hover:shadow-xl transition-all duration-300 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
              data-aos="zoom-in"
              data-aos-delay={`${(project.id % 3) * 100}`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <span className="inline-block px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full mb-2">
                      {project.category}
                    </span>
                    <h4 className="text-white font-bold">View Project</h4>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  {project.icon}
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{project.category}</p>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;