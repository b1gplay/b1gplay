import { combineReducers } from "redux";

import auth from "./auth";
import profile from "./profile";
import photoGallery from "./photoGallery";
import individualRatings from "./individualRatings";
import following from "./following";
import followers from "./followers";
import suggestions from "./suggestions";
import posts from "./posts";
import comments from "./comments";
import wizard from "./wizard";
import messages from "./messages";
import errors from "./errors";

export default combineReducers({
  auth,
  profile,
  photoGallery,
  individualRatings,
  following,
  followers,
  suggestions,
  posts,
  comments,
  wizard,
  messages,
  errors
});
