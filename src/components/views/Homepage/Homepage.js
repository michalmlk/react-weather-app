import React from 'react'
import WeatherDataProvider from "../../../providers/WeatherDataProvider";
import MainInfo from "../../organisms/MainInfo/MainInfo";

export const Homepage = () => {
  return (
      <WeatherDataProvider>
        <MainInfo />
      </WeatherDataProvider>
  )
}
