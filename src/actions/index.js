import { browserHistory } from 'react-router';

// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  // CREATE_POST: 'CREATE_POST',
  // UPDATE_POST: 'UPDATE_POST',
  // DELETE_POST: 'DELETE_POST',
};

export function fetchPosts() {
/* axios get */
  return (dispatch) => {
   // can now dispatch stuff
    dispatch({ type: 'FETCH_POSTS', payload: { stuff: '' } });
  };
}

export function createPost(post) {
/* axios post */
}

export function updatePost(post) {
/* axios put */
}

export function fetchPost(id) {
/* axios get */
  return (dispatch) => {
 // can now dispatch stuff
    dispatch({ type: 'FETCH_POST', payload: { stuff: '' } });
  };
}

export function deletePost(id) {
/* axios delete */
}
