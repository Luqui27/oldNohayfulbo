// src/components/Card.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, description, link }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={link}>
        <button>Ver Partido</button>
      </Link>
    </div>
  );
};

export default Card;
