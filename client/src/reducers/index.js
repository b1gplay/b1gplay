import { combineReducers } from "redux";

import posts from "./posts";
import wizard from "./wizard";
import messages from "./messages";
import errors from "./errors";

export default combineReducers({ posts, wizard, messages, errors });
