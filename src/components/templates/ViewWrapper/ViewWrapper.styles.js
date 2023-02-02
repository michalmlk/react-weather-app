import styled from 'styled-components';

export const ViewWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background__dark};
  width: 100%;
  border-radius: 8px;
  max-width: 768px;
  margin: 20px;
  box-shadow: -5px 10px 15px rgba(0, 0, 0, 0.2);
`;