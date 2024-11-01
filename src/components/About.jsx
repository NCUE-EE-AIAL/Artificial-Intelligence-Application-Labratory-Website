import React from 'react';
import './About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2>About Our AI Lab</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Welcome to our dynamic lab, where innovation and expertise converge. We are a passionate team of students specializing in Artificial Intelligence, Machine Learning, and Electrical Engineering. United by our enthusiasm for technology, we tackle groundbreaking projects that redefine the possibilities of our fields. Guided by our experienced supervisor, whose invaluable insights and support help shape our research and projects, and with the mentorship of our dedicated professors, we are well-equipped to explore new technological frontiers. Our mission is to delve deeply into emerging technologies, transform ideas into tangible solutions, and continuously push the boundaries of what's achievable.
            </p>
          </div>
          <div className="about-image">
            <img src="http://fast.clickbooq.com/e0956e-332/Autodesk_AI-Lab_030b-lg.jpg" alt='labimage'/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
