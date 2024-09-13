// LanguageSelector.js
import React, { useState } from 'react';

const LanguageSelector = () => {
  const [selectedLocale, setSelectedLocale] = useState(localStorage.getItem('frontegg-language') || 'en');

  const handleLocaleChange = (event) => {
    const locale = event.target.value;
    setSelectedLocale(locale);
    localStorage.setItem('frontegg-language', locale);
    console.log(`Locale updated to "${locale}" and localStorage updated`);
    window.location.reload(); // Refresh the page
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <select
        value={selectedLocale}
        onChange={handleLocaleChange}
        style={{
          backgroundColor: '#F9FAFC',
          color: 'black',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="de">German</option>
        <option value="fr">French</option>
        <option value="it">Italian</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
