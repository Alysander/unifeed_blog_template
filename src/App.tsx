import React from 'react';
import './App.css';
import { LogoBar } from './components/LogoBar';
import hamburgerMenu from './assets/HamburgerMenu.svg';
import { MainArticle } from './components/MainArticle';
import { Article } from './components/Article';
import avatar1 from './assets/Avatar1.png';
import photo1 from './assets/Article1.png';
import avatar2 from './assets/Avatar2.png';
import photo2 from './assets/Article2.png';
import avatar3 from './assets/Avatar3.png';
import photo3 from './assets/Article3.png';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div className="container px-2 py-4 ">
      <LogoBar>
        <img src={hamburgerMenu} alt="Menu" />
      </LogoBar>
      <MainArticle />
      <Article
        heading="7 Tips for Organic Traffic"
        author="Spencer David"
        authorJob="SEO Specialist"
        authorAvatarPath={avatar1}
        photoPath={photo1}
        description="From SEO to integrating with Paid Advertising, this article covers it all."
        descriptionAlt="Google search screenshot"
      />
      <Article
        heading="How To Start Your Own Business"
        author="Sara Frey"
        authorJob="Business Leader"
        authorAvatarPath={avatar2}
        photoPath={photo2}
        description="Starting your own business in 2021 has never been easier"
        descriptionAlt="A laptop with a PowerPoint presentation open"
      />
      <Article
        heading="5 Tips for Better Branding"
        author="David Suns"
        authorJob="Brand Manager"
        authorAvatarPath={avatar3}
        photoPath={photo3}
        description="From SEO to integrating with Paid Advertising, this article covers it all"
        descriptionAlt="A table of assorted printed merchandise"
      />
      <Footer />
    </div>
  );
}

export default App;
