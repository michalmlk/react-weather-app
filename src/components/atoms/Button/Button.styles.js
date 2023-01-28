import styled from "styled-components";

export const Button = styled.button`
  border-radius: 10px;
  width: 100px;
  font-size: ${({theme}) => theme.fontSize.s};
  border-color: transparent;
  cursor: pointer;
  background-color: ${(props) => props.isPrimary ? `${({theme}) => theme.colors.primary}` : `#fffffff`};
  
  &:hover {
    background-color: #95fab2;
`;