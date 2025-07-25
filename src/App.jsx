import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoShowcase from './components/VideoShowcase';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Attractions from './components/Attractions';
import InvestorPitch from './components/InvestorPitch';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Hero />
        <VideoShowcase />
        <Features />
        <About />
        <Attractions />
        <InvestorPitch />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;