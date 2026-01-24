import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import RD from '../components/RD';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <About />
      <RD />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;












