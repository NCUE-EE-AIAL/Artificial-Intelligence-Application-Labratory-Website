import React from 'react';
import './Activities.css'; // Optional CSS for styling

const Activities = () => {
  const activitiesData = [
    {
      title: "Lab Meetings",
      description: "Our lab hosts weekly meetings to discuss ongoing projects, breakthroughs in AI, and future research directions. Collaboration and knowledge sharing are key components of our research culture.",
      image: "https://th.bing.com/th/id/OIP.usWD4Ds7gU6ksZOZDNyF_AHaEK?w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5rm=2&w=1600&h=900&dpr=1.5&pid=ImgDetMain", // Replace with the correct image path
    },
    
    {
      title: "Research Articles",
      description: "Our team regularly publishes high-impact research papers in top AI conferences and journals, contributing to the global AI community.",
      image: "https://th.bing.com/th/id/OIP.tZok00lrduTXjyeWx3dKkwHaEK?pid=ImgDet&w=226&h=127&c=7&dpr=1.5", // Replace with the correct image path
    },
    {
      title: "Culture Exchange Programs",
      description: "Through international collaboration and culture exchange programs, we aim to broaden our perspectives and integrate global AI practices into our work.",
      image: "https://th.bing.com/th?id=OIP.TcatY0cLmneQkyO1mfVOsgHaD4&w=345&h=180&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2", // Replace with the correct image path
    },
    {
      title: "WorkShops",
      description: "We encourage participation in AI hackathons and competitions to apply theoretical knowledge to practical challenges and foster innovation.",
      image: "https://th.bing.com/th?id=OIP.izCs71o9t-u-9vcTTzR5UQHaE3&w=308&h=202&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2", // Replace with the correct image path
    },
  ];

  return (
    <section className="activities-section">
      <div id='activities' className="container">
        <h2>Lab Activities</h2>
        <div className="activities-grid">
          {activitiesData.map((activity, index) => (
            <div key={index} className="activity-item">
              <img src={activity.image} alt={activity.title} className="activity-image" />
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
