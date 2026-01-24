import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/main.css';

const Mission = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const missionIcons = [
    { icon: '🔬', title: 'Research', description: 'Scientific innovation' },
    { icon: '📈', title: 'Growth', description: 'Farmer prosperity' },
    { icon: '👨‍🌾', title: 'Farmer', description: 'Empowerment focus' },
    { icon: '🌱', title: 'Sustainability', description: 'Long-term impact' }
  ];

  return (
    <section id="mission" className="mission-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Mission
        </motion.h2>

        <motion.div
          className="mission-statement"
          data-aos="fade-up"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>
            To develop and deliver high-quality, high-performance seeds at affordable prices, 
            empowering farmers and strengthening Indian agriculture through scientific research 
            and innovation.
          </p>
        </motion.div>

        <div className="mission-icons">
          {missionIcons.map((item, index) => (
            <motion.div
              key={index}
              className="mission-icon-card"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className="mission-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;












