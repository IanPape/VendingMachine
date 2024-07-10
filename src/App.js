import React from 'react';
import { BrowserRouter,Routes, Route, } from 'react-router-dom';
import VendingMachine from './components/VendingMachine';
import Doritos from './components/Doritos';
import Tamales from './components/Tamales';
import Pickles from './components/Pickles';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/doritos" element={<Doritos />} />
        <Route path="/tamales" element={<Tamales />} />
        <Route path="/pickles" element={<Pickles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
