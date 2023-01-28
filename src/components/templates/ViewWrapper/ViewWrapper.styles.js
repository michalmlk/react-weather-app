import styled from 'styled-components';

export const ViewWrapper = styled.div`
  margin: 25px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  padding: 40px 50px;
  border-radius: 25px;
  max-height: 100vh;
  max-width: 768px;
`;