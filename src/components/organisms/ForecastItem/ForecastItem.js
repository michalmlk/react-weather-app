import React from 'react'
import { getHourFromDate, convertFarenheitToCelcius } from '../../../utils/utils'
import { StyledForecastWrapper } from './ForecastItem.styles'
import { languages } from '../../../utils/translations'

const ForecastItem = ({ data, selectedLanguage }) => {
  return (
    <StyledForecastWrapper>
      <h2>{getHourFromDate(data.dt_txt)}</h2>
      <div>
        <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt='weather_png' />
      </div>
      <p>{convertFarenheitToCelcius(data.main.temp)}</p>
      <p>{data.weather[0].main}</p>
      <p>
        {languages[`${selectedLanguage}`].humidity}: {data.main.humidity}%
      </p>
      <p>
        {languages[`${selectedLanguage}`].pressure}: {data.main.pressure} hPa
      </p>
    </StyledForecastWrapper>
  )
}
export default ForecastItem
