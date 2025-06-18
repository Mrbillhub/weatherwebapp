import React from 'react';
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-header">
          <h1>About Weather App</h1>
          <p className="about-subtitle">Your reliable weather companion</p>
        </div>

        <div className="about-content">
          <section className="about-section">
            <h2>🌤️ What We Do</h2>
            <p>
              Weather App provides real-time weather information for cities around the world. 
              Our intuitive interface makes it easy to check current weather conditions, 
              including temperature, humidity, wind speed, and atmospheric pressure.
            </p>
          </section>

          <section className="about-section">
            <h2>✨ Features</h2>
            <ul className="features-list">
              <li>Real-time weather data from OpenWeatherMap API</li>
              <li>Current location weather detection</li>
              <li>City selection from popular destinations</li>
              <li>Responsive design for all devices</li>
              <li>Local storage for user preferences</li>
              <li>Clean and modern user interface</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>🛠️ Technology Stack</h2>
            <div className="tech-grid">
              <div className="tech-item">
                <h3>Frontend</h3>
                <ul>
                  <li>React 18</li>
                  <li>React Router</li>
                  <li>Modern CSS</li>
                  <li>Vite</li>
                </ul>
              </div>
              <div className="tech-item">
                <h3>API</h3>
                <ul>
                  <li>OpenWeatherMap API</li>
                  <li>Geolocation API</li>
                  <li>Local Storage API</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>🎯 Our Mission</h2>
            <p>
              We believe that everyone should have access to accurate and up-to-date weather 
              information. Our mission is to provide a simple, fast, and reliable weather app 
              that helps you plan your day with confidence.
            </p>
          </section>

          <section className="about-section">
            <h2>🚀 Getting Started</h2>
            <p>
              To use this app with real weather data, you'll need to:
            </p>
            <ol className="steps-list">
              <li>Sign up for a free API key at <a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer">OpenWeatherMap</a></li>
              <li>Replace the placeholder API key in the weatherService.js file</li>
              <li>Enjoy real-time weather updates!</li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;