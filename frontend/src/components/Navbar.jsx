import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaWhatsapp, FaHome, FaThLarge, FaInfoCircle, FaFileDownload, FaImages, FaEnvelope, FaPhone, FaTimes, FaChevronDown, FaUsers, FaBullseye, FaBuilding, FaFlask } from 'react-icons/fa';
import logo from '../assets/logo.png';
import '../styles/main.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const socialLinks = [
    { name: 'Facebook', icon: FaFacebook, url: 'https://www.facebook.com/utsav.seeds.3', color: '#1877F2' },
    { name: 'YouTube', icon: FaYoutube, url: 'https://www.youtube.com/@utsavseedspvtltd4157', color: '#FF0000' },
    { name: 'WhatsApp', icon: FaWhatsapp, url: 'https://wa.me/919426578791', color: '#25D366' }
  ];

  return (
    <>
      {/* Top Header Bar */}
      <motion.div
        className="top-header-bar"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="top-header-container">
          <motion.div
            className="welcome-text"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="welcome-icon">🌾</span>
            <span>Welcome to Utsav Seeds Pvt. Ltd.</span>
          </motion.div>
          <motion.div
            className="social-media-icons"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  style={{ '--social-color': social.color }}
                  aria-label={social.name}
                >
                  <IconComponent className="social-icon-svg" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

    <motion.nav
      className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo-link">
          <motion.div
            className="navbar-logo"
            whileHover={{ scale: 1.05 }}
          >
            <img src={logo} alt="UTSAV Seeds Logo" />
          </motion.div>
        </Link>

        {isMobileMenuOpen && (
          <div 
            className="mobile-menu-overlay"
            onClick={closeMobileMenu}
          ></div>
        )}
        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {/* Desktop Menu Links */}
          <Link to="/" onClick={closeMobileMenu} className={location.pathname === '/' ? 'active' : ''}>
            <FaHome className="menu-item-icon" />
            <span>Home</span>
          </Link>
          <Link to="/about" onClick={closeMobileMenu} className={location.pathname === '/about' ? 'active' : ''}>
            <FaUsers className="menu-item-icon" />
            <span>About Us</span>
          </Link>
          <div 
            className="navbar-menu-item-with-dropdown"
            onMouseEnter={() => !isMobileMenuOpen && setIsProductsHovered(true)}
            onMouseLeave={() => {
              if (!isMobileMenuOpen) {
                setTimeout(() => setIsProductsHovered(false), 200);
              }
            }}
          >
            <span 
              className={`products-menu-link ${isProductsHovered ? 'active' : ''}`}
              onClick={() => {
                if (isMobileMenuOpen) {
                  setIsProductsHovered(!isProductsHovered);
                }
              }}
            >
              <FaThLarge className="menu-item-icon" />
              <span>Products</span>
              <FaChevronDown className={`dropdown-arrow ${isProductsHovered ? 'rotated' : ''}`} />
            </span>
            <div 
              className={`products-dropdown ${isProductsHovered ? 'show' : ''}`}
              onMouseEnter={() => !isMobileMenuOpen && setIsProductsHovered(true)}
              onMouseLeave={() => {
                if (!isMobileMenuOpen) {
                  setTimeout(() => setIsProductsHovered(false), 200);
                }
              }}
            >
              <div className="container">
                <div className="products-dropdown-grid">
                  {/* Column 1 */}
                  <div className="dropdown-column">
                    <div className="dropdown-category-group">
                      <Link to="/products/cereals" onClick={closeMobileMenu}>
                        <h3 className="category-group-title">Cereal Seeds</h3>
                      </Link>
                      <ul className="category-items-list">
                        <li><Link to="/products/wheat" onClick={closeMobileMenu}>Wheat</Link></li>
                        <li><Link to="/products/maize" onClick={closeMobileMenu}>Maize (Corn)</Link></li>
                        <li><Link to="/products/bajra" onClick={closeMobileMenu}>Bajra</Link></li>
                      </ul>
                    </div>
                    <div className="dropdown-category-group">
                      <Link to="/products/oil-seeds" onClick={closeMobileMenu}>
                        <h3 className="category-group-title">Oil Seeds</h3>
                      </Link>
                      <ul className="category-items-list">
                        <li><Link to="/products/castor" onClick={closeMobileMenu}>Castor</Link></li>
                        <li><Link to="/products/groundnut" onClick={closeMobileMenu}>Groundnut</Link></li>
                        <li><Link to="/products/sesame" onClick={closeMobileMenu}>Sesame (Til)</Link></li>
                        <li><Link to="/products/mustard" onClick={closeMobileMenu}>Mustard</Link></li>
                      </ul>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="dropdown-column">
                    <div className="dropdown-category-group">
                      <Link to="/products/pulses" onClick={closeMobileMenu}>
                        <h3 className="category-group-title">Pulse Seeds</h3>
                      </Link>
                      <ul className="category-items-list">
                        <li><Link to="/products/green-gram" onClick={closeMobileMenu}>Green Gram (Moong)</Link></li>
                        <li><Link to="/products/black-gram" onClick={closeMobileMenu}>Black Gram (Urad)</Link></li>
                        <li><Link to="/products/guar" onClick={closeMobileMenu}>Guar gum</Link></li>
                      </ul>
                    </div>
                    <div className="dropdown-category-group">
                      <Link to="/products/spices" onClick={closeMobileMenu}>
                        <h3 className="category-group-title">Spices Seeds</h3>
                      </Link>
                      <ul className="category-items-list">
                        <li><Link to="/products/cumin" onClick={closeMobileMenu}>Cumin</Link></li>
                        <li><Link to="/products/fennel" onClick={closeMobileMenu}>Fennel</Link></li>
                        <li><Link to="/products/isabgol" onClick={closeMobileMenu}>Isabgol (Psyllium)</Link></li>
                      </ul>
                    </div>
                    
                  </div>

                  {/* Column 3 */}
                  <div className="dropdown-column">
                    <div className="dropdown-category-group">
                      <Link to="/products/vegetables" onClick={closeMobileMenu}>
                        <h3 className="category-group-title">Vegetable Seeds</h3>
                      </Link>
                      <ul className="category-items-list">
                        <li><Link to="/products/cowpea" onClick={closeMobileMenu}>Cowpea (Chowli)</Link></li>
                        <li><Link to="/products/cluster-bean" onClick={closeMobileMenu}>Cluster Bean (Guar Veg.)</Link></li>
                        <li><Link to="/products/okra" onClick={closeMobileMenu}>Okra (Bhendi)</Link></li>
                        <li><Link to="/products/chilli" onClick={closeMobileMenu}>Hot Pepper (Chilli)</Link></li>
                      </ul>
                    </div>
                    <div className="dropdown-category-group">
                      <Link to="/products/fodder" onClick={closeMobileMenu}>
                        <h3 className="category-group-title">Fodder Seeds</h3>
                      </Link>
                      <ul className="category-items-list">
                        <li><Link to="/products/bajra-fodder" onClick={closeMobileMenu}>Bajra Fodder Seeds</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Desktop Menu Links - Rest */}
          
          <Link to="/research" onClick={closeMobileMenu} className={location.pathname === '/research' ? 'active' : ''}>
            <FaFlask className="menu-item-icon" />
            <span>Research</span>
          </Link>
          <Link to="/contact" onClick={closeMobileMenu} className={location.pathname === '/contact' ? 'active' : ''}>
            <FaEnvelope className="menu-item-icon" />
            <span>Contact</span>
          </Link>
        </div>

        <div
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.nav>
    </>
  );
};

export default Navbar;
