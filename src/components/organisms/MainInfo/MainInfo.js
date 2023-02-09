import React from 'react';
import { Header } from '../../atoms/Header/Header.styles';
import { convertFarenheitToCelcius } from "../../../utils/utils";
import { StyledWeather, StyledDetails} from './MainInfo.styles';
import { ViewWrapper } from "../../templates/ViewWrapper/ViewWrapper.styles";

const MainInfo = ({weatherData}) => {
  return (
    <ViewWrapper>
      <StyledWeather>
          <Header>{weatherData?.name}</Header>
          <div>{convertFarenheitToCelcius(weatherData?.main.temp)}</div>
        <img src={`http://openweathermap.org/img/w/${weatherData?.weather[0].icon}.png`} alt="weather_icon"/>
        <p>{weatherData?.weather[0].main}</p>
          <StyledDetails>
              <p>Feels like: {convertFarenheitToCelcius(weatherData?.main.feels_like)}</p>
              <p>Pressure: {weatherData?.main.pressure} hPa</p>
              <p>Wind: {weatherData?.wind.speed} m/s</p>
              <p>Humidity: {weatherData?.main.humidity} %</p>
          </StyledDetails>
      </StyledWeather>
    </ViewWrapper>
  )
}

export default MainInfo
