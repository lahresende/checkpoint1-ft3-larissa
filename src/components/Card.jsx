import React from 'react';

function Card({ cor }) {
  return (
    <div className="color-card" style={{ backgroundColor: cor.codigo }}>
      <h6>{cor.nome}</h6>
      <h3>{cor.codigo}</h3>
    </div>
  );
}

export default Card;
