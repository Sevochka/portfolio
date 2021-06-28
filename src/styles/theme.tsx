import { createMuiTheme } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';

const sharedTheme = createMuiTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: '0.95rem',
        width: '100%',
        maxWidth: 500,
      },
    },
  },
});

const lightTheme: Theme = createMuiTheme({
  ...sharedTheme,
  palette: {
    type: 'light',
  },
});

const darkTheme: Theme = createMuiTheme({
  ...sharedTheme,
  palette: {
    type: 'dark',
  },
});

export { lightTheme, darkTheme };
