import React, { useState } from 'react'
import ForecastItem from '../ForecastItem/ForecastItem'
import { ForecastWrapper } from './Forecast.styles'
import { getTommorow } from '../../../utils/utils'
import '@splidejs/splide/dist/css/splide.min.css'
import { StyledSplideSlide } from './Forecast.styles'

const Forecast = ({ data, selectedLanguage }) => {
  const today = new Date(Date.now()).toISOString().substr(0, 10)
  const tommorow = getTommorow()
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth)

  const dailyData = data.list.filter(
    (e) => e.dt_txt.toString().substr(0, 10) === today || e.dt_txt.toString().substr(0, 10) === tommorow
  )

  const handleResize = () => setCurrentWidth(window.innerWidth)

  window.addEventListener('resize', handleResize)

  return (
    <ForecastWrapper
      options={{
        perPage: currentWidth < 520 ? 1 : currentWidth < 720 ? 2 : 3,
      }}
    >
      {dailyData.map((e) => {
        return (
          <StyledSplideSlide key={e.dt}>
            <ForecastItem data={e} selectedLanguage={selectedLanguage} />
          </StyledSplideSlide>
        )
      })}
    </ForecastWrapper>
  )
}

export default Forecast
