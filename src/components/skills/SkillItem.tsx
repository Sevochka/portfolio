import React, { FC } from 'react';
import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
  icon: string;
};
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    textAlign: 'center',
    paddingTop: 10,
  },
  media: {
    height: 140,
    backgroundSize: 'contain',
  },
});

const SkillItem: FC<Props> = ({ icon }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={icon} title="React" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          I love React and use it every single day.
        </Typography>
      </CardContent>
    </Card>
  );
};

export { SkillItem };
