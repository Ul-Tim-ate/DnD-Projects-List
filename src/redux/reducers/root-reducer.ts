import { combineReducers } from "redux";
import projecter from "./projects";
import tusker from "./tusks";
import user from "./user";

const rootReducer = combineReducers({
  projecter,
  user,
  tusker,
});

export default rootReducer;
