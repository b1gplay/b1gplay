import { GET_FOLLOWING } from "../constants/ActionTypes";
import { createMessage, returnErrors } from "./messages";

import API from "../utils/APIUtils";

// GET POSTS
export const getFollowing = () => dispatch => {
  API.get("profiles/")
    .then(res => {
      dispatch(createMessage({ getFollowing: "Following retrieved" }));
      dispatch({
        type: GET_FOLLOWING,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
