import ReactDOM from 'react-dom';
import { App } from 'App';
import { MuiThemeProvider } from '@material-ui/core/styles';
import React, { FC } from 'react';
import { useCustomTheme } from 'hooks/useCustomTheme';

const Root: FC = () => {
  const [theme, toggleDarkTheme] = useCustomTheme();

  return (
    <MuiThemeProvider theme={theme}>
      <App toggleDarkTheme={toggleDarkTheme} />
    </MuiThemeProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
