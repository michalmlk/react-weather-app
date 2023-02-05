import React from 'react'
import { formatDate, convertFarenheitToCelcius } from '../../../utils/utils'
import { StyledForecastWrapper } from './ForecastItem.styles'

const ForecastItem = ({ data }) => {
  return (
    <StyledForecastWrapper>
      <h2>{formatDate(data.dt_txt)}</h2>
      <div>
        <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt='weather_png' />
      </div>
      <p>{convertFarenheitToCelcius(data.main.temp)}</p>
      <p>{data.weather[0].main}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Pressure: {data.main.pressure} hPa</p>
    </StyledForecastWrapper>
  )
}
export default ForecastItem
