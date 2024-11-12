import axios from 'axios';

const APIkey = `c7c4f52374e43dc99db290599224bd68`;

const WeatherData = {
  getCurrentWeather: async (location) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIkey}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error(
        'Error fetching current weather, please try another location.'
      );
    }
  },
  getThreeDayForecast: async (location) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${APIkey}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching 3-day forecast.');
    }
  },
};

export default WeatherData;
