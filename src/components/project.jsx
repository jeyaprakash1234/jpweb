

import React,{useState} from 'react';
import './project.css';
import { Link} from 'react-router-dom';



const project = () => {

  
  return (
    <div className="recent-projects-container">
    <h2 className="section-title">Why Choose Us:</h2>
    <p className="section-description">
    Each project showcases unique design and development skills.
    </p>

    <div className="projects-grid">
      

      <div className="project-item">
        <div className="project-image website-design"></div>
        <ul className="key-points">
                {[' 1) Comprehensive Service Offering', '2) Customized Solutions', '3)Ongoing Support and Collaboration', ' 4)Develop Your Business Together'].map((point, index) => (
                    <li key={index} style={{ animationDelay: `${index * 0.2}s` }}>{point}</li>
                ))}
            </ul>
       
    
      </div>

      
    </div>
    <Link to='/price'> <button className="next-button">Next..<span>&#10132;</span></button> </Link>
  </div>
  );
};

export default project;
