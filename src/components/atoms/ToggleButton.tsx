import styled from 'styled-components';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOn: boolean;
}
export const ToggleButton = ({ isOn, ...props }: ButtonProps) => {
  return (
    <Toggle isOn={isOn} {...props}>
      <Circle isOn={isOn} />
    </Toggle>
  );
};
const Toggle = styled.button<ButtonProps>`
  display: block;
  position: relative;
  width: 30px;
  height: 16px;
  border-radius: 16px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.2s;
  padding: 2px;
  ${({ isOn, theme }) =>
    isOn
      ? `background: ${theme.colors.mono[400]};`
      : `background: ${theme.colors.mono[200]};`}
`;

const Circle = styled.span<ButtonProps>`
  position: absolute;
  width: 12px;
  height: 12px;
  left: 2px;
  border-radius: 50%;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.2s;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.colors.mono.white};
  ${({ isOn }) => (isOn ? `left: calc(100% - 14px);` : ``)}
`;
