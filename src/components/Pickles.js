import React from 'react';
import { Link } from 'react-router-dom';

function Pickles() {
  return (
    <div>
      <h1>Pickles</h1>
      <p>This is a delicious snack!</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
}

export default Pickles;
