import styled from 'styled-components';

const ErrorMessage = styled.h6`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.error[500]};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

export { ErrorMessage, Form };
