import { createStore } from "redux";
import { combineReducers } from "redux";
import postData from "./modules/post";
import nightMode from "./modules/nightMode";



const rootReducer = combineReducers({
  postData, nightMode
});

const store = createStore(rootReducer);

export default store;
