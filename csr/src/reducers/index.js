import { combineReducers } from "redux";
import events from "./events";
import errors from './errors';
import messages from './messages';

export default combineReducers({
  events,
  errors,
  messages,
});
