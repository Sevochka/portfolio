import React, { FC, useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import EventEmitter from 'eventemitter3';
import 'react-image-gallery/styles/css/image-gallery.css';
import TitleOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';

type DialogEmitterFunction = (
  title: string,
  contentComponent: React.ReactNode
) => void;
const emitter = new EventEmitter();

export const openDialog: DialogEmitterFunction = (
  title,
  contentComponent
): void => {
  emitter.emit('dialog', title, contentComponent);
};

type Props = {
  fullscreen: boolean;
};
const DialogInfo: FC<Props> = ({ fullscreen }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [
    contentComponent,
    setDialogContentComponent,
  ] = useState<React.ReactNode>(null);
  const showDialog: DialogEmitterFunction = (title, contentComponent) => {
    setOpen(true);
    setTitle(title);
    setDialogContentComponent(contentComponent);
  };
  const closeDialog = () => {
    setOpen(false);
  };
  useEffect(() => {
    emitter.on('dialog', (title: string, contentComponent: React.ReactNode) => {
      showDialog(title, contentComponent);
    });
  }, []);

  return (
    <>
      <Dialog
        open={open}
        onClose={closeDialog}
        aria-labelledby="form-dialog-title"
        fullScreen={fullscreen}
      >
        <DialogTitle id="form-dialog-title" style={{ paddingBottom: 0 }}>
          <TitleOutlinedIcon
            style={{ marginRight: 5, position: 'relative', top: 5 }}
            color="disabled"
          />
          {title}
        </DialogTitle>
        <DialogContent>{contentComponent}</DialogContent>
      </Dialog>
    </>
  );
};

export { DialogInfo };
