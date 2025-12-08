import { useState, useEffect } from "react";
import WeatherCard from "../components/weathercard";

export const useFetchWeather = (city) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "c80709dac089ef69dde73c273a3ddc8c";

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
      .then(res => {
        if (!res.ok) throw new Error("Weather data not found");
        return res.json();
      })
      .then(data => setWeather(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [city]);

  return { weather, loading, error };
};
