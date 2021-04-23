import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Grid, Typography, TypographyProps } from '@material-ui/core';
import { ProfileLinks } from './ProfileLinks';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
    flex: {
      display: 'flex',
      '& a': {
        marginLeft: theme.spacing(1),
      },
      '& a:hover': {
        textDecoration: 'none',
        color: grey['400'],
      },
    },
  })
);

const Profile = () => {
  const classes = useStyles();

  const typographySameProps: TypographyProps = {
    align: 'left',
    color: 'initial',
  };
  return (
    <Grid
      container
      spacing={2}
      className={classes.root}
      direction="column"
      alignItems="flex-start"
    >
      <Grid item>
        <Avatar
          alt="Avatar"
          src="https://avatars.githubusercontent.com/u/32411350?s=400&u=6570603a9f435bc676ca6a1606d2eb74e6105f68&v=4"
          className={classes.large}
          draggable="false"
          onDragStart={(event) => event.preventDefault()}
        />
      </Grid>
      <Grid item>
        <Typography {...typographySameProps} variant="h6">
          Vsevolod Kochnev
        </Typography>
      </Grid>
      <Grid item>
        <Typography {...typographySameProps} variant="subtitle2">
          Something stupid here
        </Typography>
      </Grid>
      <Grid item>
        <ProfileLinks flexClasses={classes.flex} />
      </Grid>
    </Grid>
  );
};

export { Profile };
