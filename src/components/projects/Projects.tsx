import React, { FC } from 'react';
import { TitlePart } from '../shared/TitlePart';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import { ProjectCard } from './ProjectCard';
import { createStyles, Grid, useMediaQuery } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

const temporaryData = [
  {
    description: 'Мониторинг заболевших коронавирусом',
    languages: 'Typescript',
    title: 'Coronavirus Monitor',
    link: 'https://vk.com',
    id: 1,
  },
  {
    description: 'Мониторинг заболевших коронавирусом',
    languages: 'Typescript',
    title: 'Coronavirus Monitor',
    link: 'https://vk.com',
    id: 2,
  },
  {
    description: 'Мониторинг заболевших коронавирусом',
    languages: 'Typescript',
    title: 'Coronavirus Monitor',
    link: 'https://vk.com',
    id: 3,
  },
];

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

const Projects: FC = () => {
  const styles = useStyles();
  const matches = useMediaQuery((theme: Theme) =>
    theme.breakpoints.between('xs', 'sm')
  );

  const mapData = temporaryData.map((project) => (
    <Grid item key={project.id} className={styles.gridProject}>
      <ProjectCard {...project} />
    </Grid>
  ));
  return (
    <>
      <TitlePart title="Projects" IconComponent={AppsOutlinedIcon} />
      <Grid
        container
        spacing={2}
        direction={matches ? 'column' : 'row'}
        alignItems="flex-start"
      >
        {mapData}
      </Grid>
    </>
  );
};

export { Projects };
