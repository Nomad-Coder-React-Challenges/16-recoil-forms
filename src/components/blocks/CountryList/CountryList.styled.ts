import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: start;
  align-items: flex-start;
  width: 100%;
  gap: 8px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.mono.black};
`;

const ListContainer = styled.ul`
  width: 100%;
  list-style-type: none;
  li:nth-of-type(n) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.mono[200]};
  }
  li:nth-last-of-type(1) {
    border-bottom: none;
  }
`;

const NotYet = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.mono[400]};
`;

export { Wrapper, Title, ListContainer, NotYet };
