import { combineReducers } from "redux";
import events from "./events";
import errors from './errors';

export default combineReducers({
  events,
  errors,
});
