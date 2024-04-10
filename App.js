import React, { useState } from 'react';
import axios from 'axios';
import WeatherForm from './WeatherForm';
import CityList from './CityList';
import './App.css';

// const WeatherApp = () => {
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState('');
//   const [cities, setCities] = useState([]);

//   const API_KEY = 'da1c00e3d3992828e77aa2cca4381253'; // Replace 'YOUR_API_KEY' with your actual API key

//   const fetchWeather = async (cityName) => {
//     try {
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
//       );
  
//       if (response.data.cod === '404') {
//         throw new Error('City not found. Please enter a valid city name.');
//       }
  
//       return response.data;
//     } catch (error) {
//       throw new Error('An error occurred while fetching weather data.');
//     }
//   };
  
  

//   const handleSearch = async (cityName) => {
//     if (!cities.includes(cityName)) {
//       setError('Please select a city from the list.');
//       setWeather(null);
//       return;
//     }
  
//     try {
//       const data = await fetchWeather(cityName);
//       setWeather(data);
//       setError('');
//     } catch (error) {
//       setError(error.message);
//       setWeather(null);
//     }
//   };
  
  

//   const handleAddCity = (cityName) => {
//     setCities([...cities, cityName]);
//   };

//   const handleRemoveCity = (index) => {
//     const updatedCities = cities.filter((_, i) => i !== index);
//     setCities(updatedCities);
//   };

//   return (
//     <div className="container">
//       <h1>Weather App</h1>
//       <WeatherForm onSearch={handleSearch} />
//       {error && <div>{error}</div>}
//       {weather && (
//         <div>
         
// <h1><b>{weather.name}, {weather.sys.country}</b></h1>
// <p>Temperature: {weather.main.temp}°C</p>
// <p>Weather: {weather.weather[0].description}</p>

//           <h1><b>{weather.name}, {weather.sys.country}</b></h1>
//           <p>Temperature: {weather.main.temp}°C</p>
//           <p>Weather: {weather.weather[0].description}</p>
//           <p>Humidity: {weather.main.humidity}%</p>
//           <p>Wind Speed: {weather.wind.speed} m/s</p>
//           <video autoPlay muted loop className="video-bg">
//   <source src="rain.mp4" type="video/mp4" />
//   Your browser does not support HTML5 video.
// </video>
//         </div>
//       )}
//       <CityList cities={cities} onAddCity={handleAddCity} onRemoveCity={handleRemoveCity} />
//     </div>
//   );
// };
const WeatherApp = () => {
  <body>
   <h1>Wheather App</h1>
  </body>
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState('');
  const [cities, setCities] = useState([]);

  const API_KEY = 'da1c00e3d3992828e77aa2cca4381253';

  const fetchWeather = async (cityName) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
  
      if (response.data.cod === '404') {
        throw new Error('City not found. Please enter a valid city name.');
      }
  
      return response.data;
    } catch (error) {
      throw new Error('An error occurred while fetching weather data.');
    }
  };

  const handleSearch = async (cityName) => {
    if (!cities.includes(cityName)) {
      setError('Please select a city from the list.');
      return;
    }
  
    try {
      const data = await fetchWeather(cityName);
      setWeatherData([...weatherData, data]);
      setError('');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleAddCity = (cityName) => {
    setCities([...cities, cityName]);
  };

  const handleRemoveCity = (index) => {
    const updatedCities = cities.filter((_, i) => i !== index);
    setCities(updatedCities);
    const updatedWeatherData = weatherData.filter((_, i) => i !== index);
    setWeatherData(updatedWeatherData);
  };

  return (
    
    <div className="container">
      
      <h1>Weather App</h1>
      <WeatherForm onSearch={handleSearch} />
      {error && <div>{error}</div>}
      {weatherData.map((weather, index) => (
        <div key={index} className="weather-info">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <button onClick={() => handleRemoveCity(index)}>Remove City</button>
        </div>
      ))}
      <CityList cities={cities} onAddCity={handleAddCity} />
    </div>
  );
};

export default WeatherApp;
