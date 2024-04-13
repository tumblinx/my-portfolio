/*
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Projects from './Projects';
import About from './About';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
  <div>
    <Router>
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/Projects">Projects</Link>
      <Link to="/About">About</Link>
    </div>
    </Router>
    <div className="App">
      <header className="App-header">
        <h1>Drew Tumblin's Portfolio</h1>
      </header>
      <nav>
        <a href="#home">Home</a> | <a href="#about">About</a> | <a href="#projects">Projects</a>
      </nav>
      <section id="home">
        <h2>Welcome</h2>
        <p>Welcome to my personal portfolio website, this is a small project that will eventually showcase my projects and skills.</p>
      </section>
      <section id="about">
        <h2>About Me</h2>
        <p>This will eventually detail my journey throughout life.</p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <p>Showcase your React-based projects or any other work here.</p>
      </section>
    </div>
  </div>
  );
}

export default App;
*/
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Projects from './Projects';
import About from './About';
import Home from './Home';

function App() {
  return (
    <Router>
      <div>
        <div className="App">
          <header className="App-header">
            <h1>Drew Tumblin's Portfolio</h1>
          </header>
          <div className="navbar">
            <Link className="navlink" to="/">Home</Link>
            <Link className="navlink" to="/projects">Projects</Link>
            <Link className="navlink" to="/about">About</Link>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

