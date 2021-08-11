import React from 'react';
import './App.css';
import hamburgerMenu from './assets/HamburgerMenu.svg';

import { LogoBar } from './components/LogoBar';
import { Footer } from './components/Footer';
import { ArticleList } from './components/ArticleList';

const App = () => {
  return (
    <div className="container px-2 mx-auto md:px-4">
      <LogoBar>
        <img src={hamburgerMenu} alt="Menu" />
      </LogoBar>
      <ArticleList />
      <Footer />
    </div>
  );
}

export default App;
