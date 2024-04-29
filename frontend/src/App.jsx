import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Projects from './Projects';
import About from './About';
import Home from './Home';
import Contact from './Contact';
/*import AccessibilityPanel from "open-web-ay"; Testing with Accessibility features*/

function App() {
  return (
    <Router>
      <div className="background">
        <div className="App">
          <header> 
            <h1 className="header-text">
              Drew Tumblin's Portfolio</h1></header>  
            <div className="navbar">
            <Link className="navlink" activeClassName="navlink-active" to="/my-portfolio">Home</Link>
            <Link className="navlink" activeClassName="navlink-active" to="/projects">Projects</Link>
            <Link className="navlink" activeClassName="navlink-active" to="/about">About</Link>
            <Link className="navlink" activeClassName="navlink-active" to="/contact">Contact</Link>
          </div> 
          <Routes>
            <Route path="/my-portfolio" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes> 
        </div>   
      <footer>
        <div className="footer">
          <p className="footer-text"> © 2024 Drew Tumblin. All Rights Reserved.</p>
        </div>
      </footer>
      </div>
    </Router>
  );
}

export default App;

