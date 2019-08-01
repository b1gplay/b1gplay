import {
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL
} from "../constants/ActionTypes";

import API from "../utils/APIUtils";

// ADD POSTS
export const addComment = comment => dispatch => {
  // Define header for multimedia upload
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Add a Post to api
  API.post("comments/", comment, config)
    .then(res => {
      dispatch({
        type: ADD_COMMENT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: ADD_COMMENT_FAIL,
        payload: err
      })
    );
};
