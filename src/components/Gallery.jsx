import React from 'react';
import '../styles.css'; // Updated to match your file name

function Gallery() {
  return (
    <section id="gallery" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="/assets/design.jpg" target="_blank" rel="noopener noreferrer">
            <img src="/assets/design.jpg" alt="Snow Park" className="w-full h-48 object-cover rounded-lg" />
          </a>
          <a href="/assets/bumper.jpg" target="_blank" rel="noopener noreferrer">
            <img src="/assets/bumper.jpg" alt="Technology" className="w-full h-48 object-cover rounded-lg" />
          </a>
          <a href="/assets/mech.jpg" target="_blank" rel="noopener noreferrer">
            <img src="/assets/mech.jpg" alt="Slides" className="w-full h-48 object-cover rounded-lg" />
          </a>
          <a href="/assets/play.jpg" target="_blank" rel="noopener noreferrer">
            <img src="/assets/play.jpg" alt="Tubing" className="w-full h-48 object-cover rounded-lg" />
          </a>
          <a href="/assets/cinema.jpg" target="_blank" rel="noopener noreferrer">
            <img src="/assets/cinema.jpg" alt="Sensory" className="w-full h-48 object-cover rounded-lg" />
          </a>
          <a href="/assets/restaurant.jpg" target="_blank" rel="noopener noreferrer">
            <img src="/assets/restaurant.jpg" alt="Climbing" className="w-full h-48 object-cover rounded-lg" />
          </a>
        </div>
        <p className="text-center mt-6 text-gray-600">Explore more of our snow park!</p>
      </div>
    </section>
  );
}

export default Gallery;