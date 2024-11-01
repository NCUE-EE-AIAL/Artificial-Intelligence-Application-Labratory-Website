import React, { useState } from 'react';
import './Testimonials.css'; // Ensure to update your CSS styles accordingly

const Testimonials = () => {
  const testimonialsData = [
    {
      img: "https://i.ibb.co/KXTb64y/c03d935ff030.jpg",
      text: "Working in Professor Wen Ren Yang's Artificial Intelligence Application Lab has been transformative for my technical and interpersonal growth. I joined the lab with a passion for AI but limited experience in applying these theories to real-world problems. Through collaborative projects, I’ve not only built valuable AI models but also learned to communicate complex concepts in simple terms. Our team is multicultural, and each member brings unique insights, inspiring a collaborative spirit that goes beyond academic research. One of my memorable experiences was co-developing a predictive AI model for healthcare applications. The learning curve was steep, but with guidance from Professor Yang and my teammates, we achieved results beyond our expectations. Weekly presentations, lab meetings, and feedback sessions have helped me refine my approach and continuously improve. This lab has become more than a place for research—it’s a community of learning and growth.",
      name: "Person 1"
    },
    {
      img: "https://i.ibb.co/k60hGTP/6b7874456d95.jpg",
      text: "In Professor Yang’s lab, the journey is all about innovation and pushing boundaries. Our projects require us to stay updated with the latest advancements in AI, which is both exciting and challenging. One of the highlights of my experience was attending an international AI conference, where I presented our project on autonomous vehicles. The lab provided comprehensive support, from helping with presentation skills to refining our technical contributions. I have learned not only about algorithms and neural networks but also about project management and teamwork. Our professor encourages us to look at problems from multiple angles, making it a dynamic and stimulating environment to work in. The lab’s culture of inclusivity, collaboration, and rigorous research has broadened my perspective, allowing me to understand AI’s impact on society.",
      name: "Person 2"
    },
    {
      img: "https://i.ibb.co/84S8Swr/bc4bb9818ebc.jpg",
      text: "My experience in the AI Application Lab has been enriched by the cultural exchange that naturally happens here. Working with peers from different countries and backgrounds has been rewarding, as it gives us varied perspectives on approaching projects. One project I enjoyed was developing a language processing tool to support educational applications, which required understanding language nuances across cultures. Professor Yang emphasizes empathy in AI development, reminding us to consider how our work will affect users from diverse backgrounds. This approach has not only sharpened my technical skills but has also taught me to be mindful of the social implications of AI. Our lab often organizes team-building events, like cooking classes, where we share our cultures and build stronger connections. It’s a blend of professional and personal growth that makes every day inspiring.",
      name: "Person 3"
    },
    {
      img: "https://i.ibb.co/FDxtTyt/dbf1977bdaa4.jpg",
      text: "Fostering innovation is at the heart of Professor Yang's Artificial Intelligence Lab. I’ve had the opportunity to work on groundbreaking projects that push the limits of what I thought was possible. One of our projects involved using AI to analyze environmental data and predict trends in climate patterns, which was challenging and impactful. Professor Yang’s mentorship has been invaluable, guiding us through complex research methods and encouraging us to think creatively. The lab’s dynamic team ensures a balance between rigorous scientific research and practical application. I’ve honed my skills in machine learning, data analysis, and project management. Additionally, we collaborate with industry professionals and academics, providing us with perspectives beyond the lab. This lab is not just about research; it’s about making a difference through innovation",
      name: "Person 4"
    },
    {
      img: "https://i.ibb.co/B2xcM2R/f9588859884b.jpg",
      text: "Working in this lab has given me hands-on experience that goes far beyond theoretical learning. In Professor Yang’s lab, we work in small, diverse teams to develop and test AI applications. One of my favorite projects involved creating a prototype for a smart health monitoring system, collaborating with a team that included members from different countries. This experience taught me the importance of adaptability, communication, and cross-cultural collaboration. Our professor’s guidance helps us refine our approaches while pushing us to think independently. Lab members regularly participate in workshops, where industry experts share insights into real-world AI applications, giving us a broader view of the field. This lab has cultivated my skills and broadened my global perspective, setting the foundation for a career in AI.",
      name: "Person 5"
    },
    {
      img: "https://i.ibb.co/mTr5nk1/10472511ece7.jpg",
      text: "Being part of Professor Wen Ren Yang’s AI Application Lab has been an immersive learning experience. I was initially drawn to the lab’s focus on applying AI in meaningful ways, and my time here has exceeded expectations. We are encouraged to attend workshops and lectures led by visiting professors and industry leaders, which has enhanced my understanding of AI’s evolving landscape. One of my most valuable experiences was contributing to an AI-powered image recognition project. The lab's collaborative environment fosters curiosity, making it a space for continuous improvement and exploration. Professor Yang’s mentorship has empowered me to take on challenges and embrace problem-solving. I am grateful for the lab’s supportive atmosphere, where learning extends beyond AI, preparing us for a future where AI plays a central role in technology.",
      name: "Person 6"
    }
  ];

  // State to track which testimonial's experience is visible
  const [visibleExperiences, setVisibleExperiences] = useState({});

  // Toggle function to show or hide the experience text
  const toggleExperience = (index) => {
    setVisibleExperiences((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div id="testimonials" className="testimonials-section">
      <div className="container">
        <h2>What Our Members Say</h2>
        <div className="testimonials-grid">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img 
                src={testimonial.img} 
                alt={`Testimonial from ${testimonial.name}`} 
                className="testimonial-image" 
              />
              <h4 className="testimonial-name">{testimonial.name}</h4>
              
              {/* Button to toggle experience text */}
              <button 
                className="experience-button" 
                onClick={() => toggleExperience(index)}
              >
                Experience
              </button>

              {/* Conditionally render experience text */}
              {visibleExperiences[index] && (
                <p className="testimonial-quote">{testimonial.text}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
