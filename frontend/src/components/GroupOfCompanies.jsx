import React from 'react';
import { motion } from 'framer-motion';
// Import logo images - Add your PNG logos to assets folder
import udanLogo from '../assets/udan-logo.png';
import veerLogo from '../assets/veer-logo.png';
import utsavLogo from '../assets/logo.png';
import '../styles/main.css';

const GroupOfCompanies = () => {
  const companies = [
    {
      
      logo: udanLogo,
      
    },
    {
      
      logo: veerLogo,
      
    }
  ];

  return (
    <section className="group-companies-section">
        <motion.h2
          className="group-companies-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Collective Enterprise
        </motion.h2>
      <div className="container">

        <div className="companies-grid">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              className="company-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="company-logo-container">
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="company-logo-image"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GroupOfCompanies;

