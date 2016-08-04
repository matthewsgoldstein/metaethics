import { ActionTypes } from '../actions';

const PostsReducer = (state = 0, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POST:
      return state;
    case ActionTypes.FETCH_POSTS:
      return state;
    default:
      return state;
  }
};

export default PostsReducer;
