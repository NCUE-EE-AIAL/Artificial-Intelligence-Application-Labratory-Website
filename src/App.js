import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Features from "./components/Features";
import About from "./components/About";
import Activities from "./components/Activities";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Contact from "./components/Contact";
import JsonData from "./data/data.json";
import '@fortawesome/fontawesome-free/css/all.min.css';
import ShowcasePage from './components/ShowcasePage'
import ResearchPage from "./components/ResearchPage"
import Collab from "./components/Collab"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass, faBullhorn, faUsers, faRobot } from '@fortawesome/free-solid-svg-icons';
library.add(faMagnifyingGlass, faBullhorn, faUsers, faRobot);

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Hero/>
      <Features/>
      <About />
      <Activities />
      <Projects />
      <Testimonials data={JsonData.Testimonials}/>
      <Team data={JsonData.Team} />
      <Contact />
     
      
      
      
      
      
    </div>
  );
}

export default App;
