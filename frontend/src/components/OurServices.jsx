import React from 'react';
import { motion } from 'framer-motion';
import '../styles/main.css';

const OurServices = () => {
  const services = [
    {
      name: 'Cereal Crop',
      description: 'Our elite cultivars of wheat, maize, and bajra are engineered for high productivity across diverse agro-climatic zones.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&q=80',
      icon: '🌾'
    },
    {
      name: 'Oil Seeds',
      description: 'Specially developed for resilience and quality, our oilseeds—including castor, mustard, and sesame—deliver superior oil yields even in challenging growing conditions.',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&q=80',
      icon: '🌻'
    },
    {
      name: 'Pulse Seeds',
      description: 'Our hardy varieties of green gram and black gram are bred to withstand pests and diseases, consistently delivering high-quality yields for growers.',
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80',
      icon: '🫘'
    },
    {
      name: 'Spices Seeds',
      description: 'Our premium cumin, fennel, and psyllium seeds undergo rigorous testing to guarantee superior germination rates and vigorous crop development.',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80',
      icon: '🌿'
    },
    {
      name: 'Vegetable Seeds',
      description: 'Our premium hybrid vegetable varieties are engineered to deliver robust growth profiles alongside exceptional culinary quality and high nutrient content.',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80',
      icon: '🥬'
    },
    {
      name: 'Fodder Seeds',
      description: 'We offer high-yielding, nutrient-dense fodder seeds designed to ensure superior forage quality for every harvest.',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&q=80',
      icon: '🌱'
    }
  ];

  return (
    <section className="our-services-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Provide No.1 Quality Seeds
        </motion.h2>
        <p style={{'textAlign':'center'}}>Development of products: varieties / hybrids suitable for quality traits to meet the demand of the farmers and industries.</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="service-image-container">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="service-image"
                />
              </div>
              
              <p className="service-description">
                {service.description}
              </p>

              <motion.button
                className="service-button"
                whileHover={{ backgroundColor: 'var(--dark-green)' }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="service-icon">{service.icon}</span>
                <span className="service-name">{service.name}</span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;









