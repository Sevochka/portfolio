import React, { FC } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSize } from '@material-ui/core/Grid';
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
    profileSticky: {
      position: 'sticky',
      top: 0 /* required */,
    },
  })
);

const App: FC<Props> = ({ toggleDarkTheme }) => {
  const classes = useStyles();

  const matches = useMediaQuery((theme: Theme) =>
    theme.breakpoints.between('xs', 'sm')
  );
  const gridDirection = matches ? 'column' : 'row';

  const gridSizeProfile: GridSize = matches ? 12 : 4;
  const gridSizeMain: GridSize = matches ? 12 : 8;

  return (
    <>
      <CssBaseline />
      <Container maxWidth={'lg'} className={classes.container}>
        <Grid container spacing={3} direction={gridDirection}>
          <Grid item xs={gridSizeProfile}>
            <div className={classes.profileSticky}>
              <Profile />
              <Button color="primary" onClick={toggleDarkTheme}>
                Toggle theme
              </Button>
            </div>
          </Grid>
          <Grid item xs={gridSizeMain}>
            <Grid spacing={3} direction="column">
              <Grid item>
                <Projects />
              </Grid>
              <Grid item>
                <Skills />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export { App };
