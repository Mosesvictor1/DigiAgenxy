import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <section
      className="relative min-h-screen bg-[#26024df5] py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden"
      id="hero"
    >
      {/* Decorative Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] bg-[#f4cde0] rounded-full mix-blend-multiply filter blur-2xl opacity-100 animate-blob"></div>
        <div className="absolute top-0 left-0 w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] bg-[#8bbcf4] rounded-full mix-blend-multiply filter blur-2xl opacity-100 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-5 sm:left-10 md:left-20 w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] bg-[#ffffffd3] rounded-full mix-blend-multiply filter blur-xl sm:blur-2xl md:blur-9xl opacity-160 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(138, 92, 246, 0.1) 1px, transparent 3px), linear-gradient(90deg, rgba(138, 92, 246, 0.1) 1px, transparent 3px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 px-2 sm:px-4 pt-14">
        {/* Text Block */}
        <div className="w-full lg:w-1/2 text-center lg:text-left" data-aos="fade-right">
          <h1 className="text-[28px] sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            <span className="text-white">Transforming </span>
            <span className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
              Ideas
            </span>
            <br />
            <span className="text-white">Into Digital </span>
            <span className="bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent">
              Reality
            </span>
          </h1>

          <p className="text-purple-200 text-base sm:text-lg lg:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
            We create premium websites, mobile apps, visuals, and design systems
            that scale your business to the next level.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl font-medium shadow-md transition-all duration-300">
              Our Services
            </button>
            <button className="border border-white/40 hover:border-pink-500 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300">
              Get a Quote
            </button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="w-full lg:w-1/2" data-aos="fade-left">
          <div className="bg-white/5 backdrop-blur-lg p-6 sm:p-8 rounded-3xl shadow-2xl ring-1 ring-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { title: "Web Dev", desc: "Modern & responsive websites", delay: 200 },
                { title: "Mobile Apps", desc: "iOS & Android solutions", delay: 300 },
                { title: "Graphics", desc: "Eye-catching visuals", delay: 400 },
                { title: "UI/UX", desc: "User-centered design", delay: 500 },
              ].map(({ title, desc, delay }, i) => (
                <div
                  key={i}
                  className="p-5 sm:p-6 rounded-xl backdrop-blur-md ring-1 ring-white/10 hover:ring-pink-400 transition-all hover:shadow-lg duration-300 bg-purple-950 shadow-purple-400 shadow-[inset_0_4px_20px_rgba(139,92,246,0.8)]"
                  data-aos="fade-up"
                  data-aos-delay={delay}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{title}</h3>
                  <p className="text-purple-200 text-sm sm:text-base">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
