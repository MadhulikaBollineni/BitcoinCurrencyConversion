import { combineReducers } from "redux";
import { dataReducer } from "./DataReducer";

const rootReducer = combineReducers({
  posts: dataReducer
});

export default rootReducer;
