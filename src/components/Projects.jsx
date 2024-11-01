import React from 'react';
import './Projects.css'; // CSS for styling

const Projects = () => {
  const projectsData = [
   
    {
      title: "Two-step-Authentication-Multi-biometric-system",
      description: "An AI-powered chatbot capable of natural language understanding and generation.",
      largeImage: "https://github.com/NCUE-EE-AIAL/Two-step-Authentication-Multi-biometric-System",
      smallImage: "https://tse4.mm.bing.net/th?id=OIP.UvlY-T1ZR319-CwiJtL05wHaE8&pid=Api&P=0&h=180"
    },
    {
      title: "ASL using linear projection T5",
      description: "An AI-powered chatbot capable of natural language understanding and generation.",
      largeImage: "https://github.com/NCUE-EE-AIAL/ASL-Using-Linear-Projection-T5",
      smallImage: "https://tse4.mm.bing.net/th?id=OIP.nhFGZUKPi9pl47GGyffbNQHaEK&pid=Api&P=0&h=180"
    },
    {
      title: "Attendance Management system",
      description: "An AI-powered chatbot capable of natural language understanding and generation.",
      largeImage: "https://github.com/NCUE-EE-AIAL/Attendance-Management-System",
      smallImage: "https://tse2.mm.bing.net/th?id=OIP.-1JP044-zoHc2y0xys0O9gHaEh&pid=Api&P=0&h=180"
    },
    {
      title: "Embedded wavelet neural network for ECG analysis",
      description: "An AI-powered chatbot capable of natural language understanding and generation.",
      largeImage: "https://github.com/NCUE-EE-AIAL/Embedded-Wavelet-Neural-Network-for-ECG-Analysis",
      smallImage: "https://tse2.mm.bing.net/th?id=OIP.WCqK6XavZC3o_vWbiDsfxQHaE8&pid=Api&P=0&h=180"
    },
    {
      title: "NCUE BEES Energy Consumption analysis and prediction",
      description: "An AI-powered chatbot capable of natural language understanding and generation.",
      largeImage: "https://github.com/NCUE-EE-AIAL/NCUE-BEES-Energy-Consumption-analysis-and-prediction",
      smallImage: "https://tse1.mm.bing.net/th?id=OIP.3l0VdyIJrqBrR1tVcftjKQHaEJ&pid=Api&P=0&h=180"
    },
    {
      title: "PatrolBot",
      largeImage: "https://github.com/NCUE-EE-AIAL/PatrolBot",
      description: "An AI-powered chatbot capable of natural language understanding and generation.",
      smallImage: "https://tse4.mm.bing.net/th?id=OIP.whANHxxuVNP9PBNf0f3dfwHaEK&pid=Api&P=0&h=180"
    },
    {
      title: "Sign Language Translation",
      description: "An AI-powered chatbot capable of natural language understanding and generation.",
      largeImage: "img/proto/07-large.jpg",
      smallImage: "https://tse4.mm.bing.net/th?id=OIP.WPEWLmAqUMzbGTREMgrzXgHaE8&pid=Api&P=0&h=180"
    },
    {
      title: "Image Fusion by Genrative Adversarial Network",
      description: "An AI-powered chatbot capable of natural language understanding and generation.",
      largeImage: "",
      smallImage: "https://tse1.mm.bing.net/th?id=OIP.5zLE_UEi2jS2M1d_Ga8gAAHaE7&pid=Api&P=0&h=180"
    },
    
  ];

  return (
    <section id='projects' className="projects-section">
      <div className="container">
        <h2>Our Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <a key={index} href={project.largeImage} target="_blank" rel="noopener noreferrer" className="project-item">
              <img src={project.smallImage} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
