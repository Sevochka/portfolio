import React, { FC } from 'react';
import { TitlePart } from '../shared/TitlePart';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import { ProjectCard } from './ProjectCard';
import { createStyles, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DialogInfo, openDialog } from 'components/shared/DialogInfo';

const temporaryData = [
  {
    title: 'MPU Cloud',
    description: 'Мультифункциональное хранилище электронных моделей изделий.',
    stack: ['React', 'TypeScript', 'ThreeJS', 'MaterialUI', 'Mobx'],
    link: 'https://vk.com',
    id: 1,
    jsxDialogContent: <>Описание. Технологии.</>,
  },
  {
    title: 'Three-IETM',
    description: 'Интерактивное руководство редуктора с анимациями.',
    stack: ['React', 'TypeScript', 'ThreeJS', 'MaterialUI', 'Mobx'],
    link: 'https://vk.com',
    id: 2,
    jsxDialogContent: <>Hello</>,
  },
  {
    title: 'Coronavirus Monitor',
    description: 'Мониторинг заболевших коронавирусом.',
    stack: ['React', 'TypeScript', 'Webpack', 'AntD', 'Highcharts', 'Mobx'],
    link: 'https://vk.com',
    id: 3,
    jsxDialogContent: <>Hello</>,
  },
  {
    title: 'Online Shop',
    description: 'Торговая площадка курсов.',
    stack: ['NodeJS', 'JavaScript', 'Express'],
    link: 'https://vk.com',
    id: 4,
    jsxDialogContent: <>Hello</>,
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
    if (project) return openDialog(project.title, project.jsxDialogContent);
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
