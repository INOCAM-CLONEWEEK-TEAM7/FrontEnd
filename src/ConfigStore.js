import { createStore } from "redux";
import { combineReducers } from "redux";
import postData from "./modules/post";
import nightMode from "./modules/nightMode";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["nightMode"]
};

const rootReducer = combineReducers({
  postData, nightMode
});

const store = createStore(persistReducer(persistConfig, rootReducer));

export default store;
