import React, { FC } from 'react';
import {
  FiCard,
  FiCardActionArea,
  FiCardContent,
  FiCardMedia,
} from 'components/shared/FullImageCard';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { grey } from '@material-ui/core/colors';
const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    backgroundColor: 'rgba(0,0,0,.55)',
    top: '-50%',
    transition: '0.9s',
    padding: 10,
  },
  fiCardContentTextSecondary: {
    color: 'rgba(255,255,255,0.78)',
  },
  cardTitle: {
    fontSize: '0.9rem',
  },
});

type Props = {
  image: string;
  title: string;
};

const AchievementItem: FC<Props> = ({ image, title }) => {
  const classes = useStyles();
  return (
    <>
      <FiCard className={classes.card}>
        <FiCardActionArea>
          <FiCardMedia className={classes.media} image={image} />
          <FiCardContent className={classes.fiCardContent}>
            <Typography
              variant="h6"
              component="h2"
              className={classes.cardTitle}
            >
              {title}
            </Typography>
          </FiCardContent>
        </FiCardActionArea>
      </FiCard>
    </>
  );
};

export { AchievementItem };
