import React from 'react';
import Card from './Card';

function CardList({ cores }) {
  return (
    <div className="color-cards">
      {cores.map((cor, index) => (
        <Card key={index} cor={cor} />
      ))}
    </div>
  );
}

export default CardList;
