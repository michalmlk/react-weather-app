import React, { useState } from 'react'
import WeatherDataProvider from '../../../providers/WeatherDataProvider'
import MainInfo from '../../organisms/MainInfo/MainInfo'
import Search from '../../organisms/Search/Search'
import Forecast from '../../organisms/Forecast/Forecast'

export const Homepage = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [forecastData, setForecastData] = useState(null)

  const handleChange = (data) => {
    const [lat, lon] = data.value.split(' ')

    const currWeather = fetch(
      `${process.env.REACT_APP_OPEN_WEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )

    const forecast = fetch(
      `${process.env.REACT_APP_OPEN_WEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )

    Promise.all([currWeather, forecast])
      .then(async (res) => {
        const weatherRes = await res[0].json()
        setWeatherData({ city: data.label, ...weatherRes })
        const forecastRes = await res[1].json()
        setForecastData({ city: data.label, ...forecastRes })
      })
      .catch((err) => console.log(err))
  }

  return (
    <WeatherDataProvider>
      <Search onSearchChange={handleChange} />
      <MainInfo weatherData={weatherData} />
      {forecastData ? <Forecast data={forecastData} /> : ''}
    </WeatherDataProvider>
  )
}
