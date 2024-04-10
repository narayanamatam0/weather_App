// CityList.js

import React, { useState } from 'react';

const CityList = ({ cities, onAddCity, onRemoveCity }) => {
  const [newCity, setNewCity] = useState('');

  const handleAddCity = () => {
    if (newCity.trim() !== '') {
      onAddCity(newCity);
      setNewCity('');
    }
  };

  return (
    <div className='inp1'>
      <h2>City Management</h2>
      <div>
        <input
          type="text"
          placeholder="Enter city name"
          value={newCity}
          onChange={(e) => setNewCity(e.target.value)}
        />
        <button onClick={handleAddCity}>Add City</button>
      </div>
      <ul>
        {cities.map((city, index) => (
          <li key={index}>
            {city}
            <button onClick={() => onRemoveCity(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityList;
