import axios from "axios";
import { createMessage } from "./messages";

import { GET_ERRORS, GET_EVENTS } from "./types";

// GET EVENTS
export const getEvents = () => (dispatch) => {
  axios
    .get("http://localhost:8000/events/api/v1/")
    .then((res) => {
      dispatch(createMessage({ getEvents: "Events" }));
      dispatch({
        type: GET_EVENTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      if (err.response) {
        const errors = {
          msg: err.response.data,
          status: err.response.status,
        };

        dispatch({
          type: GET_ERRORS,
          payload: errors,
        });
      } else {
        console.log(err);
      }
    });
};
