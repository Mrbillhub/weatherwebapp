const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your actual API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Demo weather data for when API key is not available
const DEMO_WEATHER_DATA = {
  'London': {
    name: 'London',
    main: {
      temp: 15.5,
      feels_like: 14.2,
      humidity: 72,
      pressure: 1013
    },
    weather: [{
      main: 'Clouds',
      description: 'partly cloudy',
      icon: '02d'
    }],
    wind: {
      speed: 3.2
    }
  },
  'New York': {
    name: 'New York',
    main: {
      temp: 22.1,
      feels_like: 21.8,
      humidity: 65,
      pressure: 1018
    },
    weather: [{
      main: 'Clear',
      description: 'clear sky',
      icon: '01d'
    }],
    wind: {
      speed: 2.1
    }
  },
  'Tokyo': {
    name: 'Tokyo',
    main: {
      temp: 18.7,
      feels_like: 18.1,
      humidity: 78,
      pressure: 1020
    },
    weather: [{
      main: 'Rain',
      description: 'light rain',
      icon: '10d'
    }],
    wind: {
      speed: 1.8
    }
  },
  'Paris': {
    name: 'Paris',
    main: {
      temp: 16.3,
      feels_like: 15.9,
      humidity: 68,
      pressure: 1015
    },
    weather: [{
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d'
    }],
    wind: {
      speed: 2.7
    }
  },
  'Sydney': {
    name: 'Sydney',
    main: {
      temp: 24.8,
      feels_like: 25.2,
      humidity: 58,
      pressure: 1022
    },
    weather: [{
      main: 'Clear',
      description: 'clear sky',
      icon: '01d'
    }],
    wind: {
      speed: 4.1
    }
  }
};

export const fetchWeatherData = async (city) => {
  try {
    // Check if we have a valid API key
    if (!API_KEY || API_KEY === 'YOUR_OPENWEATHERMAP_API_KEY') {
      // Use demo data
      return new Promise((resolve) => {
        setTimeout(() => {
          const demoData = DEMO_WEATHER_DATA[city];
          if (demoData) {
            resolve(demoData);
          } else {
            resolve(DEMO_WEATHER_DATA['London']); // fallback
          }
        }, 1000); // Simulate API delay
      });
    }

    // Real API call
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error(`Weather data not found for ${city}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export const fetchWeatherByCoordinates = async (lat, lon) => {
  try {
    // Check if we have a valid API key
    if (!API_KEY || API_KEY === 'YOUR_OPENWEATHERMAP_API_KEY') {
      // Use demo data for current location
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            ...DEMO_WEATHER_DATA['London'],
            name: 'Your Location'
          });
        }, 1000);
      });
    }

    // Real API call
    const response = await fetch(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error('Weather data not found for current location');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data by coordinates:', error);
    throw error;
  }
};