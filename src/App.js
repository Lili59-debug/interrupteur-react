import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <header>
        <img></img>
        <h1><FontAwesomeIcon icon={faPowerOff} /> Interrupteur</h1>
        <Button />
      </header>
    </div>
  );
}

export default App;
