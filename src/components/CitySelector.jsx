import React from 'react';
import '../styles/CitySelector.css';

const CitySelector = ({ selectedCity, onCityChange, cities }) => {
  return (
    <div className="city-selector">
      <label htmlFor="city-select" className="selector-label">
        Select City:
      </label>
      <select 
        id="city-select"
        value={selectedCity} 
        onChange={(e) => onCityChange(e.target.value)}
        className="city-dropdown"
      >
        {cities.map((city) => (
          <option key={city.value} value={city.value}>
            {city.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;