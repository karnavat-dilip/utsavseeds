import React from 'react';
import { motion } from 'framer-motion';
import '../styles/main.css';

const WhatWeDo = () => {
  const activities = [
    { icon: '🔬', title: 'Research', description: 'Scientific seed development' },
    { icon: '🏭', title: 'Production', description: 'Quality seed manufacturing' },
    { icon: '⚙️', title: 'Processing', description: 'Advanced seed processing' },
    { icon: '📦', title: 'Marketing', description: 'Nationwide distribution' }
  ];

  return (
    <section className="what-we-do-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What We Do
        </motion.h2>
        <div className="what-we-do-grid">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className="what-we-do-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className="activity-icon">{activity.icon}</div>
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;












