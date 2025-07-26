import React, { useState } from 'react';
import '../styles.css';

function Review() {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !review) {
      setError('Please fill out both name and review.');
      return;
    }
    const newReview = { name, review, id: Date.now() };
    const existingReviews = JSON.parse(localStorage.getItem('reviews') || '[]');
    localStorage.setItem('reviews', JSON.stringify([...existingReviews, newReview]));
    setName('');
    setReview('');
    setError('');
    alert('Review submitted successfully!');
  };

  return (
    <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-lg shadow-md mt-8">
      <h3 className="text-2xl font-semibold text-center mb-4">Leave a Review</h3>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border rounded-lg"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="review" className="block text-gray-700">Review</label>
          <textarea
            id="review"
            className="w-full p-2 border rounded-lg"
            rows="3"
            placeholder="Your Thoughts"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="w-full px-6 py-3 turquoise-primary text-white rounded-lg">
          Submit Review
        </button>
      </form>
    </div>
  );
}

export default Review;