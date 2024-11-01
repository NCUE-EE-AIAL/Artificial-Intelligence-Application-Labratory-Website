// ShowcasePage.js
import React from 'react';
import './ShowcasePage.css';

const projectsData = [
  {
    title: "Two-step-Authentication-Multi-biometric-system",
    description: "An AI-powered two-step authentication system utilizing multiple biometric inputs for enhanced security.",
    largeImage: "https://github.com/NCUE-EE-AIAL/Two-step-Authentication-Multi-biometric-System",
    smallImage: "https://tse4.mm.bing.net/th?id=OIP.UvlY-T1ZR319-CwiJtL05wHaE8&pid=Api&P=0&h=180"
  },
  {
    title: "ASL using Linear Projection T5",
    description: "A project focused on American Sign Language translation using T5 linear projection techniques.",
    largeImage: "https://github.com/NCUE-EE-AIAL/ASL-Using-Linear-Projection-T5",
    smallImage: "https://tse4.mm.bing.net/th?id=OIP.nhFGZUKPi9pl47GGyffbNQHaEK&pid=Api&P=0&h=180"
  },
  {
    title: "Attendance Management System",
    description: "AI-based system for efficient attendance tracking using face recognition.",
    largeImage: "https://github.com/NCUE-EE-AIAL/Attendance-Management-System",
    smallImage: "https://tse2.mm.bing.net/th?id=OIP.-1JP044-zoHc2y0xys0O9gHaEh&pid=Api&P=0&h=180"
  },
  {
    title: "Embedded Wavelet Neural Network for ECG Analysis",
    description: "A neural network-based approach to analyzing ECG data for improved healthcare solutions.",
    largeImage: "https://github.com/NCUE-EE-AIAL/Embedded-Wavelet-Neural-Network-for-ECG-Analysis",
    smallImage: "https://tse2.mm.bing.net/th?id=OIP.WCqK6XavZC3o_vWbiDsfxQHaE8&pid=Api&P=0&h=180"
  },
  {
    title: "NCUE BEES Energy Consumption Analysis and Prediction",
    description: "An AI project focused on energy consumption prediction and analysis.",
    largeImage: "https://github.com/NCUE-EE-AIAL/NCUE-BEES-Energy-Consumption-analysis-and-prediction",
    smallImage: "https://tse1.mm.bing.net/th?id=OIP.3l0VdyIJrqBrR1tVcftjKQHaEJ&pid=Api&P=0&h=180"
  },
  {
    title: "PatrolBot",
    description: "An autonomous patrol bot utilizing AI for surveillance and monitoring.",
    largeImage: "https://github.com/NCUE-EE-AIAL/PatrolBot",
    smallImage: "https://tse4.mm.bing.net/th?id=OIP.whANHxxuVNP9PBNf0f3dfwHaEK&pid=Api&P=0&h=180"
  },
  {
    title: "Sign Language Translation",
    description: "Project that translates sign language into text or spoken language using AI.",
    largeImage: "https://github.com/NCUE-EE-AIAL/Sign-Language-Translation",
    smallImage: "https://tse4.mm.bing.net/th?id=OIP.WPEWLmAqUMzbGTREMgrzXgHaE8&pid=Api&P=0&h=180"
  },
  {
    title: "Image Fusion by Generative Adversarial Network",
    description: "An innovative approach to image fusion using GANs for high-quality outputs.",
    largeImage: "https://github.com/NCUE-EE-AIAL/Image-Fusion-GAN",
    smallImage: "https://tse1.mm.bing.net/th?id=OIP.5zLE_UEi2jS2M1d_Ga8gAAHaE7&pid=Api&P=0&h=180"
  }
];

const ShowcasePage = () => {
    return (
        <section className="showcase-page">
          <div className="container">
            <h2>AI Project Showcase</h2>
            <p>Explore our AI projects, with demo videos, results, and detailed information.</p>
            <div className="project-grid">
              {projectsData.map((project, index) => (
                <div key={index} className="project-item animate-fade-in">
                  <img src={project.smallImage} alt={project.title} className="project-thumbnail" />
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <iframe
                    src={project.videoUrl}
                    title={`${project.title} Video`}
                    className="project-video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <p><strong>Results:</strong> {project.results}</p>
                  <a href={project.largeImage} target="_blank" rel="noopener noreferrer" className="cta-button">
                    View Project on GitHub
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };
    
    export default ShowcasePage;
