import React from 'react';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="content">
          <h1>
            <span className="inline-text">I am</span> 
            <span className="inline-name"> Rigersa</span>
          </h1>
          <h2>Web Developer + UX Designer</h2>
          <p>
            I break down complex user experience problems to create integrity-focused solutions that connect billions of people.
          </p>
          <a
            href="/Rigersa%20Bicaku%20CV.pdf" 
            download="Rigersa_Bicaku_CV.pdf" 
            className="download-btn"
          >
            Download CV
          </a>
        </div>
        <div className="profile-img">
          {/* <img src={profileImage} alt="Rigersa Biçaku" /> */}
        </div>
      </div>
    </section>
  );
};

export default Home;
