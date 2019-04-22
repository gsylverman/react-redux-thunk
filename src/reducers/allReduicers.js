import numberReducer from "./numberReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    number: numberReducer
});

export default allReducers;