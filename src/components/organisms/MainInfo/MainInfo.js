import React, { useContext } from 'react'
import { ViewWrapper } from '../../templates/ViewWrapper/ViewWrapper.styles'
import { Header } from '../../atoms/Header/Header.styles'
import { WeatherDataContext } from '../../../providers/WeatherDataProvider'
import styled from 'styled-components'
import { convertFarenheitToCelcius } from "../../../utils/utils";

export const StyledMainInfo = styled(ViewWrapper)`
  flex-direction: row;

  ${Header} {
    font-size: ${({theme}) => theme.fontSize.xxl};
    text-align: left;
    line-height: ${({theme}) => theme.fontSize.xxl};
  }
`
export const StyledWeatherDetails = styled.div`
  width: 60%;
  display: grid;
  grid-template-columns: 75% 25%;
  grid-template-areas:
    'temp icon'
    'temp desc';
  
  img {
    grid-area: icon;
    width: 100%;
  }
  
  p {
    grid-area: desc;
    text-align: center;
    font-size: ${({theme}) => theme.fontSize.m};
    margin: 0;
  }
  
  div {
    font-size:${({theme}) => theme.fontSize.xxl};
    color: #ffff;
    grid-area: temp;
    font-weight: bold;
  }
`

const MainInfo = () => {
  const { weatherData } = useContext(WeatherDataContext);
  console.log(weatherData)
  return (
    <StyledMainInfo>
      <Header>{weatherData?.name}</Header>
      <StyledWeatherDetails>
          <div>{convertFarenheitToCelcius(weatherData?.main.temp)}</div>
        <img src={`http://openweathermap.org/img/w/${weatherData?.weather[0].icon}.png`} />
        <p>{weatherData?.weather[0].main}</p>
      </StyledWeatherDetails>
    </StyledMainInfo>
  )
}

export default MainInfo
