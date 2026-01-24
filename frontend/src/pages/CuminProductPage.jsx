import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/main.css';
import UTSAVCUMIN from '../assets/UTSAV CUMIN.png';
import VRUNDACUMIN from '../assets/VRUNDA CUMIN.png';

const CuminProductPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
  }, []);

  const cuminProducts = [
    {
      id: 1, name: 'Manek CUMIN', image: UTSAVCUMIN, description: [
        'Semi-spreding type plant ',
        'Plant height 30-35 cm ',
        'High no. of umbels & umbeletes ',
        'More yield then other varieties ',
        'High aroma & oil content ',
        'Days to maturity 115-120 ',
        'Resistant to blight & tolerant to wilt disease',

      ]
    },
    {
      id: 2, name: 'VRUNDA CUMIN', image: VRUNDACUMIN, description: ['Semi-spreding type plant ',
        'Plant height 30-35 cm ',
        'High no. of umbels & umbeletes ',
        'More yield then other varieties ',
        'High aroma & oil content ',
        'Days to maturity 115-120 ',
        'Resistant to blight & tolerant to wilt disease',]
    }
  ];

  return (
    <div className="page-wrapper">
      <Navbar />
      <section className="page-hero-section" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)' }}>
        <div className="page-hero-overlay"></div>
        <div className="container">
          
          <motion.h1
            className="page-title-large"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Cumin Seeds Supplier in India
          </motion.h1>
        </div>
      </section>
      <section className="product-detail-page-section">
        <div className="container">
          <div className="product-detail-page-content">
            <div className="product-detail-main-content">
              <motion.h2 className="product-detail-main-title" data-aos="fade-up" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                Leading Producer of Cumin Seeds in India
              </motion.h2>
             
              <motion.div className="product-detail-showcase" data-aos="fade-up" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
                {cuminProducts.map((product, index) => (
                  <motion.div key={product.id} className="product-detail-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}>
                    <div className="product-detail-card-inner">
                      <div className="product-detail-image-wrapper">
                        <img src={product.image} alt={product.name} className="product-detail-image" />
                      </div>
                      <div className="product-detail-info">
                        <h3 className="product-detail-name">{product.name}</h3>
                        <ul className="product-detail-description-list">
                          {product.description.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <div className="product-detail-sidebar">
              <motion.div className="sidebar-widget product-sidebar-widget" data-aos="fade-left" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h3 className="sidebar-widget-title product-sidebar-title">Other Seeds Categories</h3>
                <ul className="sidebar-links-list">
                  <li><Link to="/products/cereals">Cereal Seeds</Link></li>
                  <li><Link to="/products/oil-seeds">Oil Seeds</Link></li>
                  <li><Link to="/products/pulses">Pulse Seeds</Link></li>
                  <li><Link to="/products/spices">Spices Seeds</Link></li>
                  <li><Link to="/products/vegetables">Vegetable Seeds</Link></li>
                  <li><Link to="/products/fodder">Fodder Seeds</Link></li>
                </ul>
              </motion.div>
             
              <motion.div className="sidebar-widget product-sidebar-widget" data-aos="fade-left" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
                <h3 className="sidebar-widget-title product-sidebar-title">Contact Details</h3>
                <div className="contact-details-list">
                  <div className="contact-detail-item"><span className="contact-icon">📞</span><a href="tel:+919426578791">+91-9426578791</a></div>
                  <div className="contact-detail-item"><span className="contact-icon">📧</span><a href="mailto:utsavseeds@gmail.com">utsavseeds@gmail.com</a></div>
                  <div className="contact-detail-item"><span className="contact-icon">🏢</span><span>UTSAV SEEDS PVT. LTD.</span></div>
                  <div className="contact-detail-item"><span className="contact-icon">📍</span><span>Palanpur, Gujarat, India</span></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CuminProductPage;


