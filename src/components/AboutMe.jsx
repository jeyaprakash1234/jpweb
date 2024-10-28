
import React, {  useState } from 'react';
import './AboutMe.css';
import profilePic from '../assets/JP.png';
import resumePDF from '../assets/JP resume.pdf';
import { FaVolumeUp , FaStop } from 'react-icons/fa';
import Menu from './Menu';

const AboutMe = () => {
  
  const [isReading, setIsReading] = useState(false);

    const readParagraph = () => {
      if (isReading) return; // Avoid starting multiple instances
  
      const paragraph = "Hello! Welcome to JP WEB, a passionate Web  Developer with a deep interest in creating interactive and responsive web  applications. You enjoy learning new technologies and continuously improving Your  company. I have honed in various programming languages and frameworks, My journey as a developer has been driven by a desire to create impactful digital experiences,   by delivering high-quality applications. When I'm not coding, I love exploring new technologies, reading about the latest trends in web development. ";
      const utterance = new SpeechSynthesisUtterance(paragraph);
  
      utterance.onstart = () => setIsReading(true);
      utterance.onend = () => setIsReading(false);
  
      speechSynthesis.speak(utterance);
    };
  
    const stopReading = () => {
      speechSynthesis.cancel();
      setIsReading(false);
    };
  

  return (
    <div className="about-container">
        <Menu/>
    <div className="about-header">
     
    </div>
    <div className="about-main">
    <div className="profile-image-container">
      <img 
        src={profilePic}// Replace with your image URL
        alt="Profile" 
        className="profile-image"
      />
      <div className="profile-circles">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
      </div>
    </div>
      
      <div className="about-content">
        
        
        <h1>About Me</h1>
        <div className="button-container">
        {!isReading ? (
          <button className="read-paragraph-button" onClick={readParagraph}>
            <FaVolumeUp className="speaker-icon" />
         
          </button>
        ) : (
          <button className="stop-reading-button" onClick={stopReading}>
            <FaStop className="stop-icon" />
       
          </button>
        )}
      </div>
       
           <p>Hello! I'm Jeyaprakash, a passionate Web  Developer with a deep interest in creating interactive and responsive web  applications. I enjoy learning new technologies and continuously improving my skills in web development. Over the past few years, I have honed my skills in various programming languages and frameworks, including HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, JWT, and more. My journey as a developer has been driven by a desire to create impactful digital experiences. My goal is to bridge the gap between user needs and technology by delivering high-quality applications. When I'm not coding, I love exploring new technologies, reading about the latest trends in web and app development, and participating in coding challenges to sharpen my problem-solving skills. I'm always open to collaborating on exciting projects and learning from others in the tech community.</p>
    
      
        <div className="education-section">
          <h3 className='education-button'>EDUCATION</h3>
          <div className="education-details">
            <div className="education-item">
              <span className="education-year">2021 - 2024</span>
              <div>
                <span className="institution">GTN Arts College</span>
                <span className="course">B.COM</span>
              </div>
            </div>
           
            <div className="education-item">
              <span className="education-year">2023 - 2024</span>
              <div>
                <span className="institution">GUVI GEEK NETWORK PRIVATE LIMITED</span>
                <span className="course">Full Stack Development</span>
              </div>
            </div>
            <div className="resume-section">
                 <h3>My Resume</h3>
                <div className="resume-buttons">
                    <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="btn view-btn">
                        View Resume
                   </a>
                   <a href={resumePDF} download className="btn download-btn">
                         Download Resume
                  </a>
               </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AboutMe;
