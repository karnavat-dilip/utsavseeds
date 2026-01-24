import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimatedCounter from './AnimatedCounter';
import '../styles/main.css';
import { motion, AnimatePresence } from 'framer-motion';
import RDimg1 from '../assets/R&Dimg1.jpg'
import RDimg2 from '../assets/R&Dimg2.jpg'
import RDimg3 from '../assets/R&Dimg3.jpg'
import RDimg4 from '../assets/R&Dimg4.jpg'
import RDimg5 from '../assets/R&Dimg5.jpg'
import RDimg6 from '../assets/R&Dimg6.jpg'



const RD = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample images - user can replace with actual product images
  const sliderImages = [
    RDimg1,
    RDimg2,
    RDimg3,
    RDimg4,
    RDimg5,
    RDimg6
  ];

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [sliderImages.length]);
  const rdTimeline = [
    {
      year: 'Research Farms',
      title: 'Advanced Research Facilities',
      description: 'Dedicated research farms for developing and testing new seed varieties',
      icon: '🌾'
    },
    {
      year: 'Hybrid & OP Varieties',
      title: 'Diverse Seed Portfolio',
      description: 'Development of both hybrid and open-pollinated varieties for different farming needs',
      icon: '🌱'
    },
    {
      year: 'Stress Resistance',
      title: 'Climate-Resilient Seeds',
      description: 'Focus on developing seeds resistant to drought, pests, and diseases',
      icon: '🛡️'
    },
    {
      year: 'ICRISAT',
      title: 'Strategic Collaboration',
      description: 'Partnership with ICRISAT for advanced agricultural research and development',
      icon: '🤝'
    }
  ];

  return (
    <section id="rd" className="rd-section">
      <div className="container">

        <motion.p
          className="rd-intro"
          data-aos="fade-up"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Utsav Seeds Pvt Ltd is a dynamic, research-driven leader in the global seed industry. By developing high-performance seeds and innovative planting materials, we empower farmers and drive the sustainable evolution of Indian agriculture.
        </motion.p>
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
              We leverage advanced scientific techniques and diverse germplasm to develop high-yielding varieties and hybrids. Our seeds are engineered for resilience across diverse agro-climates, ensuring increased productivity for farmers in both irrigated and rainfed regions.<br /><br />
              Developing crop varieties and hybrids with enhanced resistance to key biotic and abiotic stressors.<br/><br />
              Developing high-quality varieties and hybrids tailored to the specific needs of both farmers and industrial stakeholders.<br/><br />
              Advancing crop improvement through the strategic development of elite pre-breeding germplasm.
            </p>

          </motion.div>
        </div>
        <br />
        <div className="rd-timeline">
          {rdTimeline.map((item, index) => (
            <motion.div
              key={index}
              className="rd-timeline-item"
              data-aos="fade-right"
              data-aos-delay={index * 150}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="rd-timeline-content">
                <div className="rd-timeline-icon">{item.icon}</div>
                <div className="rd-timeline-year">{item.year}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              {index < rdTimeline.length - 1 && (
                <div className="rd-timeline-connector"></div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RD;

