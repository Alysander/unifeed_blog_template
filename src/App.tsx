import React from 'react';
import './App.css';
import { LogoBar } from './components/LogoBar';
import hamburgerMenu from './assets/HamburgerMenu.svg';
import { Copyright } from './components/Copyright';

function App() {
  return (
    <div className="container px-2 py-4 ">
      <LogoBar>
        <img src={hamburgerMenu} alt="Menu" />
      </LogoBar>
      <Copyright />
    </div>
  );
}

export default App;
