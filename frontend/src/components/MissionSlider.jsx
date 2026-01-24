import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/main.css';

const MissionSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample images - user can replace with actual product images
  const sliderImages = [
    'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80', // Green beans/seed packet
    'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80', // Mustard field
    'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=800&q=80', // Pulses
    'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80', // Vegetables
    'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80'  // Spices
  ];

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const features = [
    {
      icon: '🌻',
      title: 'Proven High-Vigor Seeds for reliable sprouting.',
      bgColor: '#2da6de',
      iconColor: 'var(--dark-green)'
    },
    {
      icon: '🛡️',
      title: 'Built-in immunity for maximum crop protection and reduced pesticide dependency.',
      bgColor: '#a8e14a',
      iconColor: 'var(--yellow)'
    },
    {
      icon: '🌾',
      title: 'Exceptional harvest potential in every seed.',
      bgColor: '#2da6de',
      iconColor: 'var(--dark-green)'
    }
  ];

  return (
    <section className="mission-slider-section">
      <div className="container">
        <h2 className="mission-slider-heading">
          Powering Your Harvest, Driven by Our Mission !
        </h2>

        <div className="mission-decorative-icons">
          <span className="mission-icon">🌿</span>
          <span className="mission-icon">🌿</span>
          <span className="mission-icon">🌿</span>
        </div>
        {/* Top Section: Image Slider + Mission Content */}
        <div className="mission-slider-top">
          {/* Left: Image Slider */}
          <motion.div
            className="mission-slider-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mission-slider-container">
              <div className="mission-slider-yellow-bg">
                {/* Farm illustration overlay - can be added as SVG or image */}
                <div className="farm-illustration"></div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  className="mission-slider-image-wrapper"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={sliderImages[currentImageIndex]}
                    alt={`Product ${currentImageIndex + 1}`}
                    className="mission-slider-image"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Slider dots */}
              <div className="mission-slider-dots">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    className={`mission-slider-dot ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Mission Content */}
          <motion.div
            className="mission-slider-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >


            <p className="mission-slider-text">
              <strong>"Utsav Seeds Pvt Ltd"</strong> is an innovation-led agricultural enterprise where your yield is our mission. We specialize in developing elite cultivars of grains, oilseeds, pulses, spices, and fodder. By combining scientific rigor with field-tested performance, we ensure our hybrid seeds deliver climate resilience, pest resistance, and superior nutritional value to farmers worldwide.<br/><br/>
              Our commitment to affordability ensures that every farmer can achieve higher yields, fostering individual prosperity and contributing to the advancement of India's agrarian economy.
            </p>

          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default MissionSlider;






