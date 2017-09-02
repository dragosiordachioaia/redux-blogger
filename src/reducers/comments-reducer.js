import * as actions from '../actions/action-types';

let crtCommentIndex = 1000;

export default function Comments(state = [], action) {
  switch(action.type) {
    case actions.ADD_COMMENT:
      crtCommentIndex++;
      let newComment = Object.assign({}, action.payload);
      newComment.id = crtCommentIndex;
      return state.concat(newComment);
    case actions.DELETE_COMMENT:
      const newState = state.slice().filter(comment => comment.id !== action.payload);
      return newState;
    default:
      return state;
  }
}
