import React from 'react';
import './App.css';
import linkedin from './assets/linkedin.png';
import github from './assets/github.png';

function Home() {
  return (
    <div>
      <h3 className="intro">Hey! I'm Drew</h3>
      <p> Have fun! </p>
      <div className="logo-display">
      <a href = "https://www.linkedin.com/in/drewtumblin/"><img src = {linkedin} className="logo-links"></img></a>
      <a href = "https://github.com/tumblinx/"><img src = {github} className="logo-links"></img></a>
      </div>
    </div>
  );
}

export default Home;

