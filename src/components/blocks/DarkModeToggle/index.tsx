import usePrefersColorScheme from '#hooks/usePrefersColorScheme';
import { ThemeState } from '#src/stores/appStateStore';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { Container, Text } from './DarkModeToggle.styled';
import { ToggleButton } from '#components/atoms';

const DarkModeToggle = () => {
  const { preferDarkMode, isDarkMode } = usePrefersColorScheme();
  const [isOn, setIsOn] = useState(preferDarkMode);
  const setThemeState = useSetRecoilState(ThemeState);

  const themeText = isDarkMode ? 'Light' : 'Dark';

  const handleThemeClick = () => {
    setIsOn((prev) => !prev);
    setThemeState(isOn ? 'light' : 'dark');
  };
  return (
    <Container isDarkMode={isDarkMode}>
      <Text>{themeText} Mode</Text>
      <ToggleButton isOn={isOn} onClick={handleThemeClick} />
    </Container>
  );
};

export default DarkModeToggle;
