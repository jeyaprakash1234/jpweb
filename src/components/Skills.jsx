import React, { useState } from 'react';
import './Skills.css';
import Menu from './Menu';
import robot from '../assets/logo 1.png';
import { Link } from 'react-router-dom';
import BookingForm from './BookingForm';

const Skills = () => {
  const [hoveredItem, setHoveredItem] = useState(null); // Track the hovered item

  const items = [
    { id: 1, name: 'Static Website Design', price: 4999 },
    { id: 2, name: 'Dynamic Website Design', price: 8999 },
    { id: 3, name: 'E-Commerce Website', price: 15999 },
  ];

  return (
    <div className="skills-container">
      <Menu />
      <div className="robot-circle">
        <img src={robot} alt="robot" className="robot-image" />
      </div>

      <div className="skills-content"></div>

      <br />

      <h1 className='jp'>Website Design Packages</h1>
      <div className="item-list">
        <ul>
          {items.map(item => (
            <li
              key={item.id}
              className="item"
              onMouseEnter={() => setHoveredItem(item.id)}  // Show popup on hover
              onMouseLeave={() => setHoveredItem(null)}      // Hide popup on leave
            >
              <h2>{item.name}</h2>
              <p>Price Starting at: ₹{item.price}</p>
              <Link to="/booking">
                <button className="start-button">Get Started</button>
              </Link>

              {/* Popup message only shown when item is hovered */}
              {hoveredItem === item.id && (
                <div className="popup">
                  <p>Get a professional {item.name} today!</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
