import { createMuiTheme } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';

const lightTheme: Theme = createMuiTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: '2rem',
      },
    },
  },
  palette: {
    type: 'light',
  },
});

const darkTheme: Theme = createMuiTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: '0.95rem',
        width: '100%',
        maxWidth: 500,
      },
    },
  },
  palette: {
    type: 'dark',
  },
});

export { lightTheme, darkTheme };
