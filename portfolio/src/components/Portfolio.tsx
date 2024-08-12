import React from 'react';
import '../styles/Portfolio.css';
// import './styles/App.css';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "FULLSTACK",
      // description: "A brief description of Project One.",
      githubLink: "https://github.com/Rigersaa/FULLSTACK.git"
    },
    {
      title: "FrontEnd",
      // description: "A brief description of Project One.",
      githubLink: "https://github.com/Rigersaa/web_dev.git"
    },

    {
      title: "Wordpress",
      // description: "A brief description of Project One.",
      githubLink: "https://dialpersonal.ch/"
    },

    {
      title: "Wordpress",
      // description: "A brief description of Project One.",
      githubLink: "https://lush.al/"
    },

  
  ];

  return (
    <section id="portfolio">
      <h2 className="portfolio-title">My Projects</h2>
      <div className="portfolio">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <h3>{project.title}</h3>
            {/* <p>{project.description}</p> */}
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              View 
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
