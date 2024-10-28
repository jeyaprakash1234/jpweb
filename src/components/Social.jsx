// src/components/Footer.js
import React from 'react';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Social.css'; // Make sure to create this CSS file for custom styling

const Footer = () => {
  return (
    <div className="social">
     
        <div className="social-icons">
          <a href="https://github.com/jeyaprakash1234" target="_blank" rel="noopener noreferrer">
          <FaGithub />

          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/jeyaprakash-t-056786272/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
   
    </div>
  );
};

export default Footer;
