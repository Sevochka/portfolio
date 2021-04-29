import React, { FC } from 'react';

type Props = {
  title: string;
  description: string;
  stack: string[];
  link: string;
};

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardActionArea, createStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import CodeIcon from '@material-ui/icons/Code';

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
    alignMiddle: {
      verticalAlign: 'middle',
      marginRight: theme.spacing(1),
    },
    codeIcon: {
      fontSize: 19,
    },
  })
);

const ProjectCard: FC<Props> = ({ title, description, stack }) => {
  const classes = useStyles();

  const stackStr = stack.join(', ');
  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
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
          <Typography
            variant="body2"
            component="p"
            className={classes.marginTop}
          >
            <CodeIcon
              className={`${classes.alignMiddle} ${classes.codeIcon}`}
            />
            <span className={classes.alignMiddle}>{stackStr}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export { ProjectCard };
