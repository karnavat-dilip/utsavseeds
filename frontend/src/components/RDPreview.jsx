import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const RDPreview = () => {
  return (
    <section className="rd-preview-section">
      <div className="container">
        <div className="rd-preview-content">
          <motion.div
            className="rd-preview-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Research & Development</h2>
            <p>
              Our commitment to research and development drives innovation in seed technology, 
              ensuring farmers have access to the best-performing varieties for their crops.
            </p>
            <Link to="/research" className="rd-preview-button">
              View Research
            </Link>
          </motion.div>
          <motion.div
            className="rd-preview-visual"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rd-preview-placeholder">
              <span className="rd-icon-large">🔬</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RDPreview;












