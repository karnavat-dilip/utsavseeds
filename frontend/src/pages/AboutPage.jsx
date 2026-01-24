import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from '../assets/logo.png';
import '../styles/main.css';

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
  }, []);

  const timeline = [
    {
      year: '2003',
      title: 'Foundation',
      description: 'UTSAV SEEDS was established in Palanpur, Gujarat, with a vision to empower Indian farmers through quality seeds.'
    },
    {
      year: '2012',
      title: 'Incorporation',
      description: 'Company incorporated as UTSAV SEEDS Pvt. Ltd., marking a new chapter in our growth journey.'
    },
    {
      year: 'Today',
      title: 'Leading Seed Company',
      description: '20+ years of excellence, ISO 9001:2015 certified, serving 6 states with research-based seed solutions.'
    }
  ];

  return (
    <div className="page-wrapper">
      <Navbar />
      <section className="page-hero-section" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80)' }}>
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
            About Us
          </motion.h1>
        </div>
      </section>
      <section className="about-page-section">
        <div className="container">
          {/* Always Farmer First Title */}
          <motion.h1
            className="always-farmer-first-title"
            data-aos="fade-up"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Championing Farmers
          </motion.h1>

          {/* Company Information Paragraphs */}
          <motion.div
            className="about-company-info"
            data-aos="fade-up"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="about-info-text">
              <strong>Utsav Seeds</strong> has been driving agricultural innovation since <strong>2003</strong>. Originally founded in Jodnapura, Banaskantha, we transitioned to Utsav Seeds Pvt. Ltd. in 2012, marking nearly two decades of dedicated service to the seed industry.
            </p>
            <p className="about-info-text">
              Our operations span the entire seed value chain—innovating, producing, and marketing high-quality seeds for a diverse range of cereal, vegetable, pulse, and oilseed crops.
            </p>
            <p className="about-info-text">
              The company was incorporated on December 11, 2012, under the Companies Act, 1956 (No. 1 of 1956), with Registration No. 04-34112 of 2012-13.
            </p>
            <p className="about-info-text">
              The company maintains a strong operational presence across several key states, including Gujarat, Rajasthan, Madhya Pradesh, Telangana, Andhra Pradesh, and Haryana.
            </p>
            <p className="about-info-text">
              The company is ISO 9001:2015 certified, reflecting our commitment to maintaining a robust Quality Management System.
            </p>
          </motion.div>

          {/* Mission, Vision, Values Cards */}
          <div className="mission-vision-values-grid">
            {[
              {
                title: 'Our Mission',
                icon: '🎯',
                description: 'Empowering farmers through seed innovation, superior yields, and sustainable agricultural practices.'
              },
              {
                title: 'Our Vision',
                icon: '👁️',
                description: 'Our vision is to become a worldwide leader in the seed industry, trusted by farmers for our innovation in high-yielding field crops and premium vegetable varieties.'
              },
              {
                title: 'Our Values',
                icon: '👥',
                description: 'Empowering farmers, ensuring quality, and upholding integrity across the entire value chain.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="mvv-card"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="mvv-icon-wrapper">
                  <div className="mvv-icon">{item.icon}</div>
                </div>
                <h3 className="mvv-title">{item.title}</h3>
                <p className="mvv-description">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Timeline Section */}
          <div className="about-timeline">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                data-aos="fade-right"
                data-aos-delay={index * 200}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Philosophy Section */}
          <motion.div
            className="about-philosophy"
            data-aos="fade-up"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Our Philosophy</h2>
            <p>
              We believe in the power of science and innovation to transform agriculture.
              Our research-driven approach ensures that every seed we produce meets the highest
              standards of quality and performance. We are committed to making quality seeds
              accessible and affordable to farmers across India, contributing to the nation's
              agricultural prosperity.
            </p>
          </motion.div>

          {/* Better Agriculture For Better Future Section */}
        </div>
      </section>
      <section className="better-agriculture-section-wrapper">
        <div className="container">
          <motion.div
            className="better-agriculture-section"
            data-aos="fade-up"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="better-agriculture-content">
              <div className="better-agriculture-text">
                <h2 className="better-agriculture-title">Our Strengths</h2>
                <ul className="better-agriculture-list">
                  <li>
                    <span className="checkmark-icon">✓</span>
                    <div>
                    Competent team of Scientific and technical staff.

                    </div>
                  </li>
                  <li>
                    <span className="checkmark-icon">✓</span>
                    <div>
                    Strategic tie-ups with appropriate Public and Private Institutions.
                    </div>
                  </li>
                  <li>
                    <span className="checkmark-icon">✓</span>
                    <div>
                    Linkages with Agri-industry, Government and development institutions.
                    </div>
                  </li>
                  <li>
                    <span className="checkmark-icon">✓</span>
                    <div>
                    Strong information base on agriculture, agri market, industry and rural economy.
                    </div>
                  </li>
                  <li>
                    <span className="checkmark-icon">✓</span>
                    <div>
                    A Strong base of Marketing network across the states.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="better-agriculture-image">
                <img 
                  src="https://www.shutterstock.com/image-photo/highquality-photo-small-green-plant-600nw-2600218007.jpg" 
                  alt="Greenhouse with tomato plants and agricultural inspection"
                  className="agriculture-img"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="company-contact-details-wrapper">
        {/* <div className="company-contact-header" style={{background:"#9b9b9b"}}>
          <div className="container">
            <div className="company-contact-header-content">
              <h2 className="company-contact-title">COMPANY CONTACT DETAILS</h2>
              <div className="company-logo-in-header">
                <img src={logo} alt="UTSAV SEEDS Logo" />
              </div>
            </div>
          </div>
        </div> */}
        <div className="container">
          <div className="company-contact-content">
            <h3 className="regional-office-title">Company Regional Office:</h3>
            <div className="regional-offices-list">
              <motion.div
                className="regional-office-item"
                data-aos="fade-up"
                data-aos-delay={0}
              >
                <h4 className="office-state">1. Gujarat:</h4>
                <p className="office-company">Utsav Seeds Pvt Ltd.</p>
                <p className="office-address">
                  4, Gurukrupa Estate, B/h Om Transport, Aslali, Ahmedabad,
                  <br />
                  Gujarat
                </p>
              </motion.div>

              <motion.div
                className="regional-office-item"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <h4 className="office-state">2. Rajasthan:</h4>
                <p className="office-company">Utsav Seeds Pvt Ltd.</p>
                <p className="office-address">
                  T-4, 3rd Floor, Agrasen Tower, Central Spine, Vidhyadhar Nagar, Jaipur,
                  <br />
                  Rajasthan.
                </p>
              </motion.div>

              <motion.div
                className="regional-office-item"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <h4 className="office-state">3. Telangana:</h4>
                <p className="office-company">Utsav Seeds Pvt Ltd.</p>
                <p className="office-address">
                  Plot No. 143, Brundavan Garden, Kishenguda, Shamshabad, R.R.
                  <br />
                  District, Telangana.
                </p>
              </motion.div>

              <motion.div
                className="regional-office-item"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <h4 className="office-state">4. Andhra Pradesh:</h4>
                <p className="office-company">Utsav Seeds Pvt Ltd.</p>
                <p className="office-address">
                  House No. 76-101-1/1, Radha Nagar, Bellary Road, Kurnool (M),
                  <br />
                  Andhra Pradesh
                </p>
              </motion.div>
            </div>

            {/* Company Contact Details Table */}
            <div className="company-contact-table-section">
              <div className="contact-table-wrapper">
                <table className="contact-details-table">
                  <thead>
                    <tr>
                      <th className="table-header-left">Address</th>
                      <th className="table-header">Company Address</th>
                      <th className="table-header">Corporate Office Address</th>
                      <th className="table-header">Plant Address</th>
                      <th className="table-header">Research Farm Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="table-row-header">Plot No/ Street/ Survey No</td>
                      <td>G-3, Near Ambedkar Bhavan, Gurunanak Chowk,</td>
                      <td>House No. 76-101-1/1, Radha Nagar, Bellary Road,</td>
                      <td>Ravi Estate</td>
                      <td>Utsav Seeds R & D Farm</td>
                    </tr>
                    <tr>
                      <td className="table-row-header">Village/City</td>
                      <td>Palanpur</td>
                      <td>Kurnool</td>
                      <td>Chadotar</td>
                      <td>Jodanapura</td>
                    </tr>
                    <tr>
                      <td className="table-row-header">Taluka</td>
                      <td>Palanpur</td>
                      <td>Kurnool</td>
                      <td>Palanpur</td>
                      <td>Palanpur</td>
                    </tr>
                    <tr>
                      <td className="table-row-header">District</td>
                      <td>Banaskantha</td>
                      <td>Kurnool</td>
                      <td>Banaskantha</td>
                      <td>Banaskantha</td>
                    </tr>
                    <tr>
                      <td className="table-row-header">State</td>
                      <td>Gujarat</td>
                      <td>Andhra Pradesh</td>
                      <td>Gujarat</td>
                      <td>Gujarat</td>
                    </tr>
                    <tr>
                      <td className="table-row-header">Pincode</td>
                      <td>385 001</td>
                      <td>518003</td>
                      <td>385 001</td>
                      <td>385 001</td>
                    </tr>
                    <tr>
                      <td className="table-row-header">Contact Details</td>
                      <td>
                        <div>Phone No (Land Line & Mobile)</div>
                        <div>02742-266400</div>
                        <div>094265 78791</div>
                      </td>
                      <td>
                        <div>Phone No (Land Line & Mobile)</div>
                        <div>9904596945</div>
                      </td>
                      <td>
                        <div>Fax No</div>
                        <div>Na</div>
                      </td>
                      <td>
                        <div>Email</div>
                        <div><a href="mailto:utsavseeds@gmail.com" className="email-link">utsavseeds@gmail.com</a></div>
                        <div>Website:</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-page-section">
        <div className="container">
          {/* Certification Section */}
          <motion.div
            className="about-certification"
            data-aos="zoom-in"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="cert-badge">
              <span className="cert-icon">✅</span>
              <h3>ISO 9001:2015 Certified</h3>
              <p>Internationally recognized quality management system</p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;












