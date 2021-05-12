import React, { FC, useEffect, useState } from 'react';
import {
  AppBar,
  Dialog,
  DialogContent,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import EventEmitter from 'eventemitter3';
import 'react-image-gallery/styles/css/image-gallery.css';
import { createStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

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
const useStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      position: 'relative',
      backgroundColor: 'inherit',
      color: theme.palette.type === 'dark' ? 'white' : 'black',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    toolbarDesktopView: {
      flexDirection: 'row-reverse',
    },
    toolbarMobileView: {
      flexDirection: 'row',
    },
  })
);

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
  const classes = useStyles();
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
        maxWidth="md"
        fullScreen={fullscreen}
      >
        <AppBar className={classes.appBar}>
          <Toolbar
            className={`${
              fullscreen
                ? classes.toolbarMobileView
                : classes.toolbarDesktopView
            }`}
          >
            <IconButton
              edge="start"
              color="inherit"
              onClick={closeDialog}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>

        <DialogContent>{contentComponent}</DialogContent>
      </Dialog>
    </>
  );
};

export { DialogInfo };
