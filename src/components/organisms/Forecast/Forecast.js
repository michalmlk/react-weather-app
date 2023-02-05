import React from 'react'
import ForecastItem from '../ForecastItem/ForecastItem'
import { ForecastWrapper } from './Forecast.styles'
import { getTommorow } from '../../../utils/utils'

const Forecast = ({ data }) => {
  const today = new Date(Date.now()).toISOString().substr(0, 10)
  const tommorow = getTommorow()

  const dailyData = data.list.filter(
    (e) => e.dt_txt.toString().substr(0, 10) === today || e.dt_txt.toString().substr(0, 10) === tommorow
  )

  return (
    <ForecastWrapper>
      {dailyData.map((e) => {
        return <ForecastItem data={e} key={e.dt} />
      })}
    </ForecastWrapper>
  )
}

export default Forecast
