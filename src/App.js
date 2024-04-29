import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import Home from './components/Home/Home';
import Presentation from './components/Presentation/Presentation';
import Competences from './components/Competences/Competences';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Presentation />
      <Portfolio />
      <Competences />
      <Footer />
    </div>
  );
}

export default App;
