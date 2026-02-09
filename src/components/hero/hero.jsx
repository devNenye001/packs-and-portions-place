import React from 'react';
import { motion as Motion } from "framer-motion";
import './hero.css';

const Hero = () => {
  // Array of images from your gallery
  const foodImages = [
    "/h1.png", 
    "/h2.png", 
    "/h3.png", 
    "/h4.png", 
    "/h5.png",
    "/h6.jpg", 
    "/h7.jpg", 
    "/h8.jpg", 
    "/h9.jpg", 
    "/h10.jpg"
  ];

  const whatsappNumber = "23407035288188"; // International format for Nigeria

  return (
    <section className="hero">
      <div className="hero-content">
        <Motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Home Meal Away <br /> from Home
        </Motion.h1>
      </div>

      {/* Sliding Image Gallery */}
      <div className="slider-container">
        <Motion.div 
          className="slider-track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 20, 
            repeat: Infinity 
          }}
        >
          {foodImages.map((img, index) => (
            <div className="slide" key={index}>
              <img src={img} alt="Delicious Nigerian Meal" />
            </div>
          ))}
        </Motion.div>
      </div>

      {/* Call to Action */}
      <Motion.div 
        className="hero-action"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Motion.a 
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-hero-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Order on Whatsapp
        </Motion.a>
      </Motion.div>
    </section>
  );
};

export default Hero;