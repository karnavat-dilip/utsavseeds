import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Let's Grow the Future Together</h2>
          <p>Join us in strengthening Indian agriculture through quality seeds and innovation</p>
          <Link to="/contact" className="cta-button">
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;












