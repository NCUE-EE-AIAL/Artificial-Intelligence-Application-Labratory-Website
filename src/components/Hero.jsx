import React from 'react';
import './Hero.css'; // Ensure you create a CSS file for styling

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Welcome to Our AI Lab</h1>
        <p>Innovating the Future of Artificial Intelligence</p>
        <a href="#about" className="btn">Read More</a> {/* Simple anchor link */}{/* Link to "Read More" section */}
      </div>
    </div>
  );
};

export default Hero;
