import { useState, useEffect } from 'react';
import { fetchWeatherData, fetchWeatherByCoordinates } from '../services/weatherService';

export const useWeather = (initialCity = 'London') => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getWeatherData = async (city) => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const getWeatherByLocation = async () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser');
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const data = await fetchWeatherByCoordinates(latitude, longitude);
          setWeatherData(data);
        } catch (err) {
          setError(err.message);
          setWeatherData(null);
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        setError('Unable to retrieve your location');
        setLoading(false);
        // Fallback to default city
        getWeatherData(initialCity);
      }
    );
  };

  useEffect(() => {
    getWeatherData(initialCity);
  }, [initialCity]);

  return {
    weatherData,
    loading,
    error,
    getWeatherData,
    getWeatherByLocation,
    refetch: () => getWeatherData(initialCity)
  };
};