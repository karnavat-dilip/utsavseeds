import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhone, FaCalendarAlt } from 'react-icons/fa';
import logo from '../assets/logo.png';
import '../styles/main.css';

const Footer = () => {
  const socialMediaLinks = [
    { name: 'Facebook', icon: FaFacebook, url: 'https://www.facebook.com/utsav.seeds.3', color: '#1877F2' },
    { name: 'YouTube', icon: FaYoutube, url: 'https://www.youtube.com/@utsavseedspvtltd4157', color: '#FF0000' },
    { name: 'WhatsApp', icon: FaWhatsapp, url: 'https://wa.me/919426578791', color: '#25D366' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-section footer-logo-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={logo} alt="UTSAV Seeds Logo" className="footer-logo" />
            <p className="footer-tagline">Research-Driven Seeds for a Stronger Indian Agriculture</p>
            <p className="footer-cert">ISO 9001:2015 Certified</p>
            
            <motion.div 
              className="footer-social-media"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h5 className="social-title">Follow Us</h5>
              <div className="social-icons">
                {socialMediaLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon-link"
                      aria-label={social.name}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      style={{ '--social-color': social.color }}
                    >
                      <IconComponent />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/research">Research</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </motion.div>

        

          <motion.div
            className="footer-section footer-contact-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="footer-section-title">Contact Us</h4>
            <div className="contact-details">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Palanpur, Gujarat, India</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:utsavseeds@gmail.com">utsavseeds@gmail.com</a>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <a href="tel:+919426578791">+91 9426578791</a>
              </div>
            </div>
            <div className="company-info">
              <div className="info-item">
                <FaCalendarAlt className="info-icon" />
                <span>Established: 2003</span>
              </div>
              <div className="info-item">
                <FaCalendarAlt className="info-icon" />
                <span>Pvt. Ltd. since: 2012</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>&copy; {new Date().getFullYear()} UTSAV SEEDS Pvt. Ltd. All rights reserved.</p>
          <div className="footer-developer">
            <p className="developer-text">Developed By <strong>Er.Dilip</strong></p>
            <div className="developer-contact">
              <a href="tel:+919913448958" className="call-now-button">
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

