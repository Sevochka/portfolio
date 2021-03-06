import React, { FC } from 'react';
import {
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/DescriptionOutlined';
import CodeIcon from '@material-ui/icons/Code';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { ChevronRightOutlined } from '@material-ui/icons';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';
import KeyboardTabOutlinedIcon from '@material-ui/icons/ForwardOutlined';
import ImageGallery from 'react-image-gallery';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import { ProjFeature, ProjImage, ProjLink } from 'types';
import { red } from '@material-ui/core/colors';
import { CustomizedToolTip } from 'components/shared/CustomTooltip';
const useStyles = makeStyles(() =>
  createStyles({
    listFeatures: {
      marginLeft: 20,
      paddingBottom: 0,
    },
    listItemFeatures: {
      padding: 0,
      cursor: 'pointer',
      width: 'fit-content',
      '& svg': {
        transition: 'all .4s',
      },
      '&:hover': {
        color: grey[500],
        '& svg': {
          transform: 'scale(1.4)',
          color: red[200],
        },
      },
    },
    listItemFeaturesIcon: {
      minWidth: 0,
      marginRight: 5,
    },
    listItemFeaturesTooltip: {
      fontSize: 40,
    },
    listItemFeaturesLink: {
      cursor: 'pointer',
      textDecoration: 'none',
      '&:hover': {
        color: grey['400'],
        textDecoration: 'none',
      },
    },
    linksTypography: {
      marginBottom: 20,
    },
  })
);

type Props = {
  description: string;
  stack: string[];
  features: ProjFeature[];
  links: ProjLink[];
  images: ProjImage[];
};

const ProjectDialogContent: FC<Props> = ({
  description,
  stack,
  features,
  links,
  images,
}) => {
  const classes = useStyles();
  const stackStr = `${stack.join(', ')}.`;
  const featuresMap = features.map(({ tooltipText, text }) => {
    return (
      <ListItem className={classes.listItemFeatures} key={text}>
        <ListItemIcon className={classes.listItemFeaturesIcon}>
          <ChevronRightOutlined />
        </ListItemIcon>
        <CustomizedToolTip
          title={tooltipText}
          className={classes.listItemFeaturesTooltip}
          aria-label="add"
          placement="top-start"
        >
          <ListItemText primary={text} color="inherit" />
        </CustomizedToolTip>
      </ListItem>
    );
  });
  const linksMap = links.map(({ link, title }) => {
    return (
      <ListItem className={classes.listItemFeatures} key={link}>
        <ListItemIcon className={classes.listItemFeaturesIcon}>
          <KeyboardTabOutlinedIcon />
        </ListItemIcon>
        <Link
          href={link}
          target="_blank"
          color="inherit"
          className={classes.listItemFeaturesLink}
        >
          {title}
        </Link>
      </ListItem>
    );
  });

  return (
    <>
      <Typography variant="body1" component="p" gutterBottom>
        <DescriptionIcon
          style={{ marginRight: 5, position: 'relative', top: 5 }}
          color="secondary"
        />
        {description}
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        <CodeIcon
          style={{ marginRight: 5, position: 'relative', top: 5 }}
          color="primary"
        />
        {stackStr}
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        <ListAltIcon
          style={{ marginRight: 5, position: 'relative', top: 5 }}
          color="error"
        />
        ??????????????
        <List
          component="nav"
          aria-label="features"
          className={classes.listFeatures}
        >
          {featuresMap}
        </List>
      </Typography>
      <Typography
        variant="body1"
        component="div"
        className={classes.linksTypography}
      >
        <LinkOutlinedIcon
          style={{ marginRight: 5, position: 'relative', top: 5 }}
          color="action"
        />
        ????????????
        <List
          component="nav"
          aria-label="features"
          className={classes.listFeatures}
        >
          {linksMap}
        </List>
      </Typography>
      <ImageGallery items={images} lazyLoad={true} />
    </>
  );
};

export { ProjectDialogContent };
