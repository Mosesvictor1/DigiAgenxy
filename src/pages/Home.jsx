import React from "react";
import HeroSection from "../Sections/HeroSection";
import ServiceSection from "../Sections/ServiceSection";
import AboutSection from "../Sections/AboutSection";
import ProjectSection from "../Sections/ProjectSection";
import TeamSection from "../Sections/TeamSection";
import ContactSection from "../Sections/ContactSection";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <div className="flex-1 bg-blue-900 text-white h-screen">
        <NavBar/>
      <main>
        <HeroSection />
        <ServiceSection />
        <AboutSection />
        <ProjectSection />
        <TeamSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default Home;
