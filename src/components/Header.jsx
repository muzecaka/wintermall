import React from 'react';
import '../styles.css'; // Updated to match your file name

function Header() {
  return (
    <header className="turquoise-primary text-white py-4 sticky top-0 z-10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-white">
          WinterMall
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-green-300 hover:scale-110 transition-transform duration-200 text-lg font-sans tracking-wide drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">Home</a></li>
            <li><a href="#about" className="hover:text-green-300 hover:scale-110 transition-transform duration-200 text-lg font-sans tracking-wide drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">About</a></li>
            <li><a href="#attractions" className="hover:text-green-300 hover:scale-110 transition-transform duration-200 text-lg font-sans tracking-wide drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">Attractions</a></li>
            <li><a href="#investor" className="hover:text-green-300 hover:scale-110 transition-transform duration-200 text-lg font-sans tracking-wide drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">Invest</a></li>
            <li><a href="#contact" className="hover:text-green-300 hover:scale-110 transition-transform duration-200 text-lg font-sans tracking-wide drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">Contact</a></li>
            <li><a href="#gallery" className="hover:text-green-300 hover:scale-110 transition-transform duration-200 text-lg font-sans tracking-wide drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">Gallery</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;