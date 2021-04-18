import React, { FC } from 'react';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import { Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

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

const Projects: FC = () => {
  const styles = useStyles();
  return (
    <>
      <Grid container spacing={1} direction="row" alignItems="flex-start">
        <Grid item>
          <AppsOutlinedIcon className={styles.projectIcon} />
        </Grid>
        <Grid item>
          <Typography variant="h2" className={styles.title}>
            Projects
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export { Projects };
