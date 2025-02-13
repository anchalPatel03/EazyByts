import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';  // Import AboutMe component
import Projects from './components/Projects';  // Import Projects component
import Contact from './components/Contact';  // Import Contact component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi, I'm Anchal</h1>
        <p>I'm a passionate developer and aspiring software engineer!</p>
      </header>

      {/* Home Section */}
      <section>
        <h2>Welcome to My Portfolio</h2>
        <p>This is a portfolio website built using React!</p>
      </section>

      {/* About Me Section */}
      <AboutMe />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

export default App;
