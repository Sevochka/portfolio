import React, { FC } from 'react';
import { AchievementItem } from 'components/achievements/AchievementItem';
import { makeStyles } from '@material-ui/core/styles';
import { createStyles, Grid } from '@material-ui/core';

const tempData = ['1', '2', '3'];

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
      <Grid
        container
        spacing={2}
        direction={gridDirection}
        alignItems="flex-start"
      >
        {tempData.map((el) => (
          <Grid item key={el} className={styles.gridItem}>
            <AchievementItem key={el} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export { Achievements };
