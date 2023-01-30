import React, {useContext} from "react";
import { ViewWrapper } from "../../templates/ViewWrapper/ViewWrapper.styles";
import {WeatherDataContext} from "../../../providers/WeatherDataProvider";


const WeatherData = () => {
    const { weatherData } = useContext(WeatherDataContext);
    if (weatherData) {
        return (
            <ViewWrapper>
                {weatherData ? <>
                    <h1>Current weather: {weatherData.weather[0].main}</h1>
                    <h1>Desc of weather: {weatherData.weather[0].description}</h1>
                    <h1>Icon: {weatherData.weather[0].icon}</h1>
                    <h1>Wind speed: {weatherData.wind.speed}</h1>
                    <h1>Temp: {weatherData.main.temp}</h1>
                    <h1>Feels like: {weatherData.main.feels_like}</h1>
                    <h1>Visibility: {weatherData.visibility}</h1>
                    <h1>Sunrise: {weatherData.sys.sunrise}</h1>
                    <h1>Sunset: {weatherData.sys.sunset}</h1>
                    <h1>Visibility: {weatherData.visibility}</h1>
                </> : <h1>Nothing to show...</h1>
                }
            </ViewWrapper>
        )
    }
}

export default WeatherData;