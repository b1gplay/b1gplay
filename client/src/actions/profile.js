import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAIL,
  EDIT_FIELD
} from "../constants/ActionTypes";

import API from "../utils/APIUtils";

import { loadUser } from "./auth";

// GET PROFILE
export const getProfile = () => (dispatch, getState) => {
  dispatch(loadUser());
  const user = getState().auth.user.id;
  API.get("profiles", {
    params: {
      user
    }
  })
    .then(res => {
      const profileID = res.data[0].id;
      API.get(`profiles/${profileID}/`)
        .then(response => {
          dispatch({
            type: GET_PROFILE_SUCCESS,
            payload: response.data
          });
        })
        .catch(error => {
          dispatch({
            type: GET_PROFILE_FAIL,
            payload: error
          });
        });
    })
    .catch(err => err);
};

// EDIT PROFILE
export const editProfile = ({
  id,
  firstname,
  lastname,
  gender,
  birth_date,
  residence_country,
  bio,
  account_type,
  height,
  position,
  wingspan,
  vertical_leap,
  time_to_run_40m,
  time_to_run_100m,
  affiliation
}) => (dispatch, getState) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const profile = JSON.stringify({
    id,
    firstname,
    lastname,
    gender,
    birth_date,
    residence_country,
    bio,
    account_type,
    //media_house,
    height,
    position,
    wingspan,
    vertical_leap,
    time_to_run_40m,
    time_to_run_100m,
    affiliation
  });
  API.patch(`profiles/${id}/`, profile, config)
    .then(res => {
      dispatch({
        type: EDIT_PROFILE_SUCCESS,
        payload: res.data
      });
    })
    .catch(error => {
      dispatch({
        type: EDIT_PROFILE_FAIL,
        payload: error
      });
    });
};

// EDIT FIELD
export const editField = (field, value) => dispatch => {
  dispatch({
    type: EDIT_FIELD,
    field,
    value
  });
};
