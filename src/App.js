import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Presentation from './components/Presentation/Presentation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Presentation />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
