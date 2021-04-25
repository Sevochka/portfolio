import React, { FC } from 'react';
import { SkillItem } from 'components/skills/SkillItem';
import ReactIcon from 'assets/atom.png';
import { createStyles, Grid } from '@material-ui/core';
import { TitlePart } from 'components/shared/TitlePart';
import SkillsIcon from '@material-ui/icons/AssessmentOutlined';
import { makeStyles } from '@material-ui/core/styles';

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

const useStyles = makeStyles(() =>
  createStyles({
    gridItem: {
      width: '33.333333%',
    },
  })
);

const Skills: FC = () => {
  const styles = useStyles();
  const mapData = temporaryData.map((skill, i) => (
    <Grid item key={i} className={styles.gridItem}>
      <SkillItem {...skill} />
    </Grid>
  ));
  return (
    <>
      <TitlePart title="Skills" IconComponent={SkillsIcon} />
      <Grid container spacing={2} direction="row" alignItems="flex-start">
        {mapData}
      </Grid>
    </>
  );
};

export { Skills };
