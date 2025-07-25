import React from 'react';
import '../styles.css'; // Updated to match your file name

function Features() {
  return (
    <section id="features" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Why WinterMall?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="h-16 w-16 mx-auto mb-4 turquoise-primary rounded-full"></div>
            <h3 className="text-xl font-semibold">Realistic Snow</h3>
            <p className="text-gray-600">Authentic winter fun.</p>
          </div>
          <div className="text-center">
            <div className="h-16 w-16 mx-auto mb-4 turquoise-primary rounded-full"></div>
            <h3 className="text-xl font-semibold">Family-Friendly</h3>
            <p className="text-gray-600">Fun for all ages.</p>
          </div>
          <div className="text-center">
            <div className="h-16 w-16 mx-auto mb-4 turquoise-primary rounded-full"></div>
            <h3 className="text-xl font-semibold">Year-Round</h3>
            <p className="text-gray-600">Winter anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;