import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/main.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 }
    })
  };

  const aboutPoints = [
    {
      title: 'Established',
      content: 'Founded in 2003 at Palanpur, Gujarat',
      icon: '🏛️'
    },
    {
      title: 'Incorporated',
      content: 'Pvt. Ltd. since 2012',
      icon: '📋'
    },
    {
      title: 'Experience',
      content: '20+ years of excellence in seed industry',
      icon: '⭐'
    },
    {
      title: 'Operations',
      content: 'Research, Production, Processing & Marketing',
      icon: '🔬'
    },
    {
      title: 'Certification',
      content: 'ISO 9001:2015 certified',
      icon: '✅'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-intro"
            data-aos="fade-up"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="about-description">
              UTSAV SEEDS Pvt. Ltd. is a research-based agricultural seed company dedicated to 
              developing high-quality, high-performance seeds for Indian farmers. With over two 
              decades of experience, we have established ourselves as a trusted partner in 
              agricultural growth, focusing on cereals, pulses, oil seeds, and vegetable crops.
            </p>
          </motion.div>

          <div className="about-cards">
            {aboutPoints.map((point, index) => (
              <motion.div
                key={index}
                className="about-card"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="about-card-icon">{point.icon}</div>
                <h3>{point.title}</h3>
                <p>{point.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;












