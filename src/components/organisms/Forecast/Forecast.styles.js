import styled from 'styled-components'
import {Splide, SplideSlide} from "@splidejs/react-splide";

export const ForecastWrapper = styled(Splide)`
  display: flex;
  width: 100%;
  max-width: 840px !important;
  justify-content: center;
`

export const StyledSplideSlide = styled(SplideSlide)`
  display: flex;
  justify-content: center;
`;