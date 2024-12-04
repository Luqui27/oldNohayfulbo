// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Card from './components/Card';
import ViewFootball from './components/ViewFootball';  // Nuevo componente para mostrar el iframe
import './App.css';

const App = () => {
  const cards = [
    { id: 1, title: 'MLS', description: 'Vamo Messi', link: '/view/mls' },
    { id: 2, title: 'TNT SPORTS', description: 'El producto', link: '/view/tntsports' },
    { id: 3, title: 'ESPN PREMIUM', description: 'Que lindo que es el fulbo', link: '/view/espnpremium' },
    { id: 4, title: 'Disney+', description: 'Guarda que te compra disney', link: '/view/disney' },
    //{ id: 5, title: 'Partido 5', description: 'Descripción del Partido 5', link: '/view/partido5' },
    //{ id: 6, title: 'Partido 6', description: 'Descripción del Partido 6', link: '/view/partido6' },
  ];

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Welcome />
            <div className="card-container">
              {cards.map((card) => (
                <Card key={card.id} title={card.title} description={card.description} link={card.link} />
              ))}
            </div>
          </>
        } />
        <Route path="/view/:matchId" element={<ViewFootball />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
