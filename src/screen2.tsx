
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Airport {
  airportCode: string;
  airportName: string;
  cityCode: string;
  cityName: string;
  countryCode: string;
  countryName: string;
  continent: string;
}

const Screen2: React.FC = () => {
  const [suggestions, setSuggestions] = useState<Airport[]>([]);
  const [clientCountry, setClientCountry] = useState<string>('');

  const fetchAirportData = async () => {
    try {
      const response = await axios.get<Record<string, Airport>>('/airports.json');
      const airportData = Object.values(response.data);
      const sortedSuggestions = airportData
        .filter(airport => airport.countryCode === clientCountry)
        .sort((a, b) => a.airportName.localeCompare(b.airportName));
      setSuggestions(sortedSuggestions);
    } catch (error) {
      console.error('Error fetching airport data:', error);
    }
  };



  const fetchClientCountry = async () => {
    try {
      const response = await axios.get<{ country: string, ip: string }>('https://api.ipify.org?format=json');
      const clientIp = response.data.ip;
      const countryResponse = await axios.get<string>(`https://ipapi.co/${clientIp}/country`);
      setClientCountry(countryResponse.data);
    } catch (error) {
      console.error('Error fetching client country:', error);
    }
  };

  useEffect(() => {
    fetchAirportData();
    fetchClientCountry();
  }, [clientCountry]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientCountry(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Enter airport name" onChange={handleInputChange} />
      <ul>
        {suggestions.map(airport => (
          <div className="flex items-center space-x-4" key={airport.airportCode}>
            <li>{airport.airportName}</li>
            <h2>{airport.countryCode}</h2>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Screen2;
