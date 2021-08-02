import { combineReducers } from "redux";
import { loginCheck } from "./loginCheck";
import { modalOnoff } from "./modalOnoff";
import { loginKind } from "./loginKind";

const rootReducer = combineReducers({ loginCheck, modalOnoff, loginKind });
export default rootReducer;