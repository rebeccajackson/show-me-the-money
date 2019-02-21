import { combineReducers } from "redux";

import auth from "./auth";
import meetings from "./meetings";

export default combineReducers({
  auth,
  meetings
});
