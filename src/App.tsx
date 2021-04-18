import React, { useState } from 'react';
import {
  makeStyles,
  createStyles,
  Theme,
  MuiThemeProvider,
} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Profile } from './components/Profile';
import {
  Button,
  Container,
  createMuiTheme,
  CssBaseline,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(3),
    },
  })
);

const App = () => {
  const classes = useStyles();

  const [theme, setTheme] = useState({
    palette: {
      type: 'light',
    },
  });

  // we change the palette type of the theme in state
  const toggleDarkTheme = () => {
    const newPaletteType = theme.palette.type === 'light' ? 'dark' : 'light';
    setTheme({
      palette: {
        type: newPaletteType,
      },
    });
  };

  // we generate a MUI-theme from state's theme object
  const muiTheme: Theme = createMuiTheme(theme as Theme);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Container maxWidth="md" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Profile />
          </Grid>
          <Grid item xs={6}>
            <Button color="primary" onClick={toggleDarkTheme}>
              Toggle theme
            </Button>
          </Grid>
        </Grid>
      </Container>
    </MuiThemeProvider>
  );
};

export { App };
