import React from 'react';
import logo from './logo.svg';
import './App.css';
import China from './China';
import Classic from './Classic';
import Ikebana from './Ikebana';

function App() {
  return (
    <div>
      <div>
        <China />
      </div>
      <div>
        <Classic />
      </div>
      <div>
        <Ikebana />
      </div>
    </div>
  );
}

export default App;
