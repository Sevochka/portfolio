import React, { FC } from 'react';
import { SkillItem } from 'components/skills/SkillItem';
import ReactImage from 'assets/react-js-logo.png';
import ThreeImage from 'assets/three-js-logo.png';
import NodeImage from 'assets/node-js-logo.png';
import { createStyles, Grid } from '@material-ui/core';
import { TitlePart } from 'components/shared/TitlePart';
import SkillsIcon from '@material-ui/icons/AssessmentOutlined';
import { makeStyles } from '@material-ui/core/styles';

const temporaryData = [
  {
    icon: ReactImage,
    cardContentText: 'I love React and use it every single day.',
  },
  {
    icon: ThreeImage,
    cardContentText: 'I have experience in three.js and its awesome.',
  },
  {
    icon: NodeImage,
    cardContentText: 'Sometimes I use node.js cause I can.',
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

type Props = {
  matchesXsToSm: boolean;
};

const Skills: FC<Props> = ({ matchesXsToSm }) => {
  const styles = useStyles();
  const gridDirection = matchesXsToSm ? 'column' : 'row';

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
