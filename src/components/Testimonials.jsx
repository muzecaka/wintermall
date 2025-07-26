import React from 'react';
import Review from './Review';
import '../styles.css'; // Updated to match your file name

function Testimonials() {
  return (
    <section id="testimonials" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          What People Are Saying
        </h2>
        <figure className="text-center">
          <blockquote className="italic text-gray-600">
            “This is the future of fun!”
          </blockquote>
          <figcaption className="mt-2 text-sm text-gray-500">
            Review will show here 
          </figcaption>
        </figure>
        <div className="text-center mt-6">
          <a
            href="#about"
            className="inline-block px-6 py-3 turquoise-primary text-white rounded-lg"
          >
            Learn More About Our Vision
          </a>
        </div>
        <Review />
      </div>
    </section>
  );
}

export default Testimonials;