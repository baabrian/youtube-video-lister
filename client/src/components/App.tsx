import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchVideos } from '../redux/actions/fetchVideos';
import { Container } from '@material-ui/core';
import { SearchBar } from './Search/SearchBar';
import { VideoList } from './Videos/VideoList';

import './App.css';

function App(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);
  return (
    <Container>
      <SearchBar />
      <VideoList />
    </Container>
  );
}

export default App;
