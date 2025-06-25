
import React from 'react';
import '../App.css';

const LandingPage = ({ onGetStarted }) => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="landing-title">
          Sound<span className="gradient-text">Pix</span>
        </h1>
        <p className="landing-description">
          Transform your voice into stunning AI-generated images, stories, and visual experiences
        </p>
        <button className="get-started-button" onClick={onGetStarted}>
          <i className="fas fa-rocket"></i>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
