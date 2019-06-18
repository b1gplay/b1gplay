import axios from "axios";

import { GET_POSTS } from "../constants/ActionTypes";

// GET POSTS
export const getPosts = () => dispatch => {
  axios
    .get("http://127.0.0.1:8000/api/posts/")
    .then(res => {
      dispatch({
        type: GET_POSTS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
