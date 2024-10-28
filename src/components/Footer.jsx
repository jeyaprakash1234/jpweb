// src/components/Footer.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css'; // Make sure to create this CSS file for custom styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} JPWEB. All rights reserved.</p>
       
      </div>
    </footer>
  );
};

export default Footer;
