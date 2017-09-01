import * from 'action-types';

export default function addPost(post) {
  return {
    type: ADD_POST,
    payload: post,
  }
}

export default function addPost(postId) {
  return {
    type: ADD_POST,
    payload: postId,
  }
}

export default function viewPost(postId) {
  return {
    type: ADD_POST,
    payload: postId,
  }
}

export default function updatePost(postID, newValue) {
  return {
    type: ADD_POST,
    payload: {
      postID,
      newValue
    },
  }
}
