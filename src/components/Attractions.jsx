import React from 'react';
import '../styles.css'; // Updated to match your file name

function Attractions() {
  return (
    <section id="attractions" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Thrills for Everyone</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <a href="/assets/slide.jpg" target="_blank" rel="noopener noreferrer">
              <img
                src="/wintermall/public/assets/slide.jpg"
                alt="Snow Slides"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </a>
            <h3 className="text-xl font-semibold">Snow Slides</h3>
            <p className="text-gray-600">High-speed slides for thrill-seekers.</p>
          </div>
          <div className="text-center">
            <a href="/assets/tubing.jpg" target="_blank" rel="noopener noreferrer">
              <img
                src="/wintermall/public/assets/tubing.jpg"
                alt="Tubing Tracks"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </a>
            <h3 className="text-xl font-semibold">Tubing Tracks</h3>
            <p className="text-gray-600">Fun, safe tubing for all ages.</p>
          </div>
          <div className="text-center">
            <a href="/assets/sensory.jpg" target="_blank" rel="noopener noreferrer">
              <img
                src="/wintermall/public/assets/sensory.jpg"
                alt="Sensory Snow Play"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </a>
            <h3 className="text-xl font-semibold">Sensory Snow Play</h3>
            <p className="text-gray-600">Interactive snow zones for kids.</p>
          </div>
          <div className="text-center">
            <a href="/assets/climbing.jpg" target="_blank" rel="noopener noreferrer">
              <img
                src="/wintermall/public/assets/climbing.jpg"
                alt="Ice Climbing Wall"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </a>
            <h3 className="text-xl font-semibold">Ice Climbing Wall</h3>
            <p className="text-gray-600">Challenge yourself with our climbing wall.</p>
          </div>
          <div className="text-center">
            <a href="/assets/dance.jpg" target="_blank" rel="noopener noreferrer">
              <img
                src="/wintermall/public/assets/dance.jpg"
                alt="Snow Dance Floor"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </a>
            <h3 className="text-xl font-semibold">Snow Dance Floor</h3>
            <p className="text-gray-600">Dance in a winter wonderland.</p>
          </div>
          <div className="text-center">
            <a href="/assets/madlabs.jpg" target="_blank" rel="noopener noreferrer">
              <img
                src="/wintermall/public/assets/madlabs.jpg"
                alt="Interactive Madlabs"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </a>
            <h3 className="text-xl font-semibold">Interactive Madlabs</h3>
            <p className="text-gray-600">Science meets fun in our snow labs.</p>
          </div>
        </div>
        <p className="text-center text-gray-600 mt-6">Safe and accessible for all ages.</p>
        <div className="text-center mt-6">
          <a
            href="#contact"
            className="inline-block px-6 py-3 turquoise-primary text-white rounded-lg"
          >
            Plan Your Visit
          </a>
        </div>
      </div>
    </section>
  );
}

export default Attractions;