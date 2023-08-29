import { createStore, combineReducers } from "redux";

import { handlePopUp } from "./Reducers/popup.reducer";
import { handleNode } from "./Reducers/handleNode.reducer";

export const ConfigureStore = () => {
  const store = createStore(combineReducers({ handlePopUp, handleNode }));

  return store;
};
