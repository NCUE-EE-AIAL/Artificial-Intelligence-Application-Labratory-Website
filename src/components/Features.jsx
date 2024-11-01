import React from 'react';
import './Features.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBullhorn, faUsers, faRobot } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  const featuresData = [
    {
      title: "AI Project Showcase",
      description: "Demo Videos & Results",
      bgColor: "#a3d2fc",
      buttonText: "Learn More",
      icon: faMagnifyingGlass,
    },
    {
      title: "Publications and Resources",
      description: "Research papers",
      bgColor: "#88e5c3",
      buttonText: "Learn More",
      icon: faBullhorn,
    },
    {
      title: "Team and Collaborations",
      description: "Introduction to our team!",
      bgColor: "#d1d1d1",
      buttonText: "Learn More",
      icon: faUsers,
    },
    {
      title: "Interactive AI Demo",
      description: "Try our AI demos!",
      bgColor: "#fa8072",
      buttonText: "Learn More",
      icon: faRobot,
    },
  ];

  return (
    <section className="features-section">
      <div id='features' className="container">
        <h2>Our Key Features</h2>
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="feature-item"
              style={{ backgroundColor: feature.bgColor }}
            >
              <div className="feature-icon">
                <FontAwesomeIcon icon={feature.icon} size="2x" />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <button className="feature-button">{feature.buttonText}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
