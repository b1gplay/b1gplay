import { GET_POSTS, ADD_POST, DELETE_POST } from "../constants/ActionTypes";

import API from "../utils/APIUtils";

// GET POSTS
export const getPosts = () => dispatch => {
  API.get("posts")
    .then(res => {
      dispatch({
        type: GET_POSTS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// DELETE POST
export const deletePost = id => dispatch => {
  API.delete(`posts/${id}`)
    .then(res => {
      console.log(id);
      dispatch({
        type: DELETE_POST,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD POSTS
export const addPost = post => dispatch => {
  API.post("posts", post)
    .then(res => {
      dispatch({
        type: ADD_POST,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
