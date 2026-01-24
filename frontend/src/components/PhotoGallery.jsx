import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/main.css';

// Farmer Activity Images
import FarmerActivity1 from '../assets/Farmer activity1.jpeg';
import FarmerActivity2 from '../assets/Farmer activity2.jpeg';
import FarmerActivity3 from '../assets/Farmer activity3.jpeg';
import FarmerActivity4 from '../assets/Farmer activity4.jpeg';
import FarmerActivity5 from '../assets/Farmer activity5.jpeg';
import FarmerActivity6 from '../assets/Farmer activity6.jpeg';
import FarmerActivity7 from '../assets/Farmer activity7.jpeg';
import FarmerActivity8 from '../assets/Farmer activity8.jpeg';
import FarmerActivity9 from '../assets/Farmer activity9.jpeg';

// R & D Visit by DOR Scientists Images
import DORScientist1 from '../assets/R & D Visit by DOR Scientists1.jpeg';
import DORScientist2 from '../assets/R & D Visit by DOR Scientists2.jpeg';
import DORScientist3 from '../assets/R & D Visit by DOR Scientists3.jpeg';
import DORScientist4 from '../assets/R & D Visit by DOR Scientists4.jpeg';

// German Delegates Images
import GermanDelegate1 from '../assets/German  Delegates1.jpeg';
import GermanDelegate2 from '../assets/German  Delegates2.jpeg';
import GermanDelegate3 from '../assets/German  Delegates3.jpeg';
import GermanDelegate4 from '../assets/German  Delegates4.jpeg';
import GermanDelegate5 from '../assets/German  Delegates5.jpeg';

// Japan Delegates Images
import JapanDelegate1 from '../assets/Japan Delegates1.jpeg';
import JapanDelegate2 from '../assets/Japan Delegates2.jpeg';
import JapanDelegate3 from '../assets/Japan Delegates3.jpeg';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Photo data for each section
  const gallerySections = [
    {
      id: 1,
      title: 'Farmer Activity',
      photos: [
        FarmerActivity1,
        FarmerActivity2,
        FarmerActivity3,
        FarmerActivity4,
        FarmerActivity5,
        FarmerActivity6,
        FarmerActivity7,
        FarmerActivity8,
        FarmerActivity9,
      ]
    },
    {
      id: 2,
      title: 'R & D Visit by DOR Scientists',
      photos: [
        DORScientist1,
        DORScientist2,
        DORScientist3,
        DORScientist4,
      ]
    },
    {
      id: 3,
      title: 'German Delegates',
      photos: [
        GermanDelegate1,
        GermanDelegate2,
        GermanDelegate3,
        GermanDelegate4,
        GermanDelegate5,
      ]
    },
    {
      id: 4,
      title: 'Japan Delegates',
      photos: [
        JapanDelegate1,
        JapanDelegate2,
        JapanDelegate3,
      ]
    }
  ];

  // Get all photos in a flat array for lightbox navigation
  const allPhotos = gallerySections.flatMap(section => section.photos);

  const openLightbox = (photo, index) => {
    setSelectedImage(photo);
    setSelectedIndex(allPhotos.indexOf(photo));
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (direction === 'next') {
      const nextIndex = (selectedIndex + 1) % allPhotos.length;
      setSelectedIndex(nextIndex);
      setSelectedImage(allPhotos[nextIndex]);
    } else {
      const prevIndex = (selectedIndex - 1 + allPhotos.length) % allPhotos.length;
      setSelectedIndex(prevIndex);
      setSelectedImage(allPhotos[prevIndex]);
    }
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedImage) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') navigateImage('next');
        if (e.key === 'ArrowLeft') navigateImage('prev');
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, selectedIndex]);

  return (
    <section className="photo-gallery-section">
      <div className="container">
        <motion.h2
          className="gallery-section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          data-aos="fade-up"
        >
          Photo Gallery
        </motion.h2>

        {gallerySections.map((section, sectionIndex) => (
          <motion.div
            key={section.id}
            className="gallery-category"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
            data-aos="fade-up"
            data-aos-delay={sectionIndex * 100}
          >
            <h3 className="gallery-category-title">{section.title}</h3>
            <div className="gallery-grid">
              {section.photos.map((photo, photoIndex) => (
                <motion.div
                  key={photoIndex}
                  className="gallery-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: sectionIndex * 0.2 + photoIndex * 0.1 }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  onClick={() => openLightbox(photo, photoIndex)}
                >
                  <div className="gallery-image-wrapper">
                    <img
                      src={photo}
                      alt={`${section.title} - Photo ${photoIndex + 1}`}
                      className="gallery-image"
                      loading="lazy"
                    />
                    <div className="gallery-overlay">
                      <span className="gallery-view-icon">🔍</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="lightbox-close"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.div>
            <motion.div
              className="lightbox-nav lightbox-nav-prev"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ‹
            </motion.div>
            <motion.div
              className="lightbox-nav lightbox-nav-next"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ›
            </motion.div>
            <motion.img
              src={selectedImage}
              alt="Gallery Image"
              className="lightbox-image"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;

