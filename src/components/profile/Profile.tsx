import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import {
  Grid,
  Typography,
  TypographyProps,
  useMediaQuery,
} from '@material-ui/core';
import { ProfileLinks } from './ProfileLinks';
import grey from '@material-ui/core/colors/grey';
import { getGithubClient } from 'api/github';
import { GitHubClient } from 'types';

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
  const [githubClient, setGithubClient] = useState<GitHubClient>(
    {} as GitHubClient
  );

  useEffect(() => {
    getGithubClient().then((data) => {
      if (data) {
        setGithubClient(data);
      }
    });
  }, []);

  const matches = useMediaQuery((theme: Theme) =>
    theme.breakpoints.between('xs', 'sm')
  );
  const gridDirection = matches ? 'row' : 'column';

  const typographySameProps: TypographyProps = {
    align: 'left',
    color: 'initial',
  };
  return (
    <Grid
      container
      spacing={2}
      className={classes.root}
      direction={gridDirection}
      alignItems="flex-start"
      wrap="nowrap"
    >
      <Grid item>
        <Avatar
          alt="Avatar"
          src={githubClient.avatar_url}
          className={classes.large}
          draggable="false"
          onDragStart={(event) => event.preventDefault()}
        />
      </Grid>
      <Grid spacing={2} container item wrap="nowrap" direction="column">
        <Grid item>
          <Typography {...typographySameProps} variant="h6">
            {githubClient.name}
          </Typography>
        </Grid>
        <Grid item>
          <Typography {...typographySameProps} variant="subtitle2">
            {githubClient.bio}
          </Typography>
        </Grid>
        <Grid item>
          <ProfileLinks flexClasses={classes.flex} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export { Profile };
