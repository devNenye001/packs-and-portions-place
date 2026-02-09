import React from 'react';
import { motion as Motion } from "framer-motion";
import './footer.css';

// Icon placeholders - you can replace these with react-icons (FaFacebook, etc.)
const FacebookIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>;
const InstagramIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;
const TiktokIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.44.02-4.85-1.19-6.24-3.23-1.48-2.02-1.8-4.72-.81-7.02.8-1.85 2.45-3.33 4.41-3.83 1.05-.28 2.15-.28 3.22-.08v4.2c-.87-.31-1.84-.31-2.71.02-.92.33-1.66 1.1-2.01 2.04-.36 1.01-.2 2.18.37 3.1 1.05 1.7 3.65 2.01 5.11.66.78-.71 1.21-1.75 1.21-2.82.02-3.63-.01-7.26-.01-10.89z"/></svg>;

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="footer">
      <Motion.div 
        className="footer-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Left Section: Opening Times */}
        <Motion.div className="footer-section" variants={itemVariants}>
          <h3>Opening Times</h3>
          <p>Monday – Saturday: 8:00am – 8:00pm</p>
          <p>Sunday: <span className="highlight">Closed</span></p>
          <ul className="footer-perks">
            <li>Home & Office Delivery</li>
            <li>📦 Neat takeaway packaging</li>
            <li>🍴 Hot meals, always</li>
          </ul>
        </Motion.div>

        {/* Center Section: Branding & Socials */}
        <Motion.div className="footer-section center" variants={itemVariants}>
          <div className="footer-logo">
            <img src="/logo2.svg" alt="Packs and Portions Logo" />
          </div>
          <h2>Packs and Portions Place</h2>
          <p className="tagline">
            We serve freshly cooked Nigerian meals that fill you up and keep you coming back for more.
          </p>
          <div className="social-icons">
            <Motion.a href="#" whileHover={{ scale: 1.2, rotate: 5 }}><FacebookIcon /></Motion.a>
            <Motion.a href="#" whileHover={{ scale: 1.2, rotate: -5 }}><InstagramIcon /></Motion.a>
            <Motion.a href="#" whileHover={{ scale: 1.2, rotate: 5 }}><TiktokIcon /></Motion.a>
          </div>
        </Motion.div>

        {/* Right Section: Contact */}
        <Motion.div className="footer-section" variants={itemVariants}>
          <h3>Contact Us</h3>
          <p><span className="label">Address:</span> Ojels mall before Godfrey Okoye Uni. Sec. school, 55 Ekpeluchi Ave, Thinkers Corner, Enugu 400103, Enugu</p>
          <p className="contact-numbers">
            <span className="label">Call:</span> 07035288188 | 07059261778 | 08037302498
          </p>
        </Motion.div>
      </Motion.div>

      <div className="footer-bottom">
        <div className="bottom-content">
          <p>© Packs and Portions Place</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;