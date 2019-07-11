import { combineReducers } from "redux";

import auth from "./auth";
import profile from "./profile";
import individualRatings from "./individualRatings";
import following from "./following";
import followers from "./followers";
import suggestions from "./suggestions";
import posts from "./posts";
import wizard from "./wizard";
import messages from "./messages";
import errors from "./errors";

export default combineReducers({
  auth,
  profile,
  individualRatings,
  following,
  followers,
  suggestions,
  posts,
  wizard,
  messages,
  errors
});
