import React from 'react';
import { motion as Motion } from "framer-motion";
import './gallery.css';

const Gallery = () => {
  // Replace these strings with your actual image paths
  const images = [
    { id: 1, src: "/20.jpeg", alt: "" },
    { id: 2, src: "/21.jpeg", alt: "" },
    { id: 3, src: "/22.jpeg", alt: "" },
    { id: 4, src: "/23.jpeg", alt: "" },
    { id: 5, src: "/24.jpeg", alt: "" },
    { id: 6, src: "/25.jpeg", alt: "" },
    { id: 7, src: "/26.jpeg", alt: "" },
    { id: 8, src: "/27.jpeg", alt: "" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="gallery-section">
      <Motion.div 
        className="gallery-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h1>Our Gallery</h1>
        <p>A visual taste of our freshly cooked Nigerian meals and restuarant</p>
      </Motion.div>

      <Motion.div 
        className="gallery-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {images.map((image) => (
          <Motion.div 
            key={image.id} 
            className="gallery-item"
            variants={imageVariants}
            whileHover={{ scale: 1.03 }}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
            <Motion.div 
              className="gallery-overlay"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <span>{image.alt}</span>
            </Motion.div>
          </Motion.div>
        ))}
      </Motion.div>
    </section>
  );
};

export default Gallery;