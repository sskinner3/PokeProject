import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import dexReducer from "./DexReducer";
import pokeReducer from "./PokeReducer";

const AppReducers = combineReducers({
  dexReducer,
  pokeReducer,
});

const rootReducer = (state, action) => {
  return AppReducers(state, action);
};

export default createStore(rootReducer, applyMiddleware(thunk));
