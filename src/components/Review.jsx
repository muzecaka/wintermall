import React from 'react';
import '../styles.css'; // Updated to match your file name

function Review() {
  return (
    <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-lg shadow-md mt-8">
      <h3 className="text-2xl font-semibold text-center mb-4">Leave a Review</h3>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input type="text" id="name" className="w-full p-2 border rounded-lg" placeholder="Your Name" />
        </div>
        <div>
          <label htmlFor="review" className="block text-gray-700">Review</label>
          <textarea id="review" className="w-full p-2 border rounded-lg" rows="3" placeholder="Your Thoughts"></textarea>
        </div>
        <button type="submit" className="w-full px-6 py-3 turquoise-primary text-white rounded-lg">
          Submit Review
        </button>
      </form>
    </div>
  );
}

export default Review;