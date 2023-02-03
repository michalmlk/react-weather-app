export const convertFarenheitToCelcius = (tempInF) => {
    return `${(tempInF - 273.15).toFixed(1)}°C`
}

export const convertMilisecondsToTime = (ts) => {
    return new Date(ts).toLocaleTimeString();
}