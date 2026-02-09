import React from 'react';
import { motion as Motion } from "framer-motion";
import FoodCard from '../foodcard/foodcard';
import './menu.css';

const Menu = () => {
  // Organized Menu Data
  const menuData = [
    {
      category: "Breakfast Experience",
      items: [
        { id: 101, name: "Hot Akara with Pap\\Custard\\Quaker Oats", price: "1500", image: "/b1.png" },
        { id: 102, name: "Moi-moi with Pap\\Custard\\Quaker Oats", price: "1500", image: "/b2.png" },
        { id: 103, name: "Hot Okpa with Pap\\Custard\\Quaker Oats", price: "1800", image: "/b3.png" },
        { id: 104, name: "Yam and Egg Sauce", price: "2200", image: "/b4.png" },
        { id: 105, name: "White Rice & peppered stew\\Banga stew\\green veggies", price: "1500", image: "/b5.png" },
        { id: 106, name: "Bread Sandwich toast with Lipton\\Coffee\\green tea\\milk & milo", price: "1900", image: "/b6.png" },
        { id: 107, name: "Beans and Plantain porridge", price: "2200", image: "/b7.png" },
        { id: 108, name: "Fried Plantain and egg sauce", price: "1200", image: "/b8.png" },
        { id: 109, name: "Stir Fried Indomie noodles garnished with fried eggs \\ veggies", price: "1700", image: "/b9.png" },
      ]
    },
    {
      category: "Lunch\\Dinner",
      items: [
        { id: 201, name: "Local Jollof rice", price: "1500", image: "/l1.png" },
        { id: 202, name: "Jollof Rice", price: "1500", image: "/l2.png" },
        { id: 203, name: "Fried Rice", price: "1800", image: "/l3.png" },
        { id: 204, name: "Yam Porridge", price: "2000", image: "/yam-porridge.png" },
        { id: 205, name: "Fisherman Porridge yam", price: "2000", image: "/fisherman.png" },
        { id: 206, name: "Coconut Rice", price: "2000", image: "/coconut-rice.png" },
        { id: 207, name: "Spaghetti with veggies", price: "2000", image: "/spaghetti.png" },
        { id: 208, name: "Beans Porridge", price: "1500", image: "/beans-porridge.png" },
        { id: 209, name: "Plaintain Porridge", price: "2000", image: "/plantain-porridge.png" },
      ]
    },
    {
    category: "Proteins",
    items: [
      { id: 301, name: "Beef", price: "500", image: "/beef.png" },
      { id: 302, name: "Chicken", price: "4500", image: "/chicken.png" },
      { id: 303, name: "Fried Fish", price: "1000", image: "/fried-fish.png" },
      { id: 304, name: "Goat Meat", price: "500", image: "/goat-meat.png" },
      { id: 305, name: "Kpomo", price: "500", image: "/kpomo.png" },
      { id: 306, name: "Roundabout\\Towel\\Liver", price: "500", image: "/roundabout.png" },
      { id: 307, name: "Cow Head\\ Ox Tail", price: "500", image: "/cow-head.png" },
    ]
  },
  {
    category: "Swallows",
    items: [
      { id: 401, name: "Eba", price: "500", image: "/eba.png" },
      { id: 402, name: "Fufu", price: "500", image: "/fufu.png" },
      { id: 403, name: "Semo", price: "500", image: "/semo.png" },
      { id: 404, name: "Wheat", price: "500", image: "/wheat.png" },
      { id: 405, name: "Pounded Yam", price: "1000", image: "/pounded-yam.png" },
      { id: 406, name: "Plantain Flour \\ Cocoyam Flour \\ Water Yam flour", price: "1000", image: "/flours.png" },
    ]
  },
  {
    category: "Extras",
    items: [
      { id: 501, name: "Moi-Moi", price: "700", image: "/moimoi-extra.png" },
      { id: 502, name: "Extra Rice", price: "500", image: "/extra-rice.png" },
      { id: 503, name: "Extra Soup", price: "500", image: "/extra-soup.png" },
      { id: 504, name: "Salad", price: "500", image: "/salad.png" },
      { id: 505, name: "Plantain", price: "500", image: "/plantain-extra.png" },
    ]
  },
  {
    category: "Native Pot",
    items: [
      { id: 601, name: "Peppered Goat Meat", price: "3500", image: "/pep-goat.png" },
      { id: 602, name: "Chicken Pepper Soup", price: "3500", image: "/chicken-ps.png" },
      { id: 603, name: "Chicken Vegetables", price: "4000", image: "/chicken-veg.png" },
      { id: 604, name: "Fresh Fish pepper soup", price: "4000", image: "/fish-ps.png" },
      { id: 605, name: "Goat Meat Pepper Soup", price: "3500", image: "/goat-ps.png" },
      { id: 606, name: "Peppered Chicken", price: "3500", image: "/pep-chicken.png" },
      { id: 607, name: "Nkwobi", price: "3500", image: "/nkwobi.png" },
      { id: 608, name: "Peppered Goat leg", price: "3500", image: "/pep-goat-leg.png" },
      { id: 609, name: "Peppered Snail", price: "5000", image: "/pep-snail.png" },
      { id: 610, name: "Point & Kill", price: "20,000", image: "/point-kill.png" },
      { id: 611, name: "Peppered Kpomo", price: "3000", image: "/pep-kpomo.png" },
      { id: 612, name: "Isiewu", price: "10,000", image: "/isiewu.png" },
    ]
  }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="menu-page-container" id="menu">
      {menuData.map((section, sectionIndex) => (
        <section key={sectionIndex} className="menu-section">
          <Motion.div 
            className="menu-header"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            
          >
            <h2>{section.category}</h2>
            <div className="title-underline"></div>
          </Motion.div>

          <Motion.div 
            className="menu-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {section.items.map((item) => (
              <FoodCard 
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            ))}
          </Motion.div>
        </section>
      ))}
    </div>
  );
};

export default Menu;