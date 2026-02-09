import React from 'react';
import { motion as Motion } from "framer-motion";
import './foodcard.css';

const FoodCard = ({ image, name, price }) => {
  return (
    <Motion.div 
      className="food-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="food-image-container">
        <img src={image} alt={name} className="food-image" />
      </div>

      <div className="food-info">
        <h3 className="food-name">{name}</h3>
        <p className="food-price">₦{price}</p>
      </div>
    </Motion.div>
  );
};

export default FoodCard;