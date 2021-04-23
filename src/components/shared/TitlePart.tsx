import React, { FC } from 'react';
import { Grid, SvgIcon, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

type Props = {
  title: string;
  IconComponent: typeof SvgIcon;
};

const useStyles = makeStyles(() =>
  createStyles({
    projectIcon: {
      fontSize: 25,
    },
    title: {
      fontSize: 22,
    },
  })
);

const TitlePart: FC<Props> = ({ IconComponent, title }) => {
  const styles = useStyles();
  return (
    <>
      <Grid container spacing={1} direction="row" alignItems="flex-start">
        <Grid item>
          <IconComponent className={styles.projectIcon} />
        </Grid>
        <Grid item>
          <Typography variant="h2" className={styles.title}>
            {title}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export { TitlePart };
