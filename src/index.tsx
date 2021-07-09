import ReactDOM from 'react-dom';
import { App } from 'App';
import { MuiThemeProvider } from '@material-ui/core/styles';
import React, { FC } from 'react';
import { useCustomTheme } from 'hooks/useCustomTheme';

const Root: FC = () => {
  const [theme, toggleDarkTheme] = useCustomTheme();
  const darkThemeActive = theme.palette.type === 'dark';
  return (
    <MuiThemeProvider theme={theme}>
      <App
        toggleDarkTheme={toggleDarkTheme}
        darkThemeActive={darkThemeActive}
      />
    </MuiThemeProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
