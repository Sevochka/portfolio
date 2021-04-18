import { createMuiTheme } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';

const lightTheme: Theme = createMuiTheme({
  palette: { type: 'light' },
});

const darkTheme: Theme = createMuiTheme({
  palette: { type: 'dark' },
});

export { lightTheme, darkTheme };
