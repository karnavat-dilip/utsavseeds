import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import utsavbanner from '../assets/utsav_banner.jpg'
import '../styles/main.css';

// Banner images - Add your images to assets folder and import here
// import bannerImage1 from '../assets/banner1.jpg';
// import bannerImage2 from '../assets/banner2.jpg';

// Placeholder images - Replace with your actual image imports when you add them
// For now using agriculture-themed images
const bannerImages = [
  'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80',
  utsavbanner
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);

  // Preload next image to prevent white flash
  useEffect(() => {
    const nextIndex = (currentSlide + 1) % bannerImages.length;
    setNextSlide(nextIndex);

    // Preload next image
    const img = new Image();
    img.src = bannerImages[nextIndex];
  }, [currentSlide, bannerImages]);

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  // Handle manual slide navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero-banner-section">
      <div className="hero-banner-slider">
        {/* Preload next slide in background to prevent white flash */}
        <div
          className="hero-banner-slide hero-banner-slide-preload"
          style={{ backgroundImage: `url(${bannerImages[nextSlide]})` }}
          aria-hidden="true"
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="hero-banner-slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            <div
              className="hero-banner-image"
              style={{ backgroundImage: `url(${bannerImages[currentSlide]})` }}
            >
              <div className="hero-banner-overlay"></div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Content Overlay */}
        <div className="hero-banner-content">
          <div className="container">
            <motion.div
              className="hero-banner-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.span
                className="hero-banner-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Utsav Beej Uttam Beej
              </motion.span>

              <motion.h1
                className="hero-banner-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                No.1 Agree Seeds Producer,<br />
                Supplier & Exporter in India
              </motion.h1>

              <motion.p
                className="hero-banner-description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Excellence in Seeds Business since 2011.
              </motion.p>

              <motion.div
                className="hero-banner-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <Link to="/about" className="hero-banner-btn hero-banner-btn-primary">
                  Explore Company
                </Link>
                <Link to="/contact" className="hero-banner-btn hero-banner-btn-secondary">
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Slider Dots */}
        <div className="hero-banner-dots">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              className={`hero-banner-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

