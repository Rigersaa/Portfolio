import React from 'react';
import '../styles/Skills.css';
// import './styles/App.css';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
 <h2 className="skills-title">My Skills</h2>
      <p className='skill-paragraph'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</p>
      <div className="skills-content" >
        <div className="skill">
          <h3>Figma</h3>
        </div>
        <div className="skill">
          <h3>React</h3>
        </div>
        <div className="skill">
          <h3>WordPress</h3>
        </div>
        <div className="skill">
          <h3>Next.js</h3>
        </div>
        <div className="skill">
          <h3>MongoDb</h3>
        </div>
        <div className="skill">
          <h3>Firebase</h3>
        </div>
        <div className="skill">
          <h3>Js/Tsx</h3>
        </div>
        <div className="skill">
          <h3>SQL</h3>
        </div>
        <div className="skill">
          <h3>Firebase</h3>
        </div>
        <div className="skill">
          <h3>Digital Marketing</h3>
        </div>
      </div>
    </section>
  );
};

export default Skills;
