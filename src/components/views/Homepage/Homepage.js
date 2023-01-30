import React from 'react'
import WeatherData from "../../organisms/WeatherData/WeatherData";
import WeatherDataProvider from "../../../providers/WeatherDataProvider";
import MainInfo from "../../organisms/MainInfo/MainInfo";

export const Homepage = () => {
  return (
      <WeatherDataProvider>
        <MainInfo />
        <WeatherData />
      </WeatherDataProvider>
  )
}
