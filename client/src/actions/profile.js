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
  affiliation,
  profile_photo
}) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  /*  const config1 = {
    headers: {
      "content-type": "multipart/form-data"
    }
  }; */

  // Handle form data and image uploads
  const body = new FormData();
  body.append("id", id);
  body.append("firstname", firstname);
  body.append("lastname", lastname);
  body.append("gender", gender);
  body.append("birth_date", birth_date);
  body.append("residence_country", residence_country);
  body.append("bio", bio);
  body.append("account_type", account_type);
  body.append("height", height);
  body.append("position", position);
  body.append("wingspan", wingspan);
  body.append("vertical_leap", vertical_leap);
  body.append("time_to_run_40m", time_to_run_40m);
  body.append("time_to_run_100m", time_to_run_100m);
  body.append("affiliation", affiliation);
  body.append("profile_photo", profile_photo);

  console.log(body);

  API.patch(`profiles/${id}/`, body, config)
    .then(res => {
      dispatch({
        type: EDIT_PROFILE_SUCCESS,
        payload: res.data
      });
      dispatch(getProfile());
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
