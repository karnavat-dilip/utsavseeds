import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/main.css';
import Pukhraj from '../assets/Pokhraj.png';
import castorjay from '../assets/castor jay+.png';
import CASTORRAJ from '../assets/CASTOR RAJ.png';
import CASTORUTSAV333 from '../assets/CASTOR UTSAV -333.png';
import castorutsav2 from '../assets/castor utsav-2.png';
import castoryuvraj from '../assets/castor yuvraj.png';

const CastorProductPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
  }, []);

  const doubleBloomHybridDesc = [
    'Duration 190 to 200 days',
    'Red stem, short node, double bloom hybrid',
    'More productive branches more spikes',
    'Spike long & semi compact with bold semi-spiny capsule',
    'Short internode plant bearing more branches',
    'Highly resistant to wilt',
    'High oil percentage',
  ];

  const tripleBloomHybridDesc = [
    'Days to maturity 180 to 220',
    'Red stem, Triple bloom hybrid',
    'Medium spike with medium bold, spiny capsule',
    'Nature of Spike Semi compact',
    'Resistant to wilt and Root rot.',
    'High oil percentage',
  ];

  const castorProducts = [
    {
      id: 1,
      name: 'CASTOR JAY+',
      image: castorjay,
      description: doubleBloomHybridDesc,
    },
    {
      id: 2,
      name: 'CASTOR UTSAV-333',
      image: CASTORUTSAV333,
      description: doubleBloomHybridDesc,
    },
    {
      id: 3,
      name: 'CASTOR TILAK',
      image: CASTORUTSAV333,
      description: doubleBloomHybridDesc,
    },
    {
      id: 4,
      name: 'CASTOR RAJ',
      image: CASTORRAJ,
      description: tripleBloomHybridDesc,
    },
    {
      id: 5,
      name: 'CASTOR RAJ+',
      image: CASTORRAJ,
      description: tripleBloomHybridDesc,
    },
    {
      id: 6,
      name: 'CASTOR PUKHRAJ',
      image: Pukhraj,
      description: tripleBloomHybridDesc,
    },
    {
      id: 7,
      name: 'CASTOR YUVRAJ',
      image: castoryuvraj,
      description: [
        'Red stem, short internode, double bloom hybrid',
        'Very long compact spike with bold, spiny capsule',
        'Days of maturity 200 to 210 days',
        'Premium quality high yielding hybrid',
        'Suitable for late sowing',
        'Resistant to wilt and root rot.',
        'High oil percentage',
      ],
    },
    {
      id: 8,
      name: 'CASTOR TEJASVI',
      image: castoryuvraj,
      description: [
        'Red stem, short internode, double bloom hybrid',
        'Very long compact spike with bold, spiny capsule',
        'Days of maturity 180 to 200 days',
        'Premium quality high yielding hybrid',
        'Suitable for Early and late sowing',
        'Resistant to wilt and root rot.',
        'High oil percentage',
      ],
    },
    {
      id: 9,
      name: 'CASTOR UTSAV-2',
      image: castorutsav2,
      description: [
        'Green stem, short internode, triple bloom hybrid',
        'More productive branches, more yield',
        'Capsule medium bold & spiny',
        'Semi compact and long spike',
        'Duration 170 to 180 days',
        'High yielding hybrid among green stem segment',
        'Suitable for less irrigated or rainfed areas',
        'Highly resistant to wilt disease',
      ],
    },
  ];

  return (
    <div className="page-wrapper">
      <Navbar />
      <section className="page-hero-section" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)' }}>
        <div className="page-hero-overlay"></div>
        <div className="container">
          
          <motion.h1
            className="page-title-large"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Castor Seeds Supplier in India
          </motion.h1>
        </div>
      </section>
      <section className="product-detail-page-section">
        <div className="container">
          <div className="product-detail-page-content">
            {/* Main Content */}
            <div className="product-detail-main-content">
              <motion.h2
                className="product-detail-main-title"
                data-aos="fade-up"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Largest Producer of Castor Seeds in India
              </motion.h2>

           
              {/* Product Showcase with Images and Descriptions */}
              <motion.div
                className="product-detail-showcase"
                data-aos="fade-up"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {castorProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    className="product-detail-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="product-detail-card-inner">
                      <div className="product-detail-image-wrapper">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="product-detail-image"
                        />
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

            {/* Sidebar */}
            <div className="product-detail-sidebar">
              <motion.div
                className="sidebar-widget product-sidebar-widget"
                data-aos="fade-left"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
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

             

              <motion.div
                className="sidebar-widget product-sidebar-widget"
                data-aos="fade-left"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="sidebar-widget-title product-sidebar-title">Contact Details</h3>
                <div className="contact-details-list">
                  <div className="contact-detail-item">
                    <span className="contact-icon">📞</span>
                    <a href="tel:+919426578791">+91-9426578791</a>
                  </div>
                  <div className="contact-detail-item">
                    <span className="contact-icon">📧</span>
                    <a href="mailto:utsavseeds@gmail.com">utsavseeds@gmail.com</a>
                  </div>
                  <div className="contact-detail-item">
                    <span className="contact-icon">🏢</span>
                    <span>UTSAV SEEDS PVT. LTD.</span>
                  </div>
                  <div className="contact-detail-item">
                    <span className="contact-icon">📍</span>
                    <span>Palanpur, Gujarat, India</span>
                  </div>
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

export default CastorProductPage;



