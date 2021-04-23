import React, { FC } from 'react';
import { TitlePart } from './TitlePart';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';

const Projects: FC = () => {
  return (
    <>
      <TitlePart title="Projects" IconComponent={AppsOutlinedIcon} />
    </>
  );
};

export { Projects };
