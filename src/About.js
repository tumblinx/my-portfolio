import React, { useState } from "react";
import "./App.css";
/*import "./About.css";*/
import { Link } from "react-router-dom";

function About() {
  /*const [count, setCount] = useState(0);*/
  return (
    <div> 
    <h2 className="overall-header">About</h2>
    <p>
      This is a simple React app that uses React Router to navigate between
      pages. It also uses React Hooks to manage state.
    </p>
    </div>
  );
}
export default About;
