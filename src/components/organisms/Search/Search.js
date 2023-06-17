import React, { useState } from 'react'
import { geoOptions } from '../../../utils/api'
import { AsyncPaginate } from 'react-select-async-paginate'
import styled from 'styled-components'

const StyledAsyncPaginate = styled(AsyncPaginate)`
  width: 100%;
  max-width: 768px;
  margin-bottom: 20px;
`

const Search = ({ onSearchChange }) => {
  const [searchPhrase, setSearchPhrase] = useState(null)

  const loadOptions = (inputVal) => {
    return fetch(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${inputVal}`,
      geoOptions
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} ${city.countryCode}`,
            }
          }),
        }
      })
      .catch((err) => console.error(err))
  }

  const handleInputChange = (inputValue) => {
    setSearchPhrase(inputValue)
    onSearchChange(inputValue)
  }

  return (
    <StyledAsyncPaginate
      loadOptions={loadOptions}
      placeholder='Type cityname'
      debounceTimeout={500}
      onChange={handleInputChange}
      value={searchPhrase}
    />
  )
}

export default Search
