import React from 'react';
import { motion } from 'framer-motion';
import msme2023 from '../assets/MSME - 2023.JPG';
import msme2024 from '../assets/MSME- 2024.jpg';
import '../styles/main.css';

const OurAchievement = () => {
  const achievements = [
    {
      id: 1,
      image: msme2023,
      year: 'MSME - 2023',
    },
    {
      id: 2,
      image: msme2024,
      year: 'MSME - 2024',
    },
  ];

  return (
    <section className="our-achievement-section">
      <div className="container">
        <motion.h2
          className="section-title achievement-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Achievement
        </motion.h2>

        <div className="achievement-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className="achievement-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="achievement-image-wrapper">
                <img
                  src={achievement.image}
                  alt={achievement.year}
                  className="achievement-image"
                />
                <div className="achievement-overlay">
                  <div className="achievement-year">
                    {achievement.year}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAchievement;

