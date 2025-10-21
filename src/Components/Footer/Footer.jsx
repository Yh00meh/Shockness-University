import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
    >
      <div className="footer-content" id="contact-info">
        <h2 className="footer-title">Shockness University</h2>
        <p>1877-914-EDUC</p>
        <p>Email: <a href="mailto:Socknesssuccess@edu.com">Socknesssuccess@edu.com</a></p>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Shockness University. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
