import React, { FC } from 'react';
import { AchievementItem } from 'components/achievements/AchievementItem';
import { makeStyles } from '@material-ui/core/styles';
import { createStyles, Grid } from '@material-ui/core';
import { TitlePart } from 'components/shared/TitlePart';
import StarIcon from '@material-ui/icons/StarBorderOutlined';
import KTS from 'assets/Diplomas/КТС.jpg';
import C3DLabs from 'assets/Diplomas/C3DLabs.jpg';
import Forge from 'assets/Diplomas/Forge.jpg';
import Smithy from 'assets/Diplomas/Кузница.jpg';
import CISCO from 'assets/Diplomas/СИСКО.jpg';

const tempData = [
  {
    image: KTS,
    title: 'KTS Frontend-developer',
  },
  {
    image: C3DLabs,
    title: 'C3D Labs Developton',
  },
  {
    image: Forge,
    title: 'Autodesk 3D Hackathon',
  },
  {
    image: Smithy,
    title: 'MPU 3D Hackathon',
  },
  {
    image: CISCO,
    title: 'CISCO IT Essentials',
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

const Achievements: FC<Props> = ({ matchesXsToSm }) => {
  const styles = useStyles();
  const gridDirection = matchesXsToSm ? 'column' : 'row';
  return (
    <>
      <TitlePart title="Achievements" IconComponent={StarIcon} />
      <Grid
        container
        spacing={2}
        direction={gridDirection}
        alignItems="flex-start"
      >
        {tempData.map((el) => (
          <Grid item key={el.title} className={styles.gridItem}>
            <AchievementItem image={el.image} title={el.title} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export { Achievements };
