import styled from 'styled-components';

interface ThemeProps {
  isDarkMode: boolean;
}

const Container = styled.article<ThemeProps>`
  position: fixed;
  bottom: 36px;
  right: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: 20px;
  gap: 8px;
  background-color: ${(props) => props.theme.colors.mono.white};
  ${(props) =>
    props.isDarkMode
      ? `border: 1px solid ${props.theme.colors.mono[400]}`
      : 'box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);'}
`;

const Text = styled.h5`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.mono[400]};
`;

export { Container, Text };
