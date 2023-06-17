import React, { useState } from 'react'
import MainInfo from '../../organisms/MainInfo/MainInfo'
import Search from '../../organisms/Search/Search'
import Forecast from '../../organisms/Forecast/Forecast'
import { languages } from '../../../utils/translations'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

export const Homepage = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [forecastData, setForecastData] = useState(null)
  const [selectedLanguage, setSelectedLanguage] = useState('pl')

  const handleChange = (data) => {
    const [lat, lon] = data.value.split(' ')

    const currWeather = fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f1c6bb73b13d3e6810f40c9166b25f4a`
    )

    const forecast = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=f1c6bb73b13d3e6810f40c9166b25f4a`
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
    <>
      <Search onSearchChange={handleChange} />
      <ToggleButtonGroup
        value={selectedLanguage}
        exclusive
        onChange={(e, newLan) => setSelectedLanguage(newLan)}
        aria-label='text alignment'
      >
        <ToggleButton value='pl' aria-label='left aligned'>
          PL
        </ToggleButton>
        <ToggleButton value='en' aria-label='centered'>
          EN
        </ToggleButton>
      </ToggleButtonGroup>
      {weatherData ? (
        <MainInfo weatherData={weatherData} selectedLanguage={selectedLanguage} />
      ) : (
        <h1>{languages[`${selectedLanguage}`].typeYourCity}</h1>
      )}
      {forecastData && <Forecast data={forecastData} selectedLanguage={selectedLanguage} />}
    </>
  )
}
