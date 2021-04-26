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
      width: '100%',
    },
    marginTopSkills: {
      marginTop: theme.spacing(2),
    },
  })
);

const App: FC<Props> = ({ toggleDarkTheme }) => {
  const classes = useStyles();

  const matchesXsToSm = useMediaQuery((theme: Theme) =>
    theme.breakpoints.between('xs', 'sm')
  );
  const gridDirection = matchesXsToSm ? 'column' : 'row';

  const gridSizeProfile: GridSize = matchesXsToSm ? 12 : 4;
  const gridSizeMain: GridSize = matchesXsToSm ? 12 : 8;

  return (
    <>
      <CssBaseline />
      <Container maxWidth={'lg'} className={classes.container}>
        <Grid container spacing={3} direction={gridDirection}>
          <Grid item xs={gridSizeProfile}>
            <div className={classes.profileSticky}>
              <Profile matchesXsToSm={matchesXsToSm} />
              <Button color="primary" onClick={toggleDarkTheme}>
                Toggle theme
              </Button>
            </div>
          </Grid>
          <Grid item xs={gridSizeMain}>
            <Grid item>
              <Projects matchesXsToSm={matchesXsToSm} />
            </Grid>
            <Grid item className={classes.marginTopSkills}>
              <Skills matchesXsToSm={matchesXsToSm} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export { App };
