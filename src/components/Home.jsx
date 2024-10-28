// src/components/Home.js
import React from 'react';
import './Home.css';
import profilePic from '../assets/logo 2.png';
import { Link} from 'react-router-dom';

const Home = () => {
  
  
  

  return (
    <div className="hero-container">
    <div className="left-section">
      <p className="intro-text">Hello Everyone.</p>
      <h1 className="name">JPWEB</h1>
      <p className="title">Createing impactful Web, Every time</p>
      <Link to ='/start'> <button className="cta-button" > Get Start
         <span>&#10132;</span>
      </button></Link>
    </div>
    <div className="profile-container">
            <div className="profile-image-wrapper">
                <img src={profilePic} alt="Profile" className="profile-image"/>
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
            </div>
        </div>
    <div className="decorative-elements">
      <div className="circle"></div>
      <div className="circle-small"></div>
      
    </div>
  </div>
  
    
  );
};

export default Home;
