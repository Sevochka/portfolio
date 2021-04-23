import React, { FC } from 'react';
import { TitlePart } from '../shared/TitlePart';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import { ProjectCard } from './ProjectCard';
import { createStyles, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

const useStyles = makeStyles(() =>
  createStyles({
    gridProject: {
      width: '50%',
    },
  })
);

const Projects: FC = () => {
  const styles = useStyles();
  const mapData = temporaryData.map((project) => (
    <Grid item key={project.id} className={styles.gridProject}>
      <ProjectCard {...project} />
    </Grid>
  ));
  return (
    <>
      <TitlePart title="Projects" IconComponent={AppsOutlinedIcon} />
      <Grid container spacing={2} direction="row" alignItems="flex-start">
        {mapData}
      </Grid>
    </>
  );
};

export { Projects };
