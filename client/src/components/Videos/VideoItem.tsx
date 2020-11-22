import React, { useState } from 'react';
import { Video } from '../../redux/types';
import {
  Grid,
  Card,
  Typography,
  CardMedia,
  CardContent,
} from '@material-ui/core';
import { VideoModal } from './VideoModal';

export function VideoItem({
  videoId,
  title,
  description,
  thumbnail,
}: Video): JSX.Element {
  const [open, setOpen] = useState(false);

  const handleClose = (): void => {
    setOpen(false);
  };
  const handleOpen = (): void => {
    setOpen(true);
  };
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card onClick={handleOpen}>
        <CardMedia
          image={thumbnail}
          style={{ height: 0, paddingTop: '56.25%' }}
        />
        <CardContent>
          <Typography gutterBottom variant='h5'>
            {title}
          </Typography>
          <Typography variant='body2' color='textSecondary'>
            {description}
          </Typography>
        </CardContent>
      </Card>
      <VideoModal videoId={videoId} open={open} handleClose={handleClose} />
    </Grid>
  );
}
