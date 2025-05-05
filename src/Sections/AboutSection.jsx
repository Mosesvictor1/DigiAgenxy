import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle } from "lucide-react";

export default function AboutSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    // Handle responsiveness detection
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Column - Stats Card */}
          <div
            className={`w-full lg:w-1/2 mb-10 lg:mb-0 ${
              isMobile ? "" : "pr-4"
            }`}
            data-aos="fade-right"
          >
            <div className="rounded-2xl md:rounded-3xl bg-gradient-to-br from-purple-600 to-pink-500 text-white p-6 sm:p-8 md:p-10 shadow-xl">
              <div className="mb-6 md:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4">
                  Your Vision, Our Expertise
                </h2>
                <p className="text-white text-opacity-90 text-sm md:text-base">
                  Transforming ideas into digital realities since 2018
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {/* Stat 1 */}
                <div className="bg-purple-950 shadow-[inset_0_4px_20px_rgba(139,92,246,0.8)] bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-6">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-0 md:mb-1">
                    5+
                  </h3>
                  <p className="text-white text-opacity-90 text-sm md:text-base">
                    Years Experience
                  </p>
                </div>

                {/* Stat 2 */}
                <div className="bg-purple-950 shadow-[inset_0_4px_20px_rgba(139,92,246,0.8)] bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-6">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-0 md:mb-1">
                    100+
                  </h3>
                  <p className="text-white text-opacity-90 text-sm md:text-base">
                    Projects Completed
                  </p>
                </div>

                {/* Stat 3 */}
                <div className="bg-purple-950 shadow-[inset_0_4px_20px_rgba(139,92,246,0.8)] bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-6">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-0 md:mb-1">
                    50+
                  </h3>
                  <p className="text-white text-opacity-90 text-sm md:text-base">
                    Happy Clients
                  </p>
                </div>

                {/* Stat 4 */}
                <div className="bg-purple-950 shadow-[inset_0_4px_20px_rgba(139,92,246,0.8)] bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-6">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-0 md:mb-1">
                    15+
                  </h3>
                  <p className="text-white text-opacity-90 text-sm md:text-base">
                    Team Members
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - About Content */}
          <div
            className={`w-full lg:w-1/2 ${isMobile ? "" : "pl-4"}`}
            data-aos="fade-left"
          >
            <div className="mb-6 md:mb-8">
              <p className="text-xs sm:text-sm uppercase tracking-wider text-purple-600 font-medium mb-1 md:mb-2">
                ABOUT US
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-black">
                We Create{" "}
                <span className="text-purple-600">Digital Products</span> That
                Help Businesses Grow
              </h2>

              <div className="space-y-4 md:space-y-6">
                <p className="text-gray-600 text-sm md:text-base">
                  We are a team of passionate designers, developers, and digital
                  strategists committed to creating exceptional digital
                  experiences that help our clients achieve their business
                  goals.
                </p>

                <p className="text-gray-600 text-sm md:text-base">
                  With expertise in web development, mobile applications,
                  graphic design, and UI/UX, we deliver comprehensive solutions
                  tailored to each client's unique needs.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-8">
              <div
                className="flex items-center"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-purple-600 mr-2" />
                <span className="text-gray-700 text-sm md:text-base">
                  Strategic approach
                </span>
              </div>

              <div
                className="flex items-center"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-purple-600 mr-2" />
                <span className="text-gray-700 text-sm md:text-base">
                  Modern technologies
                </span>
              </div>

              <div
                className="flex items-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-purple-600 mr-2" />
                <span className="text-gray-700 text-sm md:text-base">
                  User-centered design
                </span>
              </div>

              <div
                className="flex items-center"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-purple-600 mr-2" />
                <span className="text-gray-700 text-sm md:text-base">
                  Continuous support
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
