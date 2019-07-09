import {
  USER_LOADED,
  //USER_LOADING,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS
} from "../constants/ActionTypes";

import { returnErrors } from "./messages";

import API from "../utils/APIUtils";

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  API.get("auth/user", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: AUTH_ERROR
      });
    });
};

// REGISTER USER
export const register = ({
  email,
  password,
  firstname,
  lastname,
  gender,
  birthday,
  country,
  accountType
}) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request Body
  const body = JSON.stringify({ email, password });
  const profile = JSON.stringify({
    firstname,
    lastname,
    gender,
    birthday,
    country,
    accountType
  });

  API.post("auth/register", body, config)
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
      dispatch(loadUser());
    })
    .catch(err =>
      dispatch({
        type: REGISTER_FAIL,
        payload: err
      })
    );
};

// LOGIN USER
export const login = (email, password) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request Body
  const body = JSON.stringify({ email, password });

  API.post("auth/login", body, config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: LOGIN_FAIL,
        payload: err
      })
    );
};

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
  API.post("auth/logout", null, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: LOGOUT_SUCCESS
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// Setup config with token - helpr function
export const tokenConfig = getState => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};
