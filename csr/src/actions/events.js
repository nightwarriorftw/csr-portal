import axios from "axios";

import { GET_EVENTS, ADD_EVENT } from "./types";

// GET EVENTS
export const getEvents = () => (dispatch) => {
  axios
    .get("http://localhost:8000/events/api/v1/")
    .then((res) => {
      dispatch({
        type: GET_EVENTS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// ADD EVENTS
export const addEvents = (lead) => (dispatch) => {
  axios
    .post("http://localhost:8000/events/api/v1/", lead)
    .then((res) => {
      dispatch({
        type: ADD_EVENT,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
