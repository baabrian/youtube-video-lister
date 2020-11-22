import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import { Youtube } from '../../redux/types';
import { VideoItem } from './VideoItem';

export function VideoList(): JSX.Element {
  const videos = useSelector((state: Youtube) => state.youtube.videos);

  const renderVideosList = () => {
    return videos.map(({ videoId, thumbnail, title, description }) => (
      <VideoItem
        videoId={videoId}
        thumbnail={thumbnail}
        title={title}
        description={description}
        key={videoId}
      />
    ));
  };

  return (
    <Grid container spacing={4}>
      {renderVideosList()}
    </Grid>
  );
}
