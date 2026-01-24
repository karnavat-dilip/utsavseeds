import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/main.css';
import MUSATRDSUNHARI1919 from '../assets/MUSATRD SUNHARI 19-19.png';
import MUSTARDRAJ31 from '../assets/MUSTARD RAJ 31.png';
import MUSTARDTHINGUJI100 from '../assets/MUSTARD THINGUJI 100.png';
import MUSTARDUTSAV21 from '../assets/MUSTARD UTSAV 21.png';
import MUSTARDUTSAV51 from '../assets/MUSTARD UTSAV 51.png';
import UM4555 from '../assets/U.M.4555.png';
import UM4545 from '../assets/U.M.4545.png';
const MustardProductPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
  }, []);

  const mustardProducts = [

    {
      id: 1,
      name: 'MUSTARD RAJ 31',
      image: MUSTARDRAJ31,
      description: [
        'Maturity duration 90 to 95 days ',
        'Plant height 95 to 105 cms ',
        'No. of primary branches 7 to 8 ',
        'No. of siliqua / main branch 50-55 ',
        'Siliqua length 5 to 6 cm ',
        'Seed shape round, bold and yellow colour ',
        'Av.no of seed / siliqua 15-18 ',
        'Tolerant to powdery mildew ',
        'Non shattering at maturity',

      ]
    },
    {
      id: 2,
      name: 'MUSTARD THINGUJI 100',
      image: MUSTARDTHINGUJI100,
      description: [
        'Maturity duration 90 to 95 days ',
        'Plant height 95 to 105 cms ',
        'No. of primary branches 7 to 8 ',
        'No. of siliqua / main branch 50-55 ',
        'Siliqua length 5 to 6 cm ',
        'Seed shape round, bold and yellow colour ',
        'Av.no of seed / siliqua 15-18 ',
        'Tolerant to powdery mildew ',
        'Non shattering at maturity',
      ]
    },
    {
      id: 3,
      name: 'MUSTARD UTSAV 21',
      image: MUSTARDUTSAV21,
      description: [
        'Maturity duration 90 to 95 days ',
        'Plant height 95 to 105 cms ',
        'No. of primary branches 7 to 8 ',
        'No. of siliqua / main branch 50-55 ',
        'Siliqua length 5 to 6 cm ',
        'Seed shape round, bold and yellow colour ',
        'Av.no of seed / siliqua 15-18 ',
        'Tolerant to powdery mildew ',
        'Non shattering at maturity',
      ]
    },
    {
      id: 4,
      name: 'MUSTARD UTSAV 51',
      image: MUSTARDUTSAV51,
      description: [
        'Maturity duration 90 to 95 days ',
        'Plant height 95 to 105 cms ',
        'No. of primary branches 7 to 8 ',
        'No. of siliqua / main branch 50-55 ',
        'Siliqua length 5 to 6 cm ',
        'Seed shape round, bold and yellow colour ',
        'Av.no of seed / siliqua 15-18 ',
        'Tolerant to powdery mildew ',
        'Non shattering at maturity',
      ]
    },
    {
      id: 5,
      name: 'U.M.4555',
      image: UM4555,
      description: [
        'Maturity duration 115 to 120 days ',
        'Plant height 180 to 195 cms ',
        'No. of primary branches 7 to 8 ',
        'No. of siliqua / main branch 50-55 ',
        'Siliqua length 5 to 6 cm ',
        'Seed shape round, bold and black ',
        'Av.no of seed / siliqua 18-20 ',
        'Tolerant to powdery mildew ',
        'Non shattering at maturity',

      ]
    },
    {
      id: 6,
      name: 'U.M.4545',
      image: UM4545,
      description: [
        'Maturity duration 115 to 120 days ',
        'Plant height 180 to 195 cms ',
        'No. of primary branches 7 to 8 ',
        'No. of siliqua / main branch 50-55 ',
        'Siliqua length 5 to 6 cm ',
        'Seed shape round, bold and black ',
        'Av.no of seed / siliqua 18-20 ',
        'Tolerant to powdery mildew ',
        'Non shattering at maturity',
      ]
    }
  ];

  return (
    <div className="page-wrapper">
      <Navbar />
      <section className="page-hero-section" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)' }}>
        <div className="page-hero-overlay"></div>
        <div className="container">
         
          <motion.h1
            className="page-title-large"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Mustard Seeds Supplier in India
          </motion.h1>
        </div>
      </section>
      <section className="product-detail-page-section">
        <div className="container">
          <div className="product-detail-page-content">
            <div className="product-detail-main-content">
              <motion.h2
                className="product-detail-main-title"
                data-aos="fade-up"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Leading Producer of Mustard Seeds in India
              </motion.h2>

            

              <motion.div
                className="product-detail-showcase"
                data-aos="fade-up"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {mustardProducts.map((product, index) => (
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

export default MustardProductPage;



