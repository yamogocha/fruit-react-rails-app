import {combineReducers} from "redux";

import {fruits} from "./fruitsReducer";

const rootReducer = combineReducers({
  fruits
});

export default rootReducer;
