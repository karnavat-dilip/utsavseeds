import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/main.css';

const Infrastructure = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const infrastructureItems = [
    {
      title: 'Seed Processing Plants',
      description: 'State-of-the-art facilities for seed processing and quality control',
      icon: '🏭'
    },
    {
      title: 'Modern Storage Units',
      description: 'Advanced storage systems ensuring seed quality and viability',
      icon: '🏢'
    },
    {
      title: 'Regional Offices',
      description: 'Strategic presence across multiple states for better service',
      icon: '📍'
    }
  ];

  const locations = [
    'Gujarat',
    'Rajasthan',
    'MP',
    'Telangana',
    'Andhra Pradesh',
    'Haryana'
  ];

  return (
    <section id="infrastructure" className="infrastructure-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Infrastructure
        </motion.h2>

        <div className="infrastructure-cards">
          {infrastructureItems.map((item, index) => (
            <motion.div
              key={index}
              className="infrastructure-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }}
            >
              <div className="infrastructure-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="locations-section"
          data-aos="fade-up"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="locations-title">Our Presence</h3>
          <div className="locations-grid">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                className="location-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {location}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Infrastructure;












