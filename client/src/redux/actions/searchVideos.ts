import axios from 'axios';
import { Video, VideoTypes } from '../types';

export const searchVideos = (searchTerm: string) => async (
  dispatch: Function
) => {
  const response = await axios.get('/api/search', { params: { searchTerm } });
  const data: Video[] = response.data;
  dispatch({ type: VideoTypes.FetchVideos, payload: data });
};
