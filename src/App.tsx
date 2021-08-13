import './App.css';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ArticleList } from './components/ArticleList';

const App = () => {

  return (
    <div className="container px-2 mx-auto md:px-4">
      <Header />
      <ArticleList />
      <Footer />
    </div>
  );
}

export default App;
