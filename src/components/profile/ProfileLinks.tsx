import React, { FC } from 'react';
import { Grid, Link } from '@material-ui/core';
import TelegramIcon from '@material-ui/icons/Telegram';
import GroupIcon from '@material-ui/icons/GroupOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';

type Props = {
  flexClasses: string;
};
const ProfileLinks: FC<Props> = ({ flexClasses }) => {
  return (
    <Grid container spacing={1} direction="column" alignItems="flex-start">
      <Grid item className={flexClasses}>
        <GitHubIcon fontSize="small" />
        <Link
          href="https://github.com/Sevochka"
          color="inherit"
          target="_blank"
        >
          @sevochka
        </Link>
      </Grid>
      <Grid item className={flexClasses}>
        <TelegramIcon fontSize="small" />
        <Link href="https://t.me/Sevka1337" color="inherit" target="_blank">
          @sevka1337
        </Link>
      </Grid>
      <Grid item className={flexClasses}>
        <GroupIcon fontSize="small" />
        <Link href="http://team.mpu-cloud.ru/" color="inherit" target="_blank">
          @mpu-team
        </Link>
      </Grid>
    </Grid>
  );
};

export { ProfileLinks };
