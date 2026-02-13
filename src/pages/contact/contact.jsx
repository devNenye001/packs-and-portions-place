import React from "react";
import { motion as Motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="contact-section">
      <Motion.div
        className="contact-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h1>Contact Us</h1>
      </Motion.div>

      <Motion.div
        className="contact-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Left: Contact Details */}
        <Motion.div className="contact-info" variants={itemVariants}>
          <h2>Get In Touch!</h2>
          <p className="contact-subtext">
            Reach out to us through any of our channels and we'll respond
            promptly.
          </p>

          <div className="info-items">
            <div className="info-item">
              <div className="icon-box">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3>Head Office</h3>
                <p>
                  Ojels mall before Godfrey Okoye Uni. Sec. school, 55 Ekpeluchi
                  Ave, Thinkers Corner, Enugu 400103, Enugu
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box">
                <FaEnvelope />
              </div>
              <div>
                <h3>Email</h3>
                <p>packs.portionsplace@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box">
                <FaPhoneAlt />
              </div>
              <div>
                <h3>Phone Number</h3>
                <p>07035288188 | 07059261778 | 08037302498</p>
              </div>
            </div>
          </div>
        </Motion.div>

        {/* Right: Embedded Google Map */}
        <Motion.div
          className="contact-map"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.389527382567!2d7.5284676!3d6.4722439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a51951ba59dd%3A0x2a38c4e7e18c6d4e!2sPacks%20%26%20Portions%20Place(%20Restaurant%20%26%20Bar)!5e0!3m2!1sen!2sng!4v1770640465499!5m2!1sen!2sng"
            width="600"
            height="450"
            style={{border:"0px"}} 
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default Contact;
