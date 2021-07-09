import React, { FC } from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActionArea,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

type Props = {
  icon: string;
  cardContentText: string;
  link: string;
};
const useStyles = makeStyles({
  root: {
    cursor: 'pointer',
    borderColor: 'transparent',
    textAlign: 'center',
    '&:hover': {
      transform: 'scale(1.005)',
      borderColor: grey['500'],
    },
  },
  media: {
    height: 140,
    backgroundSize: 'contain',
    marginTop: 10,
  },
});

const SkillItem: FC<Props> = ({ icon, cardContentText, link }) => {
  const classes = useStyles();
  const handleCardClick = () => {
    window.open(link, '_blank');
  };
  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea onClick={handleCardClick}>
        <CardMedia className={classes.media} image={icon} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {cardContentText}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export { SkillItem };
