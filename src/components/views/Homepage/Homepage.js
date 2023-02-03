import React, { useState } from 'react'
import WeatherDataProvider from '../../../providers/WeatherDataProvider'
import MainInfo from '../../organisms/MainInfo/MainInfo'
import Search from '../../organisms/Search/Search'

export const Homepage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const handleChange = (data) => {
    const [lat, lon] = data.value.split(' ')
      console.log(lat, lon);

    const currWeather = fetch(
      `${process.env.REACT_APP_OPEN_WEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}`
    );

    const forecast = fetch(
      `${process.env.REACT_APP_OPEN_WEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}`
    );

    Promise.all([currWeather, forecast])
      .then(async (res) => {
        const weatherRes = await res[0].json();
        console.log(res[0])

        setWeatherData({ city: data.label, ...weatherRes })
        // setForecastData({ city: data.label, ...forecastRes })
      })
      .catch((err) => console.log(err))
  }
  console.log(forecastData, weatherData)
  return (
    <WeatherDataProvider>
      <Search onSearchChange={handleChange} />
      <MainInfo />
    </WeatherDataProvider>
  )
}
