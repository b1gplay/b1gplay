import { GET_POSTS, ADD_POST, DELETE_POST } from "../constants/ActionTypes";
import { createMessage, returnErrors } from "./messages";

import API from "../utils/APIUtils";

// GET POSTS
export const getPosts = () => dispatch => {
  API.get("posts/")
    .then(res => {
      dispatch(createMessage({ getPosts: "Posts retrieved" }));
      dispatch({
        type: GET_POSTS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE POST
export const deletePost = id => dispatch => {
  API.delete(`posts/${id}`)
    .then(res => {
      dispatch(createMessage({ deletePost: "Post Deleted" }));
      dispatch({
        type: DELETE_POST,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD POSTS
export const addPost = post => dispatch => {
  const config = {
    headers: {
      "content-type": "multipart/form-data"
    }
  };
  API.post("posts/", { post }, config)
    .then(res => {
      dispatch({
        type: ADD_POST,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
