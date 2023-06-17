import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from './assets/theme/theme'
import { Homepage } from './components/views/Homepage/Homepage'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  //height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 4rem;
`

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Homepage />
      </Wrapper>
    </ThemeProvider>
  )
}

export default Root
