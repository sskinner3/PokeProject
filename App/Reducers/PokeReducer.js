import * as Actions from "../Actions/ActionTypes";

const PokeReducer = (state = { list: [] }, action) => {
  switch (action.type) {
    case Actions.GET_LIST:
      return Object.assign({}, state, {
        list: ["Bulbasaur", "Ivysaur", "Venasaur"]
      });
    default:
      return state;
  }
};

export default PokeReducer;
