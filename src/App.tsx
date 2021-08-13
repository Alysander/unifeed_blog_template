import React, { useState } from 'react';
import './App.css';
import hamburgerMenu from './assets/HamburgerMenu.svg';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ArticleList } from './components/ArticleList';

const App = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="container px-2 mx-auto md:px-4">
      <Header>
        <button>
          <img src={hamburgerMenu} alt="Menu" onClick={() => { setMobileMenuOpen(!mobileMenuOpen) }} />
        </button>
      </Header>
      <ArticleList />
      <Footer />
    </div>
  );
}

export default App;
