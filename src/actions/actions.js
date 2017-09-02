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

export function updatePost(postID, newValue) {
  return {
    type: actions.UPDATE_POST,
    payload: {
      postID,
      newValue
    },
  }
}

export function addComment(comment) {
  return {
    type: actions.ADD_COMMENT,
    payload: comment,
  }
}

export function deleteComment(commentId) {
  return {
    type: actions.DELETE_COMMENT,
    payload: commentId,
  }
}
