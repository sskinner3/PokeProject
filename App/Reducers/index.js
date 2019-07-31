import { combineReducers, createStore } from "redux";

import pokeReducer from "./PokeReducer";

const AppReducers = combineReducers({
  pokeReducer
});

const rootReducer = (state, action) => {
  return AppReducers(state, action);
};

let store = createStore(rootReducer);

export default store;
