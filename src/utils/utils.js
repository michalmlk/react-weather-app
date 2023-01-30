export const convertFarenheitToCelcius = (tempInF) => {
    return `${(tempInF - 273.15).toFixed(1)}°C`
}