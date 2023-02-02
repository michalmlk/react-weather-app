import styled from "styled-components";
import {Header} from "../../atoms/Header/Header.styles";

export const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  
  p {
    font-size: ${({theme}) => theme.fontSize.l};
  }
`

export const StyledWeather = styled.div`
  display: grid;
  padding: 1.2rem 2rem;
  min-height: 250px;
  grid-template-columns: 75% 25%;
  grid-template-rows: 22% 8% 25% 45%;
  grid-template-areas: "city icon"
                       "desc icon"
                       "temp .   "
                       "details .";
  
  ${Header} {
    font-size: ${({theme}) => theme.fontSize.xxl};
    text-align: left;
    line-height: ${({theme}) => theme.fontSize.xxl};
    grid-area: city;
  }
  
  img {
    display: block;
    grid-area: icon;
    width: 80%;
  }
  
  p {
    grid-area: desc;
    text-align: left;
    font-size: ${({theme}) => theme.fontSize.m};
    margin: 0;
    color: #ffff;
  }
  
  div {
    font-size:${({theme}) => theme.fontSize.xxl};
    color: #ffff;
    grid-area: temp;
  }
  
  ${StyledDetails} {
    grid-area: details;
    margin-top: 1rem;
    font-weight: normal;
  }
`;