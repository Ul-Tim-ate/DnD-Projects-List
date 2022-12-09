import { combineReducers } from "redux";
import projecter from "./projects";
import user from "./user";

const rootReducer = combineReducers({
  projecter,
  user,
});

export default rootReducer;
