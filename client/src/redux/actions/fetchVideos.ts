import axios from 'axios';
import { VideoTypes, Video } from '../types';

export const fetchVideos = () => async (dispatch: Function) => {
  const response = await axios.get('/api');
  const data: Video[] = response.data;
  dispatch({ type: VideoTypes.FetchVideos, payload: data });
};
