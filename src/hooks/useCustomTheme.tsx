import { useMediaQuery } from '@material-ui/core';
import { useMemo, useState } from 'react';
import { Theme } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from '../styles/theme';

type ReturnType = [Theme, () => void];
// Returns light or dark theme, and a function to toggle dark theme mode.
export const useCustomTheme = (): ReturnType => {
  // Определить какая тема выбрана у пользователя в браузере/в системе.
  const prefersDarkMode: boolean = useMediaQuery(
    '(prefers-color-scheme: dark)'
  );
  const [dark, setDark] = useState<boolean>(prefersDarkMode);

  const theme = useMemo(() => (dark ? darkTheme : lightTheme), [dark]);

  const changeThemeMode = (dark: boolean): void => {
    setDark(dark);
  };

  const toggleDarkTheme = (): void => {
    const dark = theme.palette.type === 'light';
    changeThemeMode(dark);
  };
  return [theme, toggleDarkTheme];
};
