import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/main.css';

const SpicesSeedsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
  }, []);

  const handleProductClick = (productName) => {
    const productRoutes = {
      'Cumin': '/products/cumin',
      'Fennel': '/products/fennel',
      'Isabgol (Psyllium)': '/products/isabgol'
    };
    
    if (productRoutes[productName]) {
      navigate(productRoutes[productName]);
    }
  };

  const products = [
    {
      name: 'Cumin',
      mainImage: 'https://cdn.britannica.com/37/142137-050-22AEE6A8/Cumin.jpg',
      seedImage: 'https://gaudhuli.com/wp-content/uploads/2025/04/jeera.jpg'
    },
    {
      name: 'Fennel',
      mainImage: 'https://www.simplyrecipes.com/thmb/t0CahcoChhqDLB9elOkRdmJKsdM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2011__12__fennel-gratin-fennel-777312500685411b8d7c618595e86587.jpg',
      seedImage: 'https://m.media-amazon.com/images/I/81HF2VyEQUL._AC_UF894,1000_QL80_.jpg'
    },
    {
      name: 'Isabgol (Psyllium)',
      mainImage: 'https://drvaidji.com/cdn/shop/articles/Psyllium-Husk-in-Hindi-2.jpg?v=1701515716',
      seedImage: 'https://www.viralspices.com/wp-content/uploads/2019/02/Psyllium-Husk-Organic-Products-India-624x312.jpeg'
    }
  ];

  return (
    <div className="page-wrapper">
      <Navbar />
      <section className="page-hero-section" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)' }}>
        <div className="page-hero-overlay"></div>
        <div className="container">
          <motion.nav
            className="breadcrumb-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
          
          </motion.nav>
          <motion.h1
            className="page-title-large"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Spices Seeds Supplier in India
          </motion.h1>
        </div>
      </section>

      <section className="category-page-section">
        <div className="container">
          <div className="category-page-content">
            <div className="category-main-content">
              <motion.h2
                className="category-main-title"
                data-aos="fade-up"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Leading Spices Seeds Producer Company India
              </motion.h2>

            
              <motion.div
                className="product-showcase-grid"
                data-aos="fade-up"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {products.map((product, index) => (
                  <motion.div
                    key={index}
                    className="product-showcase-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -10, boxShadow: '0 15px 40px rgba(0,0,0,0.15)' }}
                    onClick={() => handleProductClick(product.name)}
                    style={{ cursor: ['Cumin', 'Fennel', 'Isabgol (Psyllium)'].includes(product.name) ? 'pointer' : 'default' }}
                  >
                    <div className="product-showcase-image-wrapper">
                      <img 
                        src={product.mainImage} 
                        alt={product.name}
                        className="product-main-image"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                        }}
                      />
                      <div className="product-seed-circle">
                        <img 
                          src={product.seedImage} 
                          alt={`${product.name} seeds`}
                          className="product-seed-image"
                          onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80';
                          }}
                        />
                      </div>
                    </div>
                    <h3 className="product-showcase-name">{product.name}</h3>
                    {['Cumin', 'Fennel', 'Isabgol (Psyllium)'].includes(product.name) && (
                      <Link 
                        to={
                          product.name === 'Cumin' ? '/products/cumin' :
                          product.name === 'Fennel' ? '/products/fennel' :
                          '/products/isabgol'
                        } 
                        className="view-more-link" 
                        onClick={(e) => e.stopPropagation()}
                      >
                        View More <span>→</span>
                      </Link>
                    )}
                    {!['Cumin', 'Fennel', 'Isabgol (Psyllium)'].includes(product.name) && (
                      <div className="view-more-link" style={{ opacity: 0.5, cursor: 'not-allowed' }}>
                        Coming Soon
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="category-sidebar">
              <motion.div
                className="sidebar-widget"
                data-aos="fade-left"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="sidebar-widget-title">Other Seeds Categories</h3>
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
                className="sidebar-widget"
                data-aos="fade-left"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="sidebar-widget-title">Contact Details</h3>
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

export default SpicesSeedsPage;


