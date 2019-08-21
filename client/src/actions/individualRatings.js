import {
  GET_INDIVIDUAL_RATINGS,
  ADD_RATING_SUCCESS,
  ADD_RATING_FAIL
} from "../constants/ActionTypes";
import { createMessage, returnErrors } from "./messages";

import API from "../utils/APIUtils";

// GET RATINGS
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

// ADD RATINGS
export const addRating = newRating => dispatch => {
  // Define header for multimedia upload
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Add a newRating to api
  API.post("basketball-ratings/", newRating, config)
    .then(res => {
      dispatch({
        type: ADD_RATING_SUCCESS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: ADD_RATING_FAIL,
        payload: err
      })
    );
};
