import { combineReducers } from "redux";
import { loginCheck } from "./loginCheck";
import { modalOnoff } from "./modalOnoff";
import { loginKind } from "./loginKind";
import { userFilterReducer } from "./userFilterReducer";
import { jobFetchReducer } from "./jobFetchReducer";
import { urlUpdateReducer } from "./urlUpdateReducer";
import { profileUpdown } from "./profileUpdown"

const rootReducer = combineReducers({
    loginCheck, modalOnoff, loginKind, userFilterReducer,
    jobFetchReducer,
    urlUpdateReducer,
    profileUpdown
});
export default rootReducer;