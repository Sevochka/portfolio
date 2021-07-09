import React, { FC } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSize } from '@material-ui/core/Grid';
import { Profile } from 'components/profile/Profile';
import {
  Container,
  CssBaseline,
  IconButton,
  useMediaQuery,
} from '@material-ui/core';
import { Projects } from 'components/projects/Projects';
import { Skills } from 'components/skills/Skills';
import { Achievements } from 'components/achievements/Achievements';
import DarkThemeIcon from '@material-ui/icons/Brightness4';
import LightThemeIcon from '@material-ui/icons/BrightnessHigh';

type Props = {
  toggleDarkTheme(): void;
  darkThemeActive: boolean;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(3),
      position: 'relative',
    },
    profileSticky: {
      position: 'sticky',
      top: 0 /* required */,
      width: '100%',
    },
    marginTopSkills: {
      marginTop: theme.spacing(2),
    },
    themeBtn: {
      position: 'absolute',
      zIndex: 100,
    },
    themeBtnRight: {
      right: theme.spacing(2),
    },
    themeBtnLeft: {
      left: theme.spacing(2),
    },
  })
);

const App: FC<Props> = ({ toggleDarkTheme, darkThemeActive }) => {
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
        <IconButton
          className={`${classes.themeBtn} ${
            matchesXsToSm ? classes.themeBtnLeft : classes.themeBtnRight
          }`}
          color="default"
          aria-label="Изменить тему"
          onClick={toggleDarkTheme}
        >
          {darkThemeActive ? <LightThemeIcon /> : <DarkThemeIcon />}
        </IconButton>
        <Grid container spacing={3} direction={gridDirection}>
          <Grid item xs={gridSizeProfile}>
            <div className={classes.profileSticky}>
              <Profile matchesXsToSm={matchesXsToSm} />
            </div>
          </Grid>
          <Grid item xs={gridSizeMain}>
            <Grid item>
              <Projects matchesXsToSm={matchesXsToSm} />
            </Grid>
            <Grid item className={classes.marginTopSkills}>
              <Skills matchesXsToSm={matchesXsToSm} />
            </Grid>
            <Grid item className={classes.marginTopSkills}>
              <Achievements matchesXsToSm={matchesXsToSm} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export { App };
