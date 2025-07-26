import React, { useState } from 'react';
import '../styles.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError('Please fill out all fields.');
      return;
    }
    const newSubmission = { name, email, message, id: Date.now() };
    const existingSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    localStorage.setItem('contactSubmissions', JSON.stringify([...existingSubmissions, newSubmission]));
    setName('');
    setEmail('');
    setMessage('');
    setError('');
    setSuccess('Your inquiry has been submitted!');
    setTimeout(() => setSuccess(''), 3000);
  };

  return (
    <section id="contact" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <div className="max-w-lg mx-auto">
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {success && <p className="text-green-500 text-center mb-4">{success}</p>}
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
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded-lg"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea
                id="message"
                className="w-full p-2 border rounded-lg"
                rows="4"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 turquoise-primary text-white rounded-lg"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
        <p className="text-center text-gray-600 mt-6">
          Interested in group bookings or investor tours? Contact us at wintermallng@gmail.com or call (+234) 701 999 9900.
        </p>
        <div className="mt-8">
          <a href="/assets/contact.jpg" target="_blank" rel="noopener noreferrer">
            <img
              src="/assets/contact.jpg"
              alt="Contact"
              className="w-full h-auto max-h-64 object-contain rounded-lg"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;