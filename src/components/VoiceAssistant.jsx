import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import {  FaRobot } from 'react-icons/fa';
import './VoiceAssistant.css'
 import Swal from 'sweetalert2';
 import resumePDF from '../assets/jayaprakash 2.pdf';

const VoiceAssistant = () => {
    
  const [listening, setListening] = useState(false);
  const navigate = useNavigate();

  const commands = [
    
    {
      command: ['go to *', 'open *', 'navigate to *'],
      callback: (page) => navigateToPage(page),
    },
    {
      command: 'stop voice assist',
      callback: () => stopListening(),
    },
    
  ];
  


  const {
    transcript,
    resetTranscript,
    listening: isListening,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ commands });

  useEffect(() => {
    if (listening) {
      SpeechRecognition.startListening({ continuous: true });
      greetUser();
    } else {
      SpeechRecognition.stopListening();
      resetTranscript();
    }
    // eslint-disable-next-line
  }, [listening]);
  


  const greetUser = () => {
    const utterance = new SpeechSynthesisUtterance(
      'Hey,  I am JP. What can I assist you with?  '
    );
    speechSynthesis.speak(utterance);
  };

  const navigateToPage = (page) => {
    const pageMap = {
      home: '/',
      about: '/about',
      price: '/price',
      query: '/query',
      start :'/start',
     
    };

    const path = pageMap[page.toLowerCase()];
    if (path) {
      navigate(path);
      const utterance = new SpeechSynthesisUtterance(`Navigating to ${page}`);
      speechSynthesis.speak(utterance);
    } else {
      const utterance = new SpeechSynthesisUtterance(`Sorry, I didn't understand ${page}`);
      speechSynthesis.speak(utterance);
    }
  };

  const startListening = () => {

    setListening(true);
    Swal.fire({
      title: "command was (Go ,Open,Navigate to which page you like)",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
    
  };

  const stopListening = () => {
    setListening(false);
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Your browser does not support speech recognition.</span>;
  }

  
  
  return (
    <div className="voice-assistant-container">
    <button
      className={`voice-assistant-button ${listening ? 'active' : ''}`}
      onClick={listening ? stopListening : startListening}
    >
      <FaRobot className="robot-icon" />
    </button>
  </div>
  )
}

export default VoiceAssistant