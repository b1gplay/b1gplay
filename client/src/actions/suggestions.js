import { GET_SUGGESTIONS } from "../constants/ActionTypes";
import { createMessage, returnErrors } from "./messages";

import API from "../utils/APIUtils";

// GET POSTS
export const getSuggestions = () => dispatch => {
  API.get("profiles/")
    .then(res => {
      dispatch(createMessage({ getSuggestions: "Suggestions retrieved" }));
      dispatch({
        type: GET_SUGGESTIONS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
