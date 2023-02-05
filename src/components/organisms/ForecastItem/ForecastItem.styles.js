import styled from 'styled-components'
import { ViewWrapper } from '../../templates/ViewWrapper/ViewWrapper.styles'

export const StyledForecastWrapper = styled(ViewWrapper)`
  min-width: 180px;
  height: 240px;
  display: grid;
  grid-template-rows: 20% 35% 25% 10% 10%;
  grid-template-columns: 50% 50%;
  grid-template-areas:
    'date icon'
    'temp .'
    'desc .'
    'press press'
    'hum hum';
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem;

  h2 {
    grid-area: date;
    font-weight: normal;
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  p {
    grid-area: temp;
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: bold;
  }

  p:nth-of-type(2) {
    grid-area: desc;
    font-size: ${({ theme }) => theme.fontSize.m};
    align-content: start;
    font-weight: normal;
  }

  p:nth-of-type(3) {
    font-size: ${({ theme }) => theme.fontSize.s};
    align-content: start;
    font-weight: normal;
    grid-area: press;
  }

  p:nth-of-type(4) {
    font-size: ${({ theme }) => theme.fontSize.s};
    align-content: start;
    font-weight: normal;
    grid-area: hum;
  }

  div {
    width: 100%;
    align-content: center;
    justify-self: center;

    img {
      width: 80px;
      height: 80px;
    }
  }
`