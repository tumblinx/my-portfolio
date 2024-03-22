import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Drew Tumblin's Portfolio</h1>
      </header>
      <nav>
        <a href="#home">Home</a> | <a href="#about">About</a> | <a href="#projects">Projects</a>
      </nav>
      <section id="home">
        <h2>Welcome</h2>
        <p>Welcome to my personal portfolio website, showcasing my projects and skills.</p>
      </section>
      <section id="about">
        <h2>About Me</h2>
        <p>Detail your professional journey, skills, and anything else you'd like to share here.</p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <p>Showcase your React-based projects or any other work here.</p>
      </section>
    </div>
  );
}

export default App;

