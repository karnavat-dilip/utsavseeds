import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/main.css';
import CASTORGCH4 from '../assets/CASTOR GCH 4.png'
import CASTORGCH7 from '../assets/CASTOR GCH 7.png'
import CASTORJAY from '../assets/CASTOR JAY.png'
import castorjay from '../assets/castor jay+.png'
import CASTORRAJ from '../assets/CASTOR RAJ.png'
import CASTORUTSAV333 from '../assets/CASTOR UTSAV -333.png'
import castorutsav2 from '../assets/castor utsav-2.png'
import castoryuvraj from '../assets/castor yuvraj.png'
import BAJRAUTSAV11 from '../assets/BAJRA UTSAV 11.png'
import BAJRAUTSAV41 from '../assets/BAJRA UTSAV 41.png'
import BAJRAUTSAV61 from '../assets/BAJRA UTSAV 61.png'
import BAJRAUTSAV71 from '../assets/BAJRA UTSAV 71.png'
import utsavbajra31 from '../assets/utsav bajra 31.png'
import removebgpreview65 from '../assets/65-removebg-preview.png'
import MUSATRDSUNHARI1919 from '../assets/MUSATRD SUNHARI 19-19.png'
import MUSTARDRAJ31 from '../assets/MUSTARD RAJ 31.png'
import MUSTARDTHINGUJI100 from '../assets/MUSTARD THINGUJI 100.png'
import MUSTARDUTSAV21 from '../assets/MUSTARD UTSAV 21.png'
import MUSTARDUTSAV51 from '../assets/MUSTARD UTSAV 51.png'
import UMremovebgpreview from '../assets/UM-removebg-preview.png'
import CHILIKRIMA from '../assets/CHILI KRIMA.png'
import FENELGAURI from '../assets/FENEL GAURI.png'
import FOODERBAJARAEVERGREENNO1 from '../assets/FOODER BAJARA  EVERGREEN NO -1.png'
import FOODERBAJARAJUDWANO1 from '../assets/FOODER BAJARA  JUDWA NO -1.png'
import GEHUVARUN from '../assets/GEHU VARUN.png'
import guargarima1 from '../assets/guar garima -1.png'
import guarHYTECH from '../assets/guar HYTECH.png'
import KANAKGUWAR from '../assets/KANAK GUWAR.png'
import MUNGMEGA from '../assets/MUNG MEGA.png'
import MUNGVINAYAK from '../assets/MUNG VINAYAK.png'
import okramuskan from '../assets/okra muskan.png'
import okrapratap from '../assets/okra pratap.png'
import SONAISABGOL from '../assets/SONA ISABGOL.png'
import TILSIDHHI from '../assets/TIL SIDHHI.png'
import URJA77UDAD from '../assets/URJA 77 UDAD.png'
import URJAMUNG from '../assets/URJA MUNG.png'
import UTSAV1121MAIZE from '../assets/UTSAV 1121 MAIZE.png'
import UTSAV3351MAIZEWHITE from '../assets/UTSAV 3351 MAIZE WHITE.png'
import UTSAV3551MAIZE from '../assets/UTSAV 3551 MAIZE.png'
import utsav8888HYJOWAR from '../assets/utsav 8888 HY JOWAR.png'
import UTSAVCUMIN from '../assets/UTSAV CUMIN.png'
import UTSAV_SEEDS20KGBAG20243D from '../assets/UTSAV SEEDS 20 KG BAG 2024 3D.png'
import utsavakshaysuper20kg from '../assets/utsav-akshay super 20 kg......jpg'
import utsavgroundnut20kg from '../assets/utsav-groundnut 20 kg. back.....jpg'
import VARUNSTARGEHU from '../assets/VARUN STAR GEHU.png'
import VRUNDACUMIN from '../assets/VRUNDA CUMIN.png'


 const OurSeedsRange = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Sample products - user can edit later
  const products = [
    {
      id: 1,
      name: 'CASTOR GCH 4',
      image: CASTORGCH4,
    },
    {
      id: 2,
      name: 'CASTOR GCH 7',
      image: CASTORGCH7,
    },
    {
      id: 3,
      name: 'CASTOR JAY',
      image: CASTORJAY,
    },
    {
      id: 4,
      name: 'castor jay+',
      image: castorjay,
    },
    {
      id: 5,
      name: 'CASTOR RAJ',
      image: CASTORRAJ,
    },
    {
        id: 6,
        name: 'CASTOR UTSAV -333',
        image: CASTORUTSAV333,
      },
      {
        id: 7,
        name: 'castor utsav-2',
        image: castorutsav2,
      },
      {
        id: 8,
        name: 'castor yuvraj',
        image: castoryuvraj,
      },
      {
        id: 9,
        name: 'BAJRA UTSAV 11',
        image: BAJRAUTSAV11,
      },
      {
        id: 10,
        name: 'BAJRA UTSAV 41',
        image: BAJRAUTSAV41,
      },
      {
        id: 11,
        name: 'BAJRA UTSAV 61',
        image: BAJRAUTSAV61,
      },
      {
        id: 12,
        name: 'BAJRA UTSAV 71',
        image: BAJRAUTSAV71,
      },
      {
        id: 13,
        name: 'utsav bajra 31',
        image: utsavbajra31,
      },
      {
        id: 14,
        name: '65-removebg-preview',
        image: removebgpreview65,
      },
      {
        id: 15,
        name: 'MUSATRD SUNHARI 19-19',
        image: MUSATRDSUNHARI1919,
      },
      {
        id: 16,
        name: 'MUSTARD RAJ 31',
        image: MUSTARDRAJ31,
      },
      {
        id: 17,
        name: 'MUSTARD THINGUJI 100',
        image: MUSTARDTHINGUJI100,
      },
      {
        id: 18,
        name: 'MUSTARD UTSAV 21',
        image: MUSTARDUTSAV21,
      },
      {
        id: 19,
        name: 'MUSTARD UTSAV 51',
        image: MUSTARDUTSAV51,
      },
      {
        id: 20,
        name: 'UM-removebg-preview',
        image: UMremovebgpreview,
      },
      {
        id: 21,
        name: 'CHILI KRIMA',
        image: CHILIKRIMA,
      },
      {
        id: 22,
        name: 'FENEL GAURI',
        image: FENELGAURI,
      },
      {
        id: 23,
        name: 'FOODER BAJARA EVERGREEN NO -1',
        image: FOODERBAJARAEVERGREENNO1,
      },
      {
        id: 24,
        name: 'FOODER BAJARA  JUDWA NO -1',
        image: FOODERBAJARAJUDWANO1,
      },
      {
        id: 25,
        name: 'GEHU VARUN',
        image: GEHUVARUN,
      },
      {
        id: 26,
        name: 'guar garima -1',
        image: guargarima1,
      },
      {
        id: 27,
        name: 'guar HYTECH',
        image: guarHYTECH,
      },
      {
        id: 28,
        name: 'KANAK GUWAR',
        image: KANAKGUWAR,
      },
      {
        id: 29,
        name: 'MUNG MEGA',
        image: MUNGMEGA,
      },
      {
        id: 30,
        name: 'MUNG VINAYAK',
        image: MUNGVINAYAK,
      },
      {
        id: 31,
        name: 'okra muskan',
        image: okramuskan,
      },
      {
        id: 32,
        name: 'okra pratap',
        image: okrapratap,
      },
      {
        id: 33,
        name: 'SONA ISABGOL',
        image: SONAISABGOL,
      },
      {
        id: 34,
        name: 'TIL SIDHHI',
        image: TILSIDHHI,
      },
      {
        id: 35,
        name: 'URJA 77 UDAD',
        image: URJA77UDAD,
      },
      {
        id: 36,
        name: 'URJA MUNG',
        image: URJAMUNG,
      },
      {
        id: 37,
        name: 'UTSAV 1121 MAIZE',
        image: UTSAV1121MAIZE,
      },
      {
        id: 38,
        name: 'UTSAV 3351 MAIZE WHITE',
        image: UTSAV3351MAIZEWHITE,
      },
      {
        id: 39,
        name: 'UTSAV 3551 MAIZE',
        image: UTSAV3551MAIZE,
      },
      {
        id: 40,
        name: 'utsav 8888 HY JOWAR',
        image: utsav8888HYJOWAR,
      },
      {
        id: 41,
        name: 'UTSAV CUMIN',
        image: UTSAVCUMIN,
      },
      {
        id: 42,
        name: 'UTSAV SEEDS 20 KG BAG',
        image: UTSAV_SEEDS20KGBAG20243D,
      },
      {
        id: 43,
        name: 'utsav-akshay super 20 kg',
        image: utsavakshaysuper20kg,
      },
      {
        id: 44,
        name: 'utsav-groundnut 20 kg.',
        image: utsavgroundnut20kg,
      },
      {
        id: 45,
        name: 'VARUN STAR GEHU',
        image: VARUNSTARGEHU,
      },
      {
        id: 46,
        name: 'VRUNDA CUMIN',
        image: VRUNDACUMIN,
      }
  ];

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [products.length]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  // Get visible products (3 at a time)
  const getVisibleProducts = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % products.length;
      visible.push(products[index]);
    }
    return visible;
  };

  return (
    <section className="seeds-range-section">
      <div className="container">
        <motion.h2
          className="seeds-range-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Explore Our High-Performance Seed Collection
        </motion.h2>

        <div className="seeds-slider-container">
          <button 
            className="slider-arrow slider-arrow-left"
            onClick={prevSlide}
            aria-label="Previous products"
          >
            <span>&#8249;</span>
          </button>

          <div className="seeds-slider-wrapper">
            <motion.div
              className="seeds-slider"
              animate={{ x: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            >
              {getVisibleProducts().map((product, index) => (
                <motion.div
                  key={`${currentIndex}-${product.id}`}
                  className="seed-product-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="product-image-container">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="product-image"
                    />
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-category">{product.category}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <button 
            className="slider-arrow slider-arrow-right"
            onClick={nextSlide}
            aria-label="Next products"
          >
            <span>&#8250;</span>
          </button>
        </div>

        {/* Slider dots indicator */}
        <div className="slider-dots">
          {products.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSeedsRange;

