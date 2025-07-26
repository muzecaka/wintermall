import React, { useState, useEffect } from 'react';
import Review from './Review';
import '../styles.css';

function Testimonials() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem('reviews') || '[]');
    setReviews(storedReviews);
  }, []);

  return (
    <section id="testimonials" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What People Are Saying</h2>
        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <figure key={review.id} className="text-center">
                <blockquote className="italic text-gray-600">“{review.review}”</blockquote>
                <figcaption className="mt-2 text-sm text-gray-500">— {review.name}</figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <figure className="text-center">
            <blockquote className="italic text-gray-600">“This is the future of fun!”</blockquote>
            <figcaption className="mt-2 text-sm text-gray-500">Review will show here</figcaption>
          </figure>
        )}
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