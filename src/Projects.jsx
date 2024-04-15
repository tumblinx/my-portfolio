import React from 'react';
import "./Projects.css";

const Projects = () => {
  return ( 
    <div className="projects">
      <div className="content-box">
        <h3>Senior Project</h3>
        <p>Setup a Windows 2019 Server with HyperV to allow me to make multiple servers to manage a group of 9 computers in my classroom. I set up group policies to limit Youtube access in the classroom, as some students had abused the system.</p>
      </div>
    <div className="content-box">
        <h3>Dance Dance Convulation</h3>
        <p>This project is a Machine Learning (ML) beatmap generator for Dance Dance Revolution (DDR). This project allowed me to gain experience in python, as well as documenting code. It currently uses a somewhat dated ML model, which is why we are planning to redo this project with a more modern model such as a Large Language Model (LLM) or a Generative Adversarial Network (GAN).</p>
      </div>
      <div className="content-box">
        <h3>Boop Game</h3>
        <p>Developed a strategic board game, "Boop," where players manipulate 'kitten' and 'cat' pieces on a 6x6 grid to align three 'cats'. The project showcases advanced programming skills in c++, featuring inherited and custom class functionalities.</p>
      </div>
      <div className="content-box">
        <h3>Linux</h3>
        <p>I've had a lot of fun tinkering with linux and currently have Gentoo running on my desktop PC with a custom kernel config. I also have a custom Fedora Sway config, running on a Apple Silicon M2 Macbook Pro. I eventually would like to contribute to the Asahi Linux project, after gaining some fundamental knowledge on Linux Development.</p>
      </div>
    </div>
  );
}
export default Projects;
