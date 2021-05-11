import React, { FC } from 'react';
import { TitlePart } from '../shared/TitlePart';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import { ProjectCard } from './ProjectCard';
import { createStyles, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DialogInfo, openDialog } from 'components/shared/DialogInfo';
import KTS from 'assets/Diplomas/C3DLabs.jpg';
import { ProjectDialogContent } from 'components/projects/ProjectDialogContent';
import { ProjectData } from 'types';

const temporaryData: ProjectData[] = [
  {
    id: 1,
    title: 'MPU Cloud',
    description: 'Мультифункциональное хранилище электронных моделей изделий.',
    stack: ['React', 'TypeScript', 'ThreeJS', 'MaterialUI', 'Mobx'],
    features: [
      {
        tooltipText: 'Петь песни',
        text: 'Петь песни',
      },
    ],
    links: [{ title: 'Github', link: 'https://github.com' }],
    images: [
      {
        original: KTS,
        thumbnail: KTS,
      },
    ],
  },
  {
    id: 2,
    title: 'Three-IETM',
    description: 'Интерактивное руководство редуктора с анимациями.',
    stack: ['React', 'TypeScript', 'ThreeJS', 'MaterialUI', 'Mobx'],
    features: [
      {
        tooltipText: 'Петь песни',
        text: 'Петь песни',
      },
    ],
    links: [{ title: 'Github', link: 'https://github.com' }],
    images: [
      {
        original: KTS,
        thumbnail: KTS,
      },
    ],
  },
  {
    id: 3,
    title: 'Coronavirus Monitor',
    description: 'Мониторинг заболевших коронавирусом.',
    stack: ['React', 'TypeScript', 'Webpack', 'AntD', 'Highcharts', 'Mobx'],
    features: [
      {
        tooltipText: 'Петь песни',
        text: 'Петь песни',
      },
    ],
    links: [{ title: 'Github', link: 'https://github.com' }],
    images: [
      {
        original: KTS,
        thumbnail: KTS,
      },
    ],
  },
  {
    id: 4,
    title: 'Online Shop',
    description: 'Торговая площадка курсов.',
    stack: ['NodeJS', 'JavaScript', 'Express'],
    features: [
      {
        tooltipText: 'Петь песни',
        text: 'Петь песни',
      },
    ],
    links: [{ title: 'Github', link: 'https://github.com' }],
    images: [
      {
        original: KTS,
        thumbnail: KTS,
      },
    ],
  },
];

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
    const project = temporaryData.find((p) => {
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

  const mapData = temporaryData.map((project) => (
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
      <DialogInfo />
    </>
  );
};

export { Projects };
