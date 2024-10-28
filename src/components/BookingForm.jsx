import React, { useState } from 'react';
import './BookingForm.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BookingForm = ({ onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [serviceType, setServiceType] = useState('static');
  const [description, setDescription] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (termsAccepted) {
      setLoading(true);

      const bookingData = {
        firstName,
        lastName,
        phoneNumber,
        serviceType,
        description,
        termsAccepted
      };

      try {
        const response = await axios.post('https://jpweb-backend.onrender.com/api/bookings', bookingData);
        alert('Form submitted successfully!');

        // Reset form fields
        setFirstName('');
        setLastName('');
        setPhoneNumber('');
        setServiceType('static');
        setDescription('');
        setTermsAccepted(false);
      } catch (error) {
        alert('Error submitting form. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please accept the terms and conditions.');
    }
  };

  const handleTermsClick = () => {
    setShowTerms(true);
  };

  const handleCloseTerms = () => {
    setShowTerms(false);
  };

  return (
    <div className="booking-form-container">
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input 
            type="text" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input 
            type="text" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input 
            type="tel" 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Service Type:</label>
          <select 
            value={serviceType} 
            onChange={(e) => setServiceType(e.target.value)} 
            required
          >
            <option value="static">Static</option>
            <option value="dismcyc">Dismcyc</option>
            <option value="e-commerce">E-Commerce</option>
          </select>
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group terms-group">
          <input 
            type="checkbox" 
            checked={termsAccepted} 
            onChange={(e) => setTermsAccepted(e.target.checked)} 
            required 
          />
          <label onClick={handleTermsClick} className="terms-label">I accept the <span>Terms and Conditions</span></label>
        </div>

        <button 
          type="submit" 
          className={`submit-button ${loading ? 'loading' : ''}`}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Submit'}
        </button>
        <Link to='/price'><button type="button" className='button1'>Back To the price</button></Link> 
      </form>

      {/* Terms and Conditions Modal */}
      {showTerms && (
        <div className="terms-modal">
          <div className="terms-modal-content">
            <h3>Terms and Conditions</h3>
            <p>1. You agree to abide by our terms of service while using our platform.</p>
            <p>2. Any form of misuse or misconduct may result in suspension or termination.</p>
            <p>3. All data collected is used for booking purposes and will not be shared with third parties.</p>
            <button onClick={handleCloseTerms} className="close-modal-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
