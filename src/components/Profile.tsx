import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  })
);

const Profile = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root} direction="column">
      <Grid item xs>
        <Avatar
          alt="Avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"
          className={classes.large}
        />
      </Grid>
      <Grid item xs>
        <Typography variant="h5" color="primary">
          Vsevolod Kochnev
        </Typography>
      </Grid>
      <Grid item xs>
        <Typography variant="h6" color="secondary">
          Something stupid here
        </Typography>
      </Grid>
    </Grid>
  );
};

export { Profile };
