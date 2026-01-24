import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const InfrastructurePreview = () => {
  const facilities = [
    { icon: '🏭', title: 'Processing Plants' },
    { icon: '🏢', title: 'Storage Units' },
    { icon: '📍', title: 'Regional Offices' }
  ];

  return (
    <section className="infrastructure-preview-section">
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
        <div className="infrastructure-preview-grid">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className="infrastructure-preview-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              <div className="facility-icon">{facility.icon}</div>
              <h3>{facility.title}</h3>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="infrastructure-preview-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/infrastructure" className="infrastructure-preview-button">
            View Infrastructure
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default InfrastructurePreview;












