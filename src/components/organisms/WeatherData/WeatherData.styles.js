import styled from "styled-components";
import { ViewWrapper} from "../../templates/ViewWrapper/ViewWrapper.styles";

export const StyledDetails = styled(ViewWrapper)`
  gap: 2rem;
  color: ${({theme}) => theme.colors.white};
`;

export const StyledButton = styled.button`
  width: 50px;
  height: 50px;
  align-self: center;
  border: none;
  background-color: transparent;
  font-size: ${({theme}) => theme.fontSize.xl};
  color: ${({theme}) => theme.colors.white};
  transition: all 0.5s ease;
  transform: ${(props) => props.isExpanded ? 'rotate(180deg)' : 'rotate(0)'};
  cursor: pointer;
`;

export const StyledBaseInfo = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  font-size: ${({theme}) => theme.fontSize.xl};
`;