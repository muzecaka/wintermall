import React, { useState } from 'react';
import '../styles.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="turquoise-primary text-white py-4 sticky top-0 z-10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-white">WinterMall</h1>
        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <div className="space-y-2">
            <span className="block w-8 h-1 bg-white"></span>
            <span className="block w-8 h-1 bg-white"></span>
            <span className="block w-8 h-1 bg-white"></span>
          </div>
        </button>
        {/* Navigation Menu */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul
            className={`${
              isMenuOpen
                ? 'flex flex-col space-y-4 absolute top-16 left-0 right-0 bg-blue-600 p-4'
                : 'flex space-x-6'
            } md:flex md:flex-row md:space-y-0 md:space-x-6`}
          >
            <li>
              <a
                href="#home"
                className="hover:text-green-300 hover:scale-110 transition-transform duration-200 text-lg font-sans tracking-wide drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-green-300 hover:scale-110 transition-transform duration-200 text-lg font-sans tracking-wide drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#attractions"
                className="hover:text-green-300 hover:scale-110 transition-transform duration-200 text-lg font-sans tracking-wide drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Attractions
              </a>
            </li>
            <li>
              <a
                href="#invest"
                className="hover:text-green-300 hover:scale-110 transition-transform duration-200 text-lg font-sans tracking-wide drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Invest
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-green-300 hover:scale-110 transition-transform duration-200 text-lg font-sans tracking-wide drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="hover:text-green-300 hover:scale-110 transition-transform duration-200 text-lg font-sans tracking-wide drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;