import { VideosInfo, VideoTypes, VideoActionTypes } from '../types';

const INITIAL_STATE = {
  videos: [],
};

export const videoReducer = (
  state = INITIAL_STATE,
  action: VideoActionTypes
): VideosInfo => {
  switch (action.type) {
    case VideoTypes.FetchVideos: {
      return {
        videos: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
