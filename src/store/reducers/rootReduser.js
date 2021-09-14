import { combineReducers } from "redux";
import authReduser from "./auth";
import createReducer from "./create";
import quizReducer from "./quiz";

export default combineReducers({
  quiz: quizReducer,
  create: createReducer,
  auth: authReduser,
});
