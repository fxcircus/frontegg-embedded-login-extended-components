import React, { useState, useEffect } from 'react';
import logo from './assets/logo.png';

const CustomLoaderComponent = () => {
  const [dots, setDots] = useState('.');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + '.' : '.'));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="custom-loader">
      <img src={logo} alt="Coinme Logo" className="loader-logo" />
      <p>My Cool Loader</p>
      <div className="dots">{dots}</div>
    </div>
  );
};

export default CustomLoaderComponent;
