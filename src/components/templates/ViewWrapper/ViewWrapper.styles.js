import styled from 'styled-components';

export const ViewWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  padding: 30px;
  border-radius: 15px;
  max-width: 768px;
  margin: 20px;
`;