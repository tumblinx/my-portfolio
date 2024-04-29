import React from 'react';
import './App.css';
import linkedin from './assets/linkedin.png';
import github from './assets/github.png';

function Home() {
  return (
    <div className="content-box">
      <h2 >Hey! I'm Drew</h2>
      <p> Have fun! </p>
      <div className="logo-display">
      <a href = "https://www.linkedin.com/in/drewtumblin/" target="_blank" rel="noopener noreferrer"><img src = {linkedin} className="logo-links" alt="linkedin-logo"></img></a>
      <a href = "https://github.com/tumblinx/" target= "_blank" rel="noopener noreferrer"><img src = {github} className="logo-links" alt="github-logo"></img></a>
      </div>
    </div>
  );
}

export default Home;

