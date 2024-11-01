// TeamPage.js
import React from 'react';
import './Collab.css';

const teamMembers = [
  {
    name: "Alice Smith",
    position: "Lead Researcher",
    bio: "Expert in machine learning and AI with over 10 years of experience.",
    image: "https://via.placeholder.com/150", // Replace with actual image URLs
  },
  {
    name: "Bob Johnson",
    position: "Data Scientist",
    bio: "Specializes in data analytics and visualization.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Charlie Brown",
    position: "Software Engineer",
    bio: "Focuses on developing scalable AI applications.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Dana Lee",
    position: "AI Research Assistant",
    bio: "Passionate about AI ethics and responsible AI development.",
    image: "https://via.placeholder.com/150",
  },
  // Add more team members as needed
];

const collaborations = [
  {
    title: "Global AI Initiative",
    description: "Collaborating with leading institutions to advance AI research.",
    link: "https://example.com/collaboration-link",
  },
  {
    title: "AI for Good",
    description: "Partnership focused on using AI for social impact.",
    link: "https://example.com/collaboration-link",
  },
  // Add more collaborations as needed
];

const TeamPage = () => (
  <div className="team-page">
    

    <section className="collaboration-section">
      <h2>Collaborations</h2>
      <div className="collab-grid">
        {collaborations.map((collab, index) => (
          <div key={index} className="collab-card animate-fade-in">
            <h3>{collab.title}</h3>
            <p>{collab.description}</p>
            <a href={collab.link} target="_blank" rel="noopener noreferrer" className="cta-button">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default TeamPage;
