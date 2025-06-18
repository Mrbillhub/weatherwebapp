import React, { useState, useEffect } from 'react';
import WeatherCard from '../components/WeatherCard';
import CitySelector from '../components/CitySelector';
import { useWeather } from '../hooks/useWeather';
import { getFromLocalStorage, setToLocalStorage, STORAGE_KEYS } from '../utils/localStorage';
import '../styles/HomePage.css';

const CITIES = [
  { value: 'London', label: 'London, UK' },
  { value: 'New York', label: 'New York, USA' },
  { value: 'Tokyo', label: 'Tokyo, Japan' },
  { value: 'Paris', label: 'Paris, France' },
  { value: 'Sydney', label: 'Sydney, Australia' },
  { value: 'Berlin', label: 'Berlin, Germany' },
  { value: 'Mumbai', label: 'Mumbai, India' },
  { value: 'Toronto', label: 'Toronto, Canada' }
];

const HomePage = () => {
  // Get saved city from localStorage or default to London
  const savedCity = getFromLocalStorage(STORAGE_KEYS.SELECTED_CITY, 'London');
  const [selectedCity, setSelectedCity] = useState(savedCity);

  const { weatherData, loading, error, getWeatherData, getWeatherByLocation } = useWeather(selectedCity);

  useEffect(() => {
    // Save selected city to localStorage whenever it changes
    setToLocalStorage(STORAGE_KEYS.SELECTED_CITY, selectedCity);
  }, [selectedCity]);

  const handleCityChange = (city) => {
    setSelectedCity(city);
    getWeatherData(city);
  };

  const handleCurrentLocation = () => {
    getWeatherByLocation();
  };

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1 className="hero-title">Weather App</h1>
        <p className="hero-subtitle">Get real-time weather information for any city</p>
      </div>

      <div className="weather-container">
        <div className="controls">
          <CitySelector 
            selectedCity={selectedCity}
            onCityChange={handleCityChange}
            cities={CITIES}
          />
          <button 
            className="location-btn"
            onClick={handleCurrentLocation}
            disabled={loading}
          >
            📍 Use Current Location
          </button>
        </div>

        <WeatherCard 
          weatherData={weatherData}
          loading={loading}
          error={error}
        />

        {!loading && !error && weatherData && (
          <div className="weather-actions">
            <button 
              className="refresh-btn"
              onClick={() => getWeatherData(selectedCity)}
            >
              🔄 Refresh
            </button>
          </div>
        )}
      </div>

      <div className="info-section">
        <div className="info-card">
          <h3>📝 Note</h3>
          <p>
            This app uses demo weather data by default. To use real weather data, 
            you need to get an API key from{' '}
            <a 
              href="https://openweathermap.org/api" 
              target="_blank" 
              rel="noopener noreferrer"
              className="info-link"
            >
              OpenWeatherMap
            </a>{' '}
            and replace it in the weatherService.js file.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;