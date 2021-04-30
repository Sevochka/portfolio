import React, { FC, useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import EventEmitter from 'eventemitter3';

type DialogEmitterFunction = (
  title: string,
  jsxContent: React.ReactNode
) => void;
const emitter = new EventEmitter();

export const openDialog: DialogEmitterFunction = (title, jsxContent): void => {
  emitter.emit('dialog', title, jsxContent);
};

const DialogInfo: FC<Record<string, never>> = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [jsxContent, setJsxContent] = useState<React.ReactNode>(null);

  const showDialog: DialogEmitterFunction = (title, jsxContent) => {
    setOpen(true);
    setTitle(title);
    setJsxContent(jsxContent);
  };
  const closeDialog = () => {
    setOpen(false);
  };
  useEffect(() => {
    emitter.on('dialog', (title: string, jsxContent: React.ReactNode) => {
      showDialog(title, jsxContent);
    });
  }, []);
  return (
    <>
      <Dialog
        open={open}
        onClose={closeDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{jsxContent}</DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export { DialogInfo };
