import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from './assets/theme/theme'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Homepage } from './components/views/Homepage/Homepage'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 4rem;
`

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Routes>
              <Route path="/" element={<Navigate to="/homepage" />} />
              <Route path="/homepage" element={<Homepage />} />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  )
}

export default Root
