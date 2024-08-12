import React, { useEffect } from 'react';
import '../styles/Resume.css';

const Resume: React.FC = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#resume') {
      const element = document.querySelector(hash);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.pageYOffset - 80, // Adjust the 80px to match your header height
          behavior: 'smooth',
        });
      }
    }
  }, []);

  return (
    <section id="resume">
      <h2 className="resume-title">My Resume</h2>
      <div className="resume-content">
        <div className="experience">
          <div className="section-header">
            <h3>My Experience</h3>
          </div>
          <div className="resume-item">
            <p className="item-date">07/2023-10/2023</p>
            <h4>Software Tester</h4>
            <p>Trimark BPO</p>
          </div>
          <div className="resume-item">
            <p className="item-date">04/2023-07/2023</p>
            <h4>Web Designer</h4>
            <p>KemiNet</p>
          </div>
          <div className="resume-item">
            <p className="item-date">05/2023-06/2023</p>
            <h4>Cloud Technology</h4>
            <p>Internship-Vodafone</p>
          </div>
        </div>
        <div className="education">
          <div className="section-header">
            <h3>My Education</h3>
          </div>
          <div className="resume-item">
            <p className="item-date">2018-2021</p>
            <h4>High School</h4>
            <p>Mehmet Akif Collage</p>
          </div>
          <div className="resume-item">
            <p className="item-date">2021-2024</p>
            <h4>Bachelor in Software Engineering</h4>
            <p>Epoka University</p>
          </div>
          <div className="resume-item">
            <p className="item-date">-</p>
            <h4>Master</h4>
            <p>-</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
