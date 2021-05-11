import React, { FC } from 'react';
import { TitlePart } from '../shared/TitlePart';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import { ProjectCard } from './ProjectCard';
import { createStyles, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DialogInfo, openDialog } from 'components/shared/DialogInfo';
import { ProjectDialogContent } from 'components/projects/ProjectDialogContent';
import { projects } from 'data/projects';

type Props = {
  matchesXsToSm: boolean;
};

const useStyles = makeStyles((theme) =>
  createStyles({
    gridProject: {
      width: '50%',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      gridProject: {
        width: '100%',
      },
    },
  })
);

const Projects: FC<Props> = ({ matchesXsToSm }) => {
  const styles = useStyles();

  const handleDialogOpen = (projectId: number) => {
    const project = projects.find((p) => {
      return p.id === projectId;
    });
    if (!project) return;
    const { description, stack, features, links, images } = project;
    if (project)
      return openDialog(
        project.title,
        <ProjectDialogContent
          description={description}
          stack={stack}
          features={features}
          links={links}
          images={images}
        />
      );
  };

  const mapData = projects.map((project) => (
    <Grid item key={project.id} className={styles.gridProject}>
      <ProjectCard {...project} onCardClick={handleDialogOpen} />
    </Grid>
  ));

  const gridDirection = matchesXsToSm ? 'column' : 'row';
  return (
    <>
      <TitlePart title="Projects" IconComponent={AppsOutlinedIcon} />
      <Grid
        container
        spacing={2}
        direction={gridDirection}
        alignItems="flex-start"
      >
        {mapData}
      </Grid>
      <DialogInfo fullscreen={matchesXsToSm} />
    </>
  );
};

export { Projects };
