// src/components/ViewFootball.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const matchData = {
  tntsports: {
    title: 'TNT SPORTS',
    description: 'El producto',
    iframe: '<iframe class="embed-responsive-item" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="" src="https://la10hd.com/vivo/canal.php?stream=tntsports" scrolling="no"></iframe>',
  },
  espnpremium: {
    title: 'ESPN PREMIUM',
    description: 'GRATAROLA',
    iframe: '<iframe class="embed-responsive-item" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="" src="https://la10hd.com/vivo/canal.php?stream=espnpremium" scrolling="no"></iframe>',
  },
  // Agrega más partidos aquí...
  //
};

const ViewFootball = () => {
  const { matchId } = useParams();
  const navigate = useNavigate(); // Hook para la navegación
  const match = matchData[matchId];

  if (!match) {
    return <h2>Partido no encontrado</h2>;
  }

  return (
    <div className="view-football">
      <h1>{match.title}</h1>
      <p>{match.description}</p>
      <div dangerouslySetInnerHTML={{ __html: match.iframe }} />

      {/* Botón para volver a la página principal */}
      <button onClick={() => navigate('/')} className="back-button">
        Volver a la página principal
      </button>
    </div>
  );
};

export default ViewFootball;
