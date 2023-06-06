import styled from 'styled-components';

const Container = styled.li`
  display: flex;
  width: 100%;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
`;

const ButtonContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Name = styled.h4`
  font-size: 20px;
  font-weight: 700;
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.mono.black};
`;

export { Container, ButtonContainer, Name };
