import { combineReducers } from 'redux';
import PostsReducer from './posts-reducer';
import CommentsReducer from './comments-reducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  comments: CommentsReducer,
});

export default rootReducer;
