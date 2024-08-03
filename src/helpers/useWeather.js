import { useState, useEffect } from 'react';

const useWeather = (API_KEY) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const getWeather = async () => {
      navigator.geolocation.getCurrentPosition((success) => {
        const { latitude, longitude } = success.coords;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`)
          .then((res) => res.json())
          .then((data) => {
            setData(data);
            setLoading(false);
          });
      });
    };

    getWeather();
  }, [API_KEY]);

  return { loading, data };
};

export default useWeather;
