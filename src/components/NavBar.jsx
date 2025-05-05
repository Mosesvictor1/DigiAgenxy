import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup when component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <div className="bg-purple-950 shadow-[inset_0_4px_20px_rgba(139,92,246,0.8)] font-sans">
      <header className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white">DigiAgency</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-bold">
          {["Home", "Services", "About", "Portfolio", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white hover:underline underline-offset-8 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* CTA for large screens */}
        <button className="hidden md:block bg-purple-900 shadow-[inset_0_4px_20px_rgba(139,92,246,0.8)] font-bold hover:bg-purple-700 text-white px-6 py-2 rounded-md transition-colors">
          Get Started
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-6 pb-4 h-screen border-t-2">
          <nav className="flex flex-col space-y-6 font-bold pt-2 ">
            {["Home", "Services", "About", "Portfolio", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white hover:underline underline-offset-8 transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="bg-purple-900 shadow-[inset_0_4px_20px_rgba(139,92,246,0.8)] font-bold hover:bg-purple-700 text-white px-6 py-2 rounded-md transition-colors w-fit">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}

export default NavBar;
