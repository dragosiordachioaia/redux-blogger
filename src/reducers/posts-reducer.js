import * as actions from '../actions/action-types';

export default function PostsReducer(state = [], action) {
  switch(action.type) {
    case actions.ADD_POST:
      return state.concat(action.payload);
    default:
      return state;
  }
}
