import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Projects from './Projects';
import About from './About';
import Home from './Home';
/*import AccessibilityPanel from "open-web-ay";*/

function App() {
  return (
    <Router>
      <div className="background">
        <div className="App">
          <header> 
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
      <footer>
        <div className="footer">
          <p className="footer-text"> © 2024 Drew Tumblin</p>
        </div>
      </footer>
      </div>
    </Router>
  );
}

export default App;

