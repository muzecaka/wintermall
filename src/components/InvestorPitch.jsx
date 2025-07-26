import React from 'react';
import '../styles.css'; // Updated to match your file name

function InvestorPitch() {
  return (
    <section id="investor" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Invest in the Future of Fun</h2>
        <p className="text-gray-600 mb-6 text-center">
          The growing demand for unique family entertainment makes WinterMall a prime investment opportunity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <a href="/assets/pitch-market.jpg" target="_blank" rel="noopener noreferrer">
              <img src="/assets/pitch-market.jpg" alt="Market Opportunity" className="w-full h-48 object-cover rounded-lg mb-4" />
            </a>
            <h3 className="text-xl font-semibold">Market Opportunity</h3>
            <p className="text-gray-600">Amusement park industry growing at 5% annually.</p>
          </div>
          <div className="text-center">
            <a href="/assets/pitch-scalable.jpg" target="_blank" rel="noopener noreferrer">
              <img src="/assets/pitch-scalable.jpg" alt="Scalable Model" className="w-full h-48 object-cover rounded-lg mb-4" />
            </a>
            <h3 className="text-xl font-semibold">Scalable Model</h3>
            <p className="text-gray-600">Potential for multiple locations worldwide.</p>
          </div>
          <div className="text-center">
            <a href="/assets/pitch-roi.jpg" target="_blank" rel="noopener noreferrer">
              <img src="/assets/pitch-roi.jpg" alt="Projected ROI" className="w-full h-48 object-cover rounded-lg mb-4" />
            </a>
            <h3 className="text-xl font-semibold">Projected ROI</h3>
            <p className="text-gray-600">Strong returns within 3-5 years.</p>
          </div>
        </div>
        <div className="text-center mt-6">
          <a
            href="/assets/pitch-deck.pdf"
            className="inline-block px-6 py-3 turquoise-primary text-white rounded-lg"
          >
            Download Full Pitch Deck
          </a>
        </div>
        <div className="text-center mt-6">
          <a
            href="#contact"
            className="inline-block px-6 py-3 turquoise-primary text-white rounded-lg"
          >
            Contact Us for Investment Opportunities
          </a>
        </div>
      </div>
    </section>
  );
}

export default InvestorPitch;