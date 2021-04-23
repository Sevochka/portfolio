import React, { FC } from 'react';

type Props = {
  title: string;
  description: string;
  languages: string[] | string;
  link: string;
};

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { createStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      cursor: 'pointer',
      borderColor: 'transparent',
      '&:hover': {
        borderColor: grey['500'],
      },
    },
    title: {
      fontSize: 14,
    },
    description: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      fontSize: 16,
    },
    marginTop: {
      marginTop: theme.spacing(1),
    },
  })
);

const ProjectCard: FC<Props> = ({ title, description, languages }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          className={`${classes.description} ${classes.marginTop}`}
          variant="body2"
        >
          {description}
        </Typography>
        <Typography variant="body2" component="p" className={classes.marginTop}>
          &#60;&#62; {languages}
        </Typography>
      </CardContent>
    </Card>
  );
};

export { ProjectCard };
