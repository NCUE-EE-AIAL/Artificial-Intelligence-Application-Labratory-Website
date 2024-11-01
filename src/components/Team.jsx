import React from 'react';
import './Team.css';

const Team = () => {
  const teamData = [
    {
      name: "Wen-Ren-Yang",
      role: "Chief",
      image: "https://i.ibb.co/cvs0f7B/84fdf06c1b7c.jpg",
      linkedIn: "https://www.linkedin.com/in/wry87c?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "JohnSon",
      role: "Member",
      image: "https://i.ibb.co/bKjLGVP/9de065c3eb2d.jpg",
      linkedIn: "",
    },
    {
      name: "Erik",
      role: "Member",
      image: "https://i.ibb.co/vDSchw3/877fbb0926fc.jpg",
      linkedIn: "",
    },
    {
      name: "Gorden",
      role: "Member",
      image: "https://i.ibb.co/CJhPbd1/6be45bfd65be.jpg",
      linkedIn: "",
    },
    {
      name: "Bran",
      role: "Member",
      image: "https://i.ibb.co/YcZL7mc/8b6c728ecd1a.jpg",
      linkedIn: "",
    },
  ];

  return (
    <div id='team' className="team-section">
      <div className="container">
        <h2>Our Team</h2>
        <div className="team-grid">
          {teamData.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image} alt={member.name} className="team-image" />
              <h3>{member.name}</h3>
              <div>
                <a 
                  href={member.linkedIn || "#"}
                  className="anchortag"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {member.role}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
