import React from 'react';
import {
  FiCard,
  FiCardActionArea,
  FiCardContent,
  FiCardMedia,
} from 'components/shared/FullImageCard';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import KTS from 'assets/Diplomas/КТС.jpg';
import { grey } from '@material-ui/core/colors';
const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  /**
   * Max Card with for demo
   * same values used in Material-Ui Card Demos
   */
  card: {
    maxWidth: 265,
    minHeight: 150,
    border: '1px solid transparent',
    '&:hover': {
      borderColor: grey['500'],
      '& .makeStyles-fiCardContent-21': {
        top: '20px',
      },
    },
  },

  media: {
    height: '150px',
    backgroundSize: 'contain',
  },
  fiCardContent: {
    color: '#ffffff',
    backgroundColor: 'rgba(0,0,0,.24)',
    top: '-50%',
    transition: '0.9s',
  },
  fiCardContentTextSecondary: {
    color: 'rgba(255,255,255,0.78)',
  },
});

const AchievementItem = () => {
  const classes = useStyles();
  return (
    <>
      <FiCard className={classes.card}>
        <FiCardActionArea>
          <FiCardMedia className={classes.media} image={KTS} />
          <FiCardContent className={classes.fiCardContent}>
            <Typography variant="h5" component="h2">
              KTS
            </Typography>
          </FiCardContent>
        </FiCardActionArea>
      </FiCard>
    </>
  );
};

export { AchievementItem };
