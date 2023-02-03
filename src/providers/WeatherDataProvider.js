import React, { createContext, useEffect, useState } from 'react'

export const WeatherDataContext = createContext({
  latCoords: 0,
  lonCoords: 0,
  weatherData: {},
  getCurrentPosition: () => {},
})

const WeatherDataProvider = ({ children }) => {
  const [latCoords, setLatCoords] = useState('')
  const [lonCoords, setLonCoords] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 5000,
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`)
  }

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLatCoords(pos.coords.latitude)
        setLonCoords(pos.coords.longitude)
      },
      error,
      options
    )
  }
  getCurrentPosition()

  useEffect(() => {
    const fetchData = () => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latCoords}&lon=${lonCoords}&appid=f1c6bb73b13d3e6810f40c9166b25f4a`
      )
        .then((res) => res.json())
        .then((data) => setWeatherData(data))
    }
    if(latCoords && lonCoords) {
      fetchData()
    }
  }, [latCoords, lonCoords])

  return (
    <WeatherDataContext.Provider
      value={{
        latCoords,
        lonCoords,
        getCurrentPosition,
        weatherData,
      }}
    >
      {children}
    </WeatherDataContext.Provider>
  )
}

export default WeatherDataProvider
