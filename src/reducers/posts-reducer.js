import * as actions from '../actions/action-types';

let crtPostIndex = 100;

export default function PostsReducer(state, action) {
  if(!state) {
    state = [{
      title: 'post 1',
      content: 'body 1',
      id: 1,
    },{
      title: 'post 2',
      content: 'body 2',
      id: 2,
    },{
      title: 'post 3',
      content: 'body 3',
      id: 3,
    }]
  }
  switch(action.type) {
    case actions.ADD_POST:
      crtPostIndex++;
      const newPost = {
        title: action.payload.title,
        content: action.payload.content,
        id: crtPostIndex,
      }
      return state.concat(newPost);
    case actions.DELETE_POST:
      const newState = state.slice().filter(post => post.id !== action.payload);
      return newState;
    default:
      return state;
  }
}
