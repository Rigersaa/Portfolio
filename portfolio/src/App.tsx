import React from 'react';
import LoadingScreen from './components/LoadingScreen';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Services from './components/Services';
import Contact from './components/Contact';
import Header from './components/Header';
import Skills from './components/Skills';

import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <LoadingScreen />
      <Header />
      <Home />
      <Resume />
      <Services />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
