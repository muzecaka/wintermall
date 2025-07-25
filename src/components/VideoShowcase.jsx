import React from 'react';
import '../styles.css'; // Updated to match your file name

function VideoShowcase() {
  return (
    <section id="video" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">See the Future of Fun</h2>
        <div className="relative max-w-4xl mx-auto">
          <video
            className="w-full rounded-lg shadow-lg"
            controls
            autoPlay
            muted
            loop
          >
            <source src="/assets/video/snowpark-animation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-center mt-4 text-gray-600">
            Explore our state-of-the-art snow park in this 3D animation!
          </p>
        </div>
        <div className="text-center mt-6">
          <a
            href="#about"
            className="inline-block px-6 py-3 turquoise-primary text-white rounded-lg"
          >
            Learn More About Our Vision
          </a>
        </div>
      </div>
    </section>
  );
}

export default VideoShowcase;