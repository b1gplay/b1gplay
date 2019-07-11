import { GET_INDIVIDUAL_RATINGS } from "../constants/ActionTypes";
import { createMessage, returnErrors } from "./messages";

import API from "../utils/APIUtils";

// GET POSTS
export const getIndividualRatings = () => dispatch => {
  API.get("profiles/")
    .then(res => {
      dispatch(
        createMessage({ getIndividualRatings: "Individual ratings retrieved" })
      );
      dispatch({
        type: GET_INDIVIDUAL_RATINGS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
