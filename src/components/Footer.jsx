import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <ul className="flex space-x-4 mb-4 md:mb-0">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#attractions" className="hover:underline">Attractions</a></li>
            <li><a href="#investor" className="hover:underline">Investor Pitch</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-200">Facebook</a>
            <a href="#" className="hover:text-gray-200">Twitter</a>
            <a href="#" className="hover:text-gray-200">Instagram</a>
          </div>
        </div>
        <p className="text-center mt-4">Contact: wintermallng@gmail.com | (+234)7019999900 </p>
      </div>
    </footer>
  );
}

export default Footer;