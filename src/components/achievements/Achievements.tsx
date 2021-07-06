import React, { FC } from 'react';
import { AchievementItem } from 'components/achievements/AchievementItem';
import { makeStyles } from '@material-ui/core/styles';
import { createStyles, Grid } from '@material-ui/core';
import { TitlePart } from 'components/shared/TitlePart';
import StarIcon from '@material-ui/icons/StarBorderOutlined';
import { openDialog } from 'components/shared/DialogInfo';
import { AchievementDialogContent } from 'components/achievements/AchievementDialogContent';
import { achievements } from 'data/achievements';

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
  const handleDialogOpen = (achievementTitle: string) => {
    const achievement = achievements.find((a) => {
      return a.title === achievementTitle;
    });
    if (!achievement) return;
    const { description, title, images, date, links, projectId } = achievement;
    return openDialog(
      title,
      <AchievementDialogContent
        description={description}
        images={images}
        projectId={projectId}
        date={date}
        links={links}
      />
    );
  };
  return (
    <>
      <TitlePart title="Achievements" IconComponent={StarIcon} />
      <Grid
        container
        spacing={2}
        direction={gridDirection}
        alignItems="flex-start"
      >
        {achievements.map((el) => {
          const image = el.thumbnailImage
            ? el.thumbnailImage
            : el.images[0].original;
          return (
            <Grid item key={el.title} className={styles.gridItem}>
              <AchievementItem
                image={image}
                title={el.title}
                onItemClick={handleDialogOpen}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export { Achievements };
