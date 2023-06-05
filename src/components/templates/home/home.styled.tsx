import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: start;
  align-items: center;
  width: 100%;
  gap: 36px;
  padding: 36px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: ${props => props.theme.colors.mono.black};
`;

export { Wrapper, Title };