import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/main.css';

const Hero = () => {

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <motion.div
          className="hero-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
      
      <div className="hero-content">
        <motion.div
          className="hero-logo-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-logo-placeholder">
            <span className="logo-text-large">UTSAV</span>
            <span className="logo-text-small">SEEDS</span>
          </div>
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          No.1 Agree Seeds Producer, Supplier & Exporter in India.
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Excellence in Seeds Business since 2011.
        </motion.p>

        <div className="hero-cta-buttons">
          <Link to="/about">
            <motion.button
              className="hero-cta hero-cta-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(76, 175, 80, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Company
            </motion.button>
          </Link>
          <Link to="/contact">
            <motion.button
              className="hero-cta hero-cta-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(33, 150, 243, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </Link>
        </div>
      </div>

      <motion.div
        className="hero-scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>↓</span>
      </motion.div>
    </section>
  );
};

export default Hero;

