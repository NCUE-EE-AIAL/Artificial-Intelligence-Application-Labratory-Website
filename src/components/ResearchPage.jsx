// ResearchPage.js
import React from 'react';
import './ResearchPage.css';

const publicationsData = [
  {
    title: "Efficient Deep Learning Model for Image Recognition",
    authors: "A. Smith, B. Jones, C. Lee",
    description: "A model optimized for high accuracy in image recognition.",
    link: "https://example.com/publication-link",
    year: "2023",
    tags: ["Deep Learning", "Image Recognition"]
  },
  // Add additional publications here
];

const datasetsData = [
  {
    title: "Multilingual Speech Recognition Dataset",
    description: "A large-scale dataset for multilingual speech recognition.",
    link: "https://example.com/dataset-link",
    year: "2022",
    tags: ["Speech Recognition", "Multilingual"]
  },
  // Add additional datasets here
];

const ResearchPage = () => (
  <div className="research-page">
    <section className="research-section">
      <h2>Publications</h2>
      <div className="item-grid">
        {publicationsData.map((pub, index) => (
          <div key={index} className="item-card animate-fade-in">
            <h3>{pub.title}</h3>
            <p><strong>Authors:</strong> {pub.authors}</p>
            <p>{pub.description}</p>
            <p><strong>Year:</strong> {pub.year}</p>
            <p><strong>Tags:</strong> {pub.tags.join(", ")}</p>
            <a href={pub.link} target="_blank" rel="noopener noreferrer" className="cta-button">
              View Publication
            </a>
          </div>
        ))}
      </div>
    </section>

    <section className="research-section">
      <h2>Data Sets</h2>
      <div className="item-grid">
        {datasetsData.map((dataset, index) => (
          <div key={index} className="item-card animate-fade-in">
            <h3>{dataset.title}</h3>
            <p>{dataset.description}</p>
            <p><strong>Year:</strong> {dataset.year}</p>
            <p><strong>Tags:</strong> {dataset.tags.join(", ")}</p>
            <a href={dataset.link} target="_blank" rel="noopener noreferrer" className="cta-button">
              View Data Set
            </a>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default ResearchPage;
