import React from 'react';
import '../styles/WeatherCard.css';

const WeatherCard = ({ weatherData, loading, error }) => {
  if (loading) {
    return (
      <div className="weather-card">
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading weather data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="weather-card error">
        <div className="error-message">
          <h3>⚠️ Error</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!weatherData) {
    return (
      <div className="weather-card">
        <p>No weather data available</p>
      </div>
    );
  }

  const { name, main, weather, wind } = weatherData;
  const weatherIcon = weather[0]?.icon;
  const weatherDescription = weather[0]?.description;

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>{name}</h2>
        <div className="weather-icon">
          {weatherIcon && (
            <img 
              src={`https://openweathermap.org/img/w/${weatherIcon}.png`} 
              alt={weatherDescription}
              className="weather-img"
            />
          )}
        </div>
      </div>

      <div className="weather-main">
        <div className="temperature">
          <span className="temp-value">{Math.round(main.temp)}°C</span>
          <p className="temp-description">{weatherDescription}</p>
        </div>

        <div className="weather-details">
          <div className="detail-item">
            <span className="detail-label">Feels like:</span>
            <span className="detail-value">{Math.round(main.feels_like)}°C</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Humidity:</span>
            <span className="detail-value">{main.humidity}%</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Wind:</span>
            <span className="detail-value">{wind.speed} m/s</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Pressure:</span>
            <span className="detail-value">{main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;