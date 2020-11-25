import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Divider, Grid, makeStyles, Theme } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { Youtube } from '../../redux/types';
import { VideoItem } from './VideoItem';

const useStyles = makeStyles((theme: Theme) => ({
  paginator: {
    justifyContent: 'center',
    padding: '10px',
  },
}));

export function VideoList(): JSX.Element {
  const videos = useSelector((state: Youtube) => state.youtube.videos);
  const classes = useStyles();

  const itemsPerPage = 12;
  const [page, setPage] = useState(1);
  const noOfPages = Math.ceil(videos.length / itemsPerPage);

  const handleChange = (event: any, value: number) => {
    setPage(value);
  };

  const renderVideosList = (): JSX.Element[] => {
    return videos
      .slice((page - 1) * itemsPerPage, page * itemsPerPage)
      .map(({ videoId, thumbnail, title, description }) => (
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
    <div>
      <Grid container spacing={4}>
        {renderVideosList()}
      </Grid>
      <Divider />
      <Pagination
        count={noOfPages}
        page={page}
        onChange={handleChange}
        defaultPage={1}
        color='primary'
        size='large'
        showFirstButton
        showLastButton
        classes={{ ul: classes.paginator }}
      />
    </div>
  );
}
