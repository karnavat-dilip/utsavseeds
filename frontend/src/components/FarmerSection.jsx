import React from 'react';
import { motion } from 'framer-motion';
import utsav_aboutus from '../assets/utsav_aboutus.png'
import '../styles/main.css';

const FarmerSection = () => {
  const features = [
    {
      text: 'Farmer Centric Approach',
      icon: '✓'
    },
    {
      text: 'Consistently Producing & Delivering Quality Seeds',
      icon: '✓'
    },
    {
      text: 'Experienced UTSAV Team at Farmer\'s Services',
      icon: '✓'
    },
    {
      text: 'Improved Seeds to Meet Future Challenges',
      icon: '✓'
    }
  ];

  return (
    <section className="farmer-section">
      <div className="container">
        {/* Left Section - Title and Features */}
        <motion.div
            className="farmer-section-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="farmer-section-title">Agriculture For Future Development</h2>
            
          
          </motion.div>
        <div className="farmer-section-content">
          

          {/* Middle Section - Description */}
          <motion.div
            className="farmer-section-middle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="farmer-description">
              <p>
              Initially started as Utsav Seeds farm at Palanpur, District- Banaskantha during 2003, firm was rename as Utsav Seeds Pvt. Limited., from 2012 thus the company is actively engaged in seed industry since last 20 years.
              </p>
              <p>
              Actively involved in research, production, processing & marketing of high quality seeds of Cereals, Pulses, Oil Seeds and Vegetable  crops.
              </p>
              <p>
              Modern scientific knowledge to developed high yield open pollinated varieties and hybrid varieties in different climates and suitable for irrigated and rainfed areas to increase crop productivity in farmer’s field.
              </p>
            </div>
          </motion.div>

          {/* Right Section - Hexagon Design */}
          <motion.div
            className="farmer-section-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="farmer-hexagon-design">
              <div className="hexagon-grid">
                <img src={utsav_aboutus} width='100%' />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FarmerSection;

