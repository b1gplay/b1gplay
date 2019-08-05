import {
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL,
  GET_COMMENTS
} from "../constants/ActionTypes";
import { createMessage, returnErrors } from "./messages";

import API from "../utils/APIUtils";

// ADD COMMENT
export const addComment = comment => dispatch => {
  // Define header for multimedia upload
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Add a comment to api
  API.post("comments/", comment, config)
    .then(res => {
      dispatch({
        type: ADD_COMMENT_SUCCESS,
        payload: res.data
      });
      dispatch(getComments());
    })
    .catch(err =>
      dispatch({
        type: ADD_COMMENT_FAIL,
        payload: err
      })
    );
};

// GET POSTS
export const getComments = () => dispatch => {
  API.get("comments/")
    .then(res => {
      dispatch(createMessage({ getComments: "Comments retrieved" }));
      dispatch({
        type: GET_COMMENTS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
