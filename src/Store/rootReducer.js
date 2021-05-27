import { combineReducers } from "redux";
import { authReducer } from "Store/_reducers/auth.reduser";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
