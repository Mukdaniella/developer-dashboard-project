import React from "react";

export default function WeatherCard({ weather }) {
  if (!weather) return <p>Loading Weather...</p>;

  const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className="p-4 shadow rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold mb-2">Current Weather</h1>
      <div className="flex items-center mb-2">
        <img src={iconUrl} alt={weather.weather[0].description} className="w-30 h-30" />
        <p className="ml-2 text-lg">{weather.main.temp}°C</p>
      </div>
      <p>Wind: {weather.wind.speed} m/s</p>
      <p>Time: {new Date().toLocaleTimeString()}</p>
    </div>
  );
}
