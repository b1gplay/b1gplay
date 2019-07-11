import { GET_FOLLOWERS } from "../constants/ActionTypes";
import { createMessage, returnErrors } from "./messages";

import API from "../utils/APIUtils";

// GET POSTS
export const getFollowers = () => dispatch => {
  API.get("profiles/")
    .then(res => {
      dispatch(createMessage({ getFollowers: "Followers retrieved" }));
      dispatch({
        type: GET_FOLLOWERS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
