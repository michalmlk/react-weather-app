export const convertFarenheitToCelcius = (tempInF) => {
  return `${(tempInF - 273.15).toFixed(1)}°C`
}

export const formatDate = (ts) => {
  return ts.substr(5, 5).split('-').reverse().join('.')
}

export const getTommorow = () => {
  const today = new Date(Date.now()).toISOString().substr(0, 10)
  let tommorow = new Date(today)
  tommorow.setDate(parseInt(today.substr(8, 2)) + 1)

  return tommorow.toISOString().substr(0, 10)
}