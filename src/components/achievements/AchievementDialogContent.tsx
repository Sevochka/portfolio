import React, { FC } from 'react';
import {
  Link,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/DescriptionOutlined';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import KeyboardTabOutlinedIcon from '@material-ui/icons/ForwardOutlined';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import { ProjImage, ProjLink } from 'types';
import { red } from '@material-ui/core/colors';
import ImageGallery from 'react-image-gallery';
import { getProjectById } from 'data/projects';
import { openDialog } from 'components/shared/DialogInfo';
import { ProjectDialogContent } from 'components/projects/ProjectDialogContent';
import OpenInBrowserOutlinedIcon from '@material-ui/icons/OpenInBrowserOutlined';
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
  links?: ProjLink[];
  images?: ProjImage[];
  date: Date;
  projectId?: number;
};

const AchievementDialogContent: FC<Props> = ({
  description,
  links,
  images,
  date,
  projectId,
}) => {
  const classes = useStyles();
  let linksMap;

  if (links) {
    linksMap = links.map(({ link, title }) => {
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
  }
  const currentProject = projectId ? getProjectById(projectId) : null;
  const handleDialogOpen = () => {
    if (currentProject) {
      const {
        stack,
        features,
        links,
        images,
        description,
        title,
      } = currentProject;
      return openDialog(
        title,
        <ProjectDialogContent
          description={description}
          stack={stack}
          features={features}
          links={links}
          images={images}
        />
      );
    }
  };

  return (
    <>
      <Typography variant="body1" component="p" gutterBottom>
        <DescriptionIcon
          style={{ marginRight: 5, position: 'relative', top: 5 }}
          color="secondary"
        />
        {description}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        <TodayOutlinedIcon
          style={{ marginRight: 5, position: 'relative', top: 5 }}
          color="primary"
        />
        {date.toLocaleDateString('ru-RU', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </Typography>
      {currentProject ? (
        <Typography variant="body1" component="div">
          <OpenInBrowserOutlinedIcon
            style={{ marginRight: 5, position: 'relative', top: 6 }}
            color="action"
          />
          Проект, участвующий в программе
          <List
            component="nav"
            aria-label="features"
            className={classes.listFeatures}
          >
            <ListItem className={classes.listItemFeatures}>
              <ListItemIcon className={classes.listItemFeaturesIcon}>
                <KeyboardTabOutlinedIcon />
              </ListItemIcon>
              <Link
                color="inherit"
                className={classes.listItemFeaturesLink}
                onClick={handleDialogOpen}
              >
                {currentProject.title}
              </Link>
            </ListItem>
          </List>
        </Typography>
      ) : null}
      {links ? (
        <Typography
          variant="body1"
          component="div"
          className={classes.linksTypography}
        >
          <LinkOutlinedIcon
            style={{ marginRight: 5, position: 'relative', top: 5 }}
            color="action"
          />
          Ссылки
          <List
            component="nav"
            aria-label="features"
            className={classes.listFeatures}
          >
            {linksMap}
          </List>
        </Typography>
      ) : null}
      {images ? (
        <ImageGallery
          items={images}
          lazyLoad={true}
          showThumbnails={false}
          showPlayButton={false}
        />
      ) : null}
    </>
  );
};

export { AchievementDialogContent };
