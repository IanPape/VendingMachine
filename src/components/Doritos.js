import React from 'react';
import { Link } from 'react-router-dom';

function Doritos() {
  return (
    <div>
      <h1>Doritos</h1>
      <p>This is a delicious snack!</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
}

export default Doritos;
