import React, { useEffect, useState } from 'react'
import { ViewWrapper } from '../../templates/ViewWrapper/ViewWrapper.styles'
import { Header } from '../../atoms/Header/Header.styles'
import { SearchBar } from '../../organisms/SearchBar/SearchBar'

export const Homepage = () => {
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

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latCoords}&lon=${lonCoords}&appid=f1c6bb73b13d3e6810f40c9166b25f4a`
      )
      const newData = await res.json()
      setWeatherData(newData)
    };

    fetchData()
  }, [latCoords, lonCoords]);
  getCurrentPosition()

  return (
    <ViewWrapper>
      <Header>Hello, {weatherData ? weatherData.name : ''}</Header>
      <SearchBar onAction={getCurrentPosition} />
    </ViewWrapper>
  )
}
