import { combineReducers } from "redux";

import auth from "./auth";
import posts from "./posts";
import wizard from "./wizard";
import messages from "./messages";
import errors from "./errors";

export default combineReducers({ auth, posts, wizard, messages, errors });
