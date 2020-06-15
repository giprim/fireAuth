import AuthReducer from "./authReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
 auth: AuthReducer
})

export default allReducers