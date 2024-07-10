import React from 'react';
import { Link } from 'react-router-dom';

function VendingMachine() {
  return (
    <div>
      <h1>Vending Machine</h1>
      <ul>
        <li><Link to="/Doritos">Doritos</Link></li>
        <li><Link to="/Tamales">Tamales</Link></li>
        <li><Link to="/Pickles">Pickles</Link></li>
      </ul>
    </div>
  );
}

export default VendingMachine;
