import styled from "styled-components";
import {ViewWrapper} from "../../templates/ViewWrapper/ViewWrapper.styles";
import {Header} from "../../atoms/Header/Header.styles";

export const StyledMainInfo = styled(ViewWrapper)`
  flex-direction: row;

  ${Header} {
    font-size: ${({theme}) => theme.fontSize.xxl};
    text-align: left;
    line-height: ${({theme}) => theme.fontSize.xxl};
  }
`
export const StyledWeatherDetails = styled.div`
  width: 60%;
  display: grid;
  grid-template-columns: 75% 25%;
  grid-template-areas:
    'temp icon'
    'temp desc';
  
  img {
    grid-area: icon;
    width: 100%;
  }
  
  p {
    grid-area: desc;
    text-align: center;
    font-size: ${({theme}) => theme.fontSize.m};
    margin: 0;
  }
  
  div {
    font-size:${({theme}) => theme.fontSize.xxl};
    color: #ffff;
    grid-area: temp;
    font-weight: bold;
  }
`;