// src/components/Footer.jsx
import React from 'react';
import './Footer.css'; // Asegúrate de crear este archivo CSS

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Fútbol en Vivo. Allá le reservan los derechos.</p>
    </footer>
  );
};

export default Footer;
