// src/App.js
import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Home from './components/Home';
//import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import './App.css';
import VoiceAssistant from './components/VoiceAssistant';
import Footer from './components/Footer';

import Social from './components/Social';
import Menu from './components/Menu';
//import VoiceSearch from './components/VoiceSearch';
import Project from './components/project';
import BookingForm from './components/BookingForm';

function App() {

 
  
  return (
    <Router>
      <VoiceAssistant/>
    
      
    
      <Social/>
      <Menu/>
      <Footer/>
      
        
        {/* <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/contact">Contact Me</Link></li>
          </ul>
        </nav> */}
      
        <Routes>
        
          <Route path="/" element={<Home />} />
        
          <Route path="/price" element={<Skills />} />
          <Route path="/query" element={<ContactMe />} />
          <Route path="/start" element={<Project />} />
          <Route path='/booking' element={<BookingForm/>} />
       

        </Routes>
        
    
    </Router>
    
  );


}

export default App;
