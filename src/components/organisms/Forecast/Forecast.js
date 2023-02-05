import React from 'react'
import ForecastItem from '../ForecastItem/ForecastItem'
import { ForecastWrapper } from './Forecast.styles'
import { getTommorow } from '../../../utils/utils'
import '@splidejs/splide/dist/css/splide.min.css'
import { StyledSplideSlide } from "./Forecast.styles";

const Forecast = ({ data }) => {
  const today = new Date(Date.now()).toISOString().substr(0, 10)
  const tommorow = getTommorow()

  const dailyData = data.list.filter(
    (e) => e.dt_txt.toString().substr(0, 10) === today || e.dt_txt.toString().substr(0, 10) === tommorow
  )

  return (
    <ForecastWrapper options={{
      perPage: 3
    }}>
        {dailyData.map((e) => {
          return (
            <StyledSplideSlide key={e.dt}>
              <ForecastItem data={e} />
            </StyledSplideSlide>
          )
        })}
    </ForecastWrapper>
  )
}

export default Forecast
