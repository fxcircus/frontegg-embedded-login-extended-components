// HeaderComponent.jsx
import React from 'react';
import logo from './assets/logo.png';
import './Header.css'


const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="header-container">
        <img src={logo} alt="Logo" className="header-logo" /> {/* Update with your logo path */}
        <div className="header-links">
          <a href="http://localhost:3000/about/" target="_blank" rel="noopener noreferrer">About Us</a>
          <a href="http://localhost:3000/support/" target="_blank" rel="noopener noreferrer">Support</a>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
