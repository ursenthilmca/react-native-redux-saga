import { combineReducers } from "redux";
import Login from "./modules/login/reducer";

const rootReducer = combineReducers({
    login: Login
});
export default rootReducer;
