import { Tooltip, TooltipProps } from '@material-ui/core';
import React from 'react';

const CustomizedToolTip: React.FC<TooltipProps> = (props) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const show = () => {
    setOpen(true);
  };

  const hide = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip
        {...props}
        disableHoverListener
        onMouseEnter={() => show()}
        onClick={() => show()}
        onMouseLeave={() => hide()}
        open={open || false}
      >
        {props.children}
      </Tooltip>
    </>
  );
};

export { CustomizedToolTip };
