import React, { FC } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Profile } from 'components/profile/Profile';
import {
  Button,
  Container,
  CssBaseline,
  useMediaQuery,
} from '@material-ui/core';
import { Projects } from 'components/projects/Projects';
import { Skills } from 'components/skills/Skills';

type Props = {
  toggleDarkTheme(): void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(3),
    },
  })
);

const App: FC<Props> = ({ toggleDarkTheme }) => {
  const classes = useStyles();

  const matches = useMediaQuery('(min-width:600px)');
  const gridDirection = matches ? 'row' : 'column';

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" className={classes.container}>
        <Grid container spacing={3} direction={gridDirection}>
          <Grid item xs={4}>
            <Profile />
            <Button color="primary" onClick={toggleDarkTheme}>
              Toggle theme
            </Button>
          </Grid>
          <Grid item xs={8}>
            <Projects />
            <Skills />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export { App };
