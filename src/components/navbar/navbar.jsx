import React, { useState } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; // Install: npm install react-router-hash-link
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation Variants
  const linkVariants = {
    hover: { color: '#ff8225', transition: { duration: 0.2 } },
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, staggerChildren: 0.1 } }
  };

  const whatsappLink = "https://wa.me/2347035288188";

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="logo"
        >
          <Link to="/">
            <img src="/logo.webp" alt="Packs and Portions Logo" />
          </Link>
        </Motion.div>

        {/* Desktop Links */}
        <div className="desktop-menu">
          <ul className="nav-links">
            <Motion.li variants={linkVariants} whileHover="hover">
              <Link to="/">Home</Link>
            </Motion.li>
            
            <Motion.li variants={linkVariants} whileHover="hover">
              {/* This scrolls to the Menu section on the Home page */}
              <HashLink smooth to="/#menu">Menu</HashLink>
            </Motion.li>

            <Motion.li variants={linkVariants} whileHover="hover">
              <Link to="/gallery">Gallery</Link>
            </Motion.li>

            <Motion.li variants={linkVariants} whileHover="hover">
              <Link to="/contact">Contact</Link>
            </Motion.li>
          </ul>

          <Motion.a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="whatsapp-btn"
          >
            Order on Whatsapp
          </Motion.a>
        </div>

        {/* Hamburger Icon */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          <Motion.div animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} />
          <Motion.div animate={isOpen ? { opacity: 0 } : { opacity: 1 }} />
          <Motion.div animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} />
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div 
            className="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <HashLink smooth to="/#menu" onClick={() => setIsOpen(false)}>Menu</HashLink>
            <Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
              Order on Whatsapp
            </a>
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;