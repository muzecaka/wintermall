import React from 'react';
import '../styles.css'; // Updated to match your file name

function Hero() {
  return (
    <section id="home" className="bg-gray-100 py-20 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">Experience Winter Fun!</h1>
        <p className="text-xl text-gray-600 mb-6">A snow park for all ages.</p>
        <a href="#about" className="px-8 py-3 turquoise-primary text-white rounded-lg">
          Discover
        </a>
        <div className="mt-8">
          <a href="/assets/hero.jpg" target="_blank" rel="noopener noreferrer">
            <img src="/assets/hero.jpg" 
            alt="Snow Park" 
            className="w-full h-auto maxh-90 object-cover rounded-lg" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;