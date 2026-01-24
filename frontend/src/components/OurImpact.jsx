import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedCounter from './AnimatedCounter';
import '../styles/main.css';

const OurImpact = () => {
  const impacts = [
    { number: 30, suffix: '+', label: 'Years of Excellence' },
    { number: 5, suffix: '+', label: 'States Served' },
    { number: 65, suffix: '+', label: 'Team Members' },
    { number: 70, suffix: '+', label: 'Seed Categories' }
  ];

  return (
    <section className="our-impact-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Impact
        </motion.h2>
        <div className="impact-grid">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              className="impact-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="impact-number">
                <AnimatedCounter end={impact.number} suffix={impact.suffix} />
              </div>
              <div className="impact-label">{impact.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurImpact;












