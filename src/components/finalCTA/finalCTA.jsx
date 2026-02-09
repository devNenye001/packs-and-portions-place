import React from 'react';
import { motion as Motion } from "framer-motion";
import './finalCTA.css';

const FinalCTA = () => {
  const whatsappLink = "https://wa.me/2347035288188";

  // Animation variants for the container contents
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        staggerChildren: 0.2 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="cta-wrapper">
      <Motion.div 
        className="cta-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
      >
        <Motion.h2 variants={itemVariants} className="cta-title">
          Hungry? Order for Delivery
        </Motion.h2>
        
        <Motion.p variants={itemVariants} className="cta-description">
          Enjoy fresh meals delivered hot and fast to your location.
        </Motion.p>

        <Motion.div variants={itemVariants}>
          <Motion.a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              boxShadow: [
                "0px 0px 0px rgba(255,255,255,0)", 
                "0px 0px 20px rgba(255,255,255,0.4)", 
                "0px 0px 0px rgba(255,255,255,0)"
              ] 
            }}
            transition={{ 
              boxShadow: { repeat: Infinity, duration: 2 } 
            }}
          >
            Call or WhatsApp to order
          </Motion.a>
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default FinalCTA;