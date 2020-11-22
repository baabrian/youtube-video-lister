import React from 'react';
import { Video } from '../../redux/types';
import {
  Grid,
  Card,
  CardHeader,
  Typography,
  CardMedia,
  CardContent,
} from '@material-ui/core';

export function VideoItem({
  videoId,
  title,
  description,
  thumbnail,
}: Video): JSX.Element {
  console.log(thumbnail);
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <CardMedia
          image={thumbnail}
          style={{ height: 0, paddingTop: '56.25%' }}
        />
        <CardContent>
          <Typography variant='h5'>{title}</Typography>
          <Typography>{description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
