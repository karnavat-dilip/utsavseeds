import React from 'react';
import { motion } from 'framer-motion';
import '../styles/main.css';

const WhoWeAre = () => {
  const cards = [
    {
      title: '20+ Years Experience',
      description: 'Two decades of excellence in seed research and production',
      icon: '⭐'
    },
    {
      title: 'Research-Based Company',
      description: 'Science-driven approach to seed development',
      icon: '🔬'
    },
    {
      title: 'ISO 9001:2015 Certified',
      description: 'Internationally recognized quality standards',
      icon: '✅'
    }
  ];

  return (
    <section className="who-we-are-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Who We Are
        </motion.h2>
        <div className="who-we-are-cards">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="who-we-are-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;












