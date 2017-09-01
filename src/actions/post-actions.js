import * as actions from './action-types.js';

export function addPost(post) {
  return {
    type: actions.ADD_POST,
    payload: post,
  }
}

export function deletePost(postId) {
  return {
    type: actions.DELETE_POST,
    payload: postId,
  }
}

export function viewPost(postId) {
  return {
    type: actions.VIEW_POST,
    payload: postId,
  }
}

export function updatePost(postID, newValue) {
  return {
    type: actions.UPDATE_POST,
    payload: {
      postID,
      newValue
    },
  }
}
