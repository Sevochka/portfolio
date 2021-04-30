import React, { FC } from 'react';

type Props = {
  title: string;
  description: string;
  stack: string[];
  link: string;
  onCardClick: (id: number) => void;
  id: number;
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
      fontSize: 16,
    },
    overflowEllipsis: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
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

const ProjectCard: FC<Props> = ({
  id,
  title,
  description,
  stack,
  onCardClick,
}) => {
  const classes = useStyles();
  const handleCardClick = () => {
    onCardClick(id);
  };
  const stackStr = stack.join(', ');
  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea onClick={handleCardClick}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {title}
          </Typography>
          <Typography
            className={`${classes.description} ${classes.marginTop} ${classes.overflowEllipsis}`}
            variant="body2"
          >
            {description}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            className={`${classes.marginTop} ${classes.overflowEllipsis}`}
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
