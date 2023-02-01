import React, {useContext, useState} from 'react'
import { StyledDetails, StyledBaseInfo, StyledButton } from './WeatherData.styles'
import { WeatherDataContext } from '../../../providers/WeatherDataProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind, faEye, faSun, faMoon, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { convertMilisecondsToTime } from '../../../utils/utils'

const WeatherData = () => {
  const { weatherData } = useContext(WeatherDataContext);

  const [isExpanded, setIsExpanded] = useState(false);

  const expandInfoHandler = () => {
    setIsExpanded(prevState => !prevState)
  }

  if (weatherData) {
    const sunrise = convertMilisecondsToTime(weatherData.sys.sunrise)
    const sunset = convertMilisecondsToTime(weatherData.sys.sunset)
    return (
      <StyledDetails>
        {weatherData ? (
          <StyledBaseInfo>
            <span>
              <FontAwesomeIcon icon={faWind} /> {weatherData.wind.speed}
            </span>
            <span>
              <FontAwesomeIcon icon={faEye} /> {weatherData.visibility}
            </span>
            <span>
              <FontAwesomeIcon icon={faSun} /> {sunrise}
            </span>
            <span>
              <FontAwesomeIcon icon={faMoon} /> {sunset}
            </span>
          </StyledBaseInfo>
        ) : (
          <h1>Nothing to show...</h1>
        )}
        <StyledButton isExpanded={isExpanded} onClick={expandInfoHandler}><FontAwesomeIcon icon={faChevronDown}/></StyledButton>
      </StyledDetails>
    )
  }
}

export default WeatherData
