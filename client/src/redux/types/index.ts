export enum VideoTypes {
  FetchVideos = 'FETCH_VIDEOS',
  SearchVideos = 'SEARCH_VIDEOS',
}

export type VideosInfo = {
  videos: Video[];
};

export type Video = {
  videoId: string;
  title: string;
  description: string;
  thumbnail: string;
};

export type Youtube = {
  youtube: VideosInfo;
};

type VideoActionFetchType = {
  type: VideoTypes.FetchVideos;
  payload: Video[];
};

type VideoActionSearchType = {
  type: VideoTypes.SearchVideos;
  payload: Video[];
};

export type VideoActionTypes = VideoActionFetchType | VideoActionSearchType;
