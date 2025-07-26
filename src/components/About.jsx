import React from 'react';
import '../styles.css'; // Updated to match your file name

function About() {
  return (
    <section id="about" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Our Artificial Snow Fun Park</h2>
        <p className="text-gray-600 mb-6">
          WinterMall brings year-round winter fun with state-of-the-art artificial snow technology and a shopping mall to the heart of your city. Our mission is to create unforgettable experiences for families and thrill-seekers alike.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">Our Technology</h3>
            <p className="text-gray-600">Eco-friendly artificial snow systems ensure a sustainable, realistic winter experience.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">Our Vision</h3>
            <p className="text-gray-600">Year-round fun, community engagement, and innovative entertainment for all.</p>
          </div>
        </div>
        <div className="mt-8">
          <a href="/assets/main.jpg" target="_blank" rel="noopener noreferrer">
            <img
              src="/assets/main.jpg"
              alt="Snow Technology"
              className="w-full h-auto maxh-80 object-cover rounded-lg shadow-lg"
            />
          </a>
        </div>
        <div className="text-center mt-6">
          <a
            href="#attractions"
            className="inline-block px-6 py-3 turquoise-primary text-white rounded-lg"
          >
            Explore Attractions
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;