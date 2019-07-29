import { GET_POSTS, DELETE_POST, ADD_POST } from "../constants/ActionTypes";

const initialState = {
  posts: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload.reverse()
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.reverse().filter(post => post.id !== action.payload)
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts.reverse(), action.payload]
      };

    default:
      return state;
  }
}
