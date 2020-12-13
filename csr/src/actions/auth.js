import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "./types";
import axios from "axios";
import { createMessage } from "./messages";

// Check the user and load user
export const loadUser = () => (dispatch, getState) => {
  // user loading
  dispatch({ type: USER_LOADING });

  //  gettoken
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  // axios getrequest to get user
  axios
    .get("http://localhost:8000/accounts/api/v1/user/", config)
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })

    .catch((err) => {
      console.log(err);

      dispatch({
        type: AUTH_ERROR,
      });
    });
};

// Login User
export const login = (username, password) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request body
  const body = JSON.stringify({ username, password });

  // axios getrequest to get user
  axios
    .post("http://localhost:8000/accounts/api/v1/login/", body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })

    .catch((err) => {
      console.log(err);

      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

// Logout
export const logout = () => (dispatch, getState) => {
  //  gettoken
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // if token, add it to headers

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  // axios getrequest to get user
  axios
    .post("http://localhost:8000/accounts/api/v1/logout/", null, config)
    .then((res) => {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    })

    .catch((err) => {
      console.log(err);
    });
};
