import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Projects from './Projects';
import About from './About';
import Home from './Home';
import infinity from './assets/infinity.png';

function App() {
  return (
    <Router>
      <div>
        <div className="App">
          <header className="App-header"> 
            <h1 className="header-text">
              Drew Tumblin's Portfolio</h1></header> 
            <div className="navbar">
            <Link className="navlink" to="/my-portfolio">Home</Link>
            <Link className="navlink" to="/projects">Projects</Link>
            <Link className="navlink" to="/about">About</Link>
          </div> 
          <Routes>
            <Route path="/my-portfolio" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

