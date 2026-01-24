import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/main.css';

const VegetableSeedsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
  }, []);

  const handleProductClick = (productName) => {
    const productRoutes = {
      'Okra (Bhendi)': '/products/okra',
      'Hot Pepper (Chilli)': '/products/chilli',
      'Tomato': '/products/tomato',
      'Coriander': '/products/coriander',
      'Cowpea (Chowli)': '/products/cowpea',
      'Cluster Bean (Guar Veg.)': '/products/cluster-bean',
      'Bottle Gourd (Lauki)': '/products/bottle-gourd',
      'Ridge Gourd': '/products/ridge-gourd',
      'Spinach': '/products/spinach',
      'Peas': '/products/peas',
      'Muskmelon': '/products/muskmelon',
      'Watermelon': '/products/watermelon'
    };
    
    if (productRoutes[productName]) {
      navigate(productRoutes[productName]);
    }
  };

  const isProductClickable = (productName) => {
    const clickableProducts = [
      'Okra (Bhendi)', 'Hot Pepper (Chilli)', 'Tomato', 'Coriander',
      'Cowpea (Chowli)', 'Cluster Bean (Guar Veg.)', 'Bottle Gourd (Lauki)',
      'Ridge Gourd', 'Spinach', 'Peas', 'Muskmelon', 'Watermelon'
    ];
    return clickableProducts.includes(productName);
  };

  const products = [
   
    {
      name: 'Hot Pepper (Chilli)',
      mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShwVd7bpQiLr6vPGcZN8BacXK9UltSw8FKZw&s',
      seedImage: 'https://img.freepik.com/free-photo/red-hot-chili-peppers-yellow-background_123827-30309.jpg?semt=ais_hybrid&w=740&q=80'
    },
    {
      name: 'Okra (Bhendi)',
      mainImage: 'https://beejwala.com/cdn/shop/articles/Planting_okra_bhindi_1200x.png?v=1709745779',
      seedImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf79-TQ3HXLmpQsvR3piU27iAMu1GsXD4faA&s'
    },
    {
      name: 'Cowpea (Chowli)',
      mainImage: 'https://bloomica.in/cdn/shop/files/cowpeaseeds.jpg?v=1752690037&width=1946',
      seedImage: 'https://thumbs.dreamstime.com/b/blackeyed-pea-cowpea-seeds-white-lobia-legume-pulse-edible-bean-plant-chawli-black-eyed-vigna-unguiculata-southern-china-260209291.jpg'
    },
    {
      name: 'Cluster Bean (Guar Veg.)',
      mainImage: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Cluster_bean-guar-Cyamopsis_psoralioides-Cyamopsis_tetragonolobus-TAMIL_NADU73.jpg',
      seedImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzEfPShr-l3YWz_jsTBMtZoG1RwQTxA_AG0g&s'
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
            Vegetable Seeds Supplier in India
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
                Leading Vegetable Seeds Producer Company India
              </motion.h2>

             
              <motion.div
                className="product-showcase-grid"
                data-aos="fade-up"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {products.map((product, index) => {
                  const productRoutes = {
                    'Okra (Bhendi)': '/products/okra',
                    'Hot Pepper (Chilli)': '/products/chilli',
                    'Tomato': '/products/tomato',
                    'Coriander': '/products/coriander',
                    'Cowpea (Chowli)': '/products/cowpea',
                    'Cluster Bean (Guar Veg.)': '/products/cluster-bean',
                    'Bottle Gourd (Lauki)': '/products/bottle-gourd',
                    'Ridge Gourd': '/products/ridge-gourd',
                    'Spinach': '/products/spinach',
                    'Peas': '/products/peas',
                    'Muskmelon': '/products/muskmelon',
                    'Watermelon': '/products/watermelon'
                  };
                  const productRoute = productRoutes[product.name] || '#';
                  const isClickable = productRoute !== '#';
                  
                  return (
                    <motion.div
                      key={index}
                      className="product-showcase-card"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      whileHover={{ y: -10, boxShadow: '0 15px 40px rgba(0,0,0,0.15)' }}
                      onClick={() => handleProductClick(product.name)}
                      style={{ cursor: isClickable ? 'pointer' : 'default' }}
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
                      <Link 
                        to={productRoute} 
                        className="view-more-link" 
                        onClick={(e) => e.stopPropagation()}
                      >
                        View More <span>→</span>
                      </Link>
                    </motion.div>
                  );
                })}
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

export default VegetableSeedsPage;


