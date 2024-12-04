// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Fútbol en Vivo</h1>
        <button className="navbar-toggle" onClick={toggleMenu}>
          &#9776;
        </button>
        <nav className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            {/* Agrega otros enlaces si es necesario */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
