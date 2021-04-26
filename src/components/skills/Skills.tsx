import React, { FC } from 'react';
import { SkillItem } from 'components/skills/SkillItem';
import ReactIcon from 'assets/atom.png';
import { createStyles, Grid, useMediaQuery } from '@material-ui/core';
import { TitlePart } from 'components/shared/TitlePart';
import SkillsIcon from '@material-ui/icons/AssessmentOutlined';
import { makeStyles, Theme } from '@material-ui/core/styles';

const temporaryData = [
  {
    icon: ReactIcon,
  },
  {
    icon: ReactIcon,
  },
  {
    icon: ReactIcon,
  },
];

const useStyles = makeStyles((theme) =>
  createStyles({
    gridItem: {
      width: '33.333333%',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      gridItem: {
        width: '100%',
      },
    },
  })
);

const Skills: FC = () => {
  const styles = useStyles();
  const matches = useMediaQuery((theme: Theme) =>
    theme.breakpoints.between('xs', 'sm')
  );
  const gridDirection = matches ? 'column' : 'row';

  const mapData = temporaryData.map((skill, i) => (
    <Grid item key={i} className={styles.gridItem}>
      <SkillItem {...skill} />
    </Grid>
  ));
  return (
    <>
      <TitlePart title="Skills" IconComponent={SkillsIcon} />
      <Grid
        container
        spacing={2}
        direction={gridDirection}
        alignItems="flex-start"
      >
        {mapData}
      </Grid>
    </>
  );
};

export { Skills };
