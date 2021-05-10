import React, { FC, useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Link,
  Typography,
} from '@material-ui/core';
import EventEmitter from 'eventemitter3';
import DescriptionIcon from '@material-ui/icons/DescriptionOutlined';
import CodeIcon from '@material-ui/icons/Code';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import C3d from 'assets/Diplomas/C3DLabs.jpg';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';

import TitleOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import kts from 'assets/Diplomas/КТС.jpg';
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

  const images = [
    {
      original: C3d,
      thumbnail: C3d,
    },
    {
      original: kts,
      thumbnail: kts,
    },
  ];

  return (
    <>
      <Dialog
        open={open}
        onClose={closeDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" style={{ paddingBottom: 0 }}>
          <TitleOutlinedIcon
            style={{ marginRight: 5, position: 'relative', top: 5 }}
            color="disabled"
          />
          {title}
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" component="p" gutterBottom>
            <DescriptionIcon
              style={{ marginRight: 5, position: 'relative', top: 5 }}
              color="secondary"
            />
            Облако разрабатывалось для того, чтобы приносить раджость и пони
            голубых а еще песть песни и там там.{jsxContent}
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            <CodeIcon
              style={{ marginRight: 5, position: 'relative', top: 5 }}
              color="primary"
            />
            React, Redux, MobX
          </Typography>
          <Typography variant="body1" component="p">
            <LinkOutlinedIcon
              style={{ marginRight: 5, position: 'relative', top: 5 }}
              color="action"
            />
            <Link href="https://mpu-cloud.ru/" target="_blank" color="inherit">
              mpu-cloud.ru
            </Link>
          </Typography>
          <Typography
            variant="body1"
            component="p"
            style={{ marginBottom: 30 }}
          >
            <GitHubIcon
              style={{ marginRight: 5, position: 'relative', top: 5 }}
              color="action"
            />
            <Link href="https://github.com/" target="_blank" color="inherit">
              @mpu-cloud
            </Link>
          </Typography>
          <ImageGallery items={images} lazyLoad={true} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export { DialogInfo };
