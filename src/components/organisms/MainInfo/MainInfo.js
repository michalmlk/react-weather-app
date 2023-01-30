import React, { useContext } from 'react'
import { Header } from '../../atoms/Header/Header.styles'
import { WeatherDataContext } from '../../../providers/WeatherDataProvider'
import { convertFarenheitToCelcius } from "../../../utils/utils";
import { StyledWeatherDetails, StyledMainInfo } from './MainInfo.styles';

const MainInfo = () => {
  const { weatherData } = useContext(WeatherDataContext);
  console.log(weatherData)
  return (
    <StyledMainInfo>
      <Header>{weatherData?.name}</Header>
      <StyledWeatherDetails>
          <div>{convertFarenheitToCelcius(weatherData?.main.temp)}</div>
        <img src={`http://openweathermap.org/img/w/${weatherData?.weather[0].icon}.png`} alt="weather_icon"/>
        <p>{weatherData?.weather[0].main}</p>
      </StyledWeatherDetails>
    </StyledMainInfo>
  )
}

export default MainInfo
