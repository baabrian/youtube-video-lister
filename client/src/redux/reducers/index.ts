import { combineReducers } from 'redux';
import { videoReducer } from './videosReducer';

export default combineReducers({
  youtube: videoReducer,
});
