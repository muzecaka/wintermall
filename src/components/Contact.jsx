import React from 'react';
import '../styles.css'; // Updated to match your file name

function Contact() {
  return (
    <section id="contact" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <div className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded-lg"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded-lg"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea
              id="message"
              className="w-full p-2 border rounded-lg"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            className="w-full px-6 py-3 turquoise-primary text-white rounded-lg"
          >
            Submit Inquiry
          </button>
        </div>
        <p className="text-center text-gray-600 mt-6">
          Interested in group bookings or investor tours? Contact us at wintermallng@gmail.com or call (+234) 701 999 9900 .
        </p>
        <div className="mt-8">
          <a href="/assets/contact.jpg" target="_blank" rel="noopener noreferrer">
            <img src="/wintermall/public/assets/contact.jpg" alt="Contact" className="w-full h-64 object-cover rounded-lg" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;