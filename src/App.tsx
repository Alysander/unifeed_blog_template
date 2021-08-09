import React from 'react';
import './App.css';
import { LogoBar } from './components/LogoBar';
import { hamburgerMenu } from './assets/HamburgerMenu.svg';

function App() {
  return (
    <div className="container px-2 py-4 ">
      <LogoBar>
        <img src={hamburgerMenu} alt="Menu" />
      </LogoBar>
    </div>
  );
}

export default App;
