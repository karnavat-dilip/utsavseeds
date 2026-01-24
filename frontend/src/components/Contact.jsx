import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/main.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Use environment variable or detect based on environment
    const API_URL = process.env.REACT_APP_API_URL || 
      (process.env.NODE_ENV === 'production' ? '/contact' : 'http://localhost:5000/contact');
    
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
        setFormData({ name: '', email: '', mobile: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Get in Touch</h3>
            <p>
              We'd love to hear from you. Whether you're a farmer looking for quality seeds 
              or a partner interested in collaboration, reach out to us.
            </p>
            <div className="contact-details">
              <div className="contact-detail-item">
                <span className="contact-icon">📍</span>
                <span>Palanpur, Gujarat, India</span>
              </div>
              <div className="contact-detail-item">
                <span className="contact-icon">📧</span>
                <span><a href="mailto:utsavseeds@gmail.com">utsavseeds@gmail.com</a></span>
              </div>
              <div className="contact-detail-item">
                <span className="contact-icon">📞</span>
                <span><a href="tel:+919426578791">+91 9426578791</a></span>
              </div>
            </div>
            <div className="contact-map" style={{ marginTop: '2rem' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.732846097291!2d72.36575947534926!3d24.179173578380222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395ceb056bb7a329%3A0xb37f913655d1f3da!2sUtsav%20Seeds!5e1!3m2!1sen!2sin!4v1767265873308!5m2!1sen!2sin" 
                width="100%" 
                height="300" 
                style={{ border: 0, borderRadius: '10px' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="UTSAV Seeds Location"
              ></iframe>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="mobile">Mobile *</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                placeholder="+91-XXXXXXXXXX"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>

            {submitStatus && (
              <motion.div
                className={`submit-status ${submitStatus.type}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {submitStatus.message}
              </motion.div>
            )}

            <motion.button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

