import React from 'react';
import About from './components/about';
import Certifications from './components/certifications';
import Contact from './components/contact';
import Home from './components/home';
import Projects from './components/projects';

function App() {
  return (
    <div>
      <Home />
      <About />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
